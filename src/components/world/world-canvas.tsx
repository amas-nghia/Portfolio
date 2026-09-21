"use client";

import { useEffect, useRef, useState } from "react";

type WorldCanvasProps = {
  characterModel: string;
  idleCharacterModel: string;
  groundModel: string;
};

type ProgressDetail = {
  progress: number;
};

function disposeMaterial(material: import("three").Material) {
  const candidate = material as import("three").Material & Record<string, unknown>;
  Object.values(candidate).forEach((value) => {
    if (value && typeof value === "object" && "isTexture" in value) {
      (value as import("three").Texture).dispose();
    }
  });
  material.dispose();
}

export function WorldCanvas({
  characterModel,
  idleCharacterModel,
  groundModel,
}: WorldCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let disposed = false;
    let disposeScene = () => {};

    async function setupScene() {
      try {
        const [THREE, { GLTFLoader }] = await Promise.all([
          import("three"),
          import("three/examples/jsm/loaders/GLTFLoader.js"),
        ]);
        if (disposed || !mount) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(29, 1, 0.1, 100);
        camera.position.set(0, 0.55, 6.4);
        camera.lookAt(0, -0.15, 0);

        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        });
        renderer.setClearColor(0x000000, 0);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.08;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.domElement.setAttribute("aria-hidden", "true");
        mount.appendChild(renderer.domElement);
        scene.add(new THREE.HemisphereLight(0xfff5dc, 0x496154, 2.2));

        const keyLight = new THREE.DirectionalLight(0xffd69c, 3.1);
        keyLight.position.set(4, 6, 4);
        keyLight.castShadow = true;
        keyLight.shadow.mapSize.set(1024, 1024);
        keyLight.shadow.camera.near = 0.1;
        keyLight.shadow.camera.far = 18;
        scene.add(keyLight);

        const fillLight = new THREE.DirectionalLight(0x9cb7c5, 1.15);
        fillLight.position.set(-4, 2, 3);
        scene.add(fillLight);

        const loader = new GLTFLoader();
        const [characterGltf, idleGltf, groundGltf] = await Promise.all([
          loader.loadAsync(characterModel),
          loader.loadAsync(idleCharacterModel),
          loader.loadAsync(groundModel),
        ]);
        if (disposed) return;

        const ground = groundGltf.scene;
        ground.rotation.y = Math.PI / 2;
        ground.scale.setScalar(6.6);
        ground.position.set(0.15, -1.28, 0.2);
        ground.traverse((object) => {
          if (!(object instanceof THREE.Mesh)) return;
          object.receiveShadow = true;
          object.castShadow = false;
        });
        scene.add(ground);

        const characterRoot = new THREE.Group();
        const character = characterGltf.scene;
        character.scale.setScalar(0.82);
        character.rotation.y = 0;
        character.traverse((object) => {
          if (!(object instanceof THREE.Mesh)) return;
          object.castShadow = true;
          object.receiveShadow = true;
        });
        characterRoot.add(character);
        characterRoot.position.set(-1.65, -1.22, 0.02);
        scene.add(characterRoot);

        const shadow = new THREE.Mesh(
          new THREE.CircleGeometry(0.46, 32),
          new THREE.ShadowMaterial({ color: 0x1b3328, opacity: 0.22 }),
        );
        shadow.rotation.x = -Math.PI / 2;
        shadow.position.set(0, -1.235, 0.02);
        shadow.receiveShadow = true;
        scene.add(shadow);

        const mixer = new THREE.AnimationMixer(character);
        const walkingClip = characterGltf.animations.find((clip) =>
          clip.name.toLowerCase().includes("walking"),
        ) ?? characterGltf.animations[0];
        const idleClip = idleGltf.animations.find((clip) =>
          clip.name.toLowerCase().includes("idle"),
        ) ?? idleGltf.animations[0];
        const walkingAction = walkingClip ? mixer.clipAction(walkingClip) : null;
        const idleAction = idleClip ? mixer.clipAction(idleClip) : null;

        walkingAction?.setEffectiveWeight(0).play();
        idleAction?.setEffectiveWeight(1).play();

        idleGltf.scene.traverse((object) => {
          if (!(object instanceof THREE.Mesh)) return;
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach(disposeMaterial);
          } else {
            disposeMaterial(object.material);
          }
        });

        const initialProgress = THREE.MathUtils.clamp(
          Number(mount.closest<HTMLElement>("[data-world-scroll]")?.dataset.worldProgress) || 0,
          0,
          1,
        );
        let progress = initialProgress;
        let targetProgress = initialProgress;
        let pointerX = 0;
        let isMobile = false;
        let motionState: "idle" | "walking" = "idle";
        let facingDirection = 1;
        let lastProgress = initialProgress;
        let movingUntil = 0;
        const clock = new THREE.Clock();

        const setMotionState = (nextState: "idle" | "walking") => {
          if (nextState === motionState) return;
          motionState = nextState;

          if (!walkingAction || !idleAction) {
            if (walkingAction) walkingAction.timeScale = nextState === "walking" ? 1 : 0.08;
            return;
          }

          if (nextState === "walking") {
            walkingAction.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).play();
            idleAction.crossFadeTo(walkingAction, 0.24, true);
          } else {
            idleAction.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).play();
            walkingAction.crossFadeTo(idleAction, 0.28, true);
          }
        };

        const onProgress = (event: Event) => {
          const detail = (event as CustomEvent<ProgressDetail>).detail;
          const nextProgress = THREE.MathUtils.clamp(detail.progress, 0, 1);
          const direction = Math.sign(nextProgress - lastProgress);
          if (direction !== 0) facingDirection = direction;
          targetProgress = nextProgress;
          if (Math.abs(targetProgress - lastProgress) > 0.00025) {
            movingUntil = performance.now() + 260;
          }
          lastProgress = targetProgress;
        };

        const onPointerMove = (event: PointerEvent) => {
          pointerX = (event.clientX / window.innerWidth) * 2 - 1;
        };

        window.addEventListener("amas:world-progress", onProgress);
        window.addEventListener("pointermove", onPointerMove, { passive: true });

        const resize = () => {
          const { clientWidth, clientHeight } = mount;
          if (!clientWidth || !clientHeight) return;
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
          renderer.setSize(clientWidth, clientHeight, false);
          camera.aspect = clientWidth / clientHeight;
          camera.updateProjectionMatrix();
          isMobile = window.matchMedia("(max-width: 767px)").matches;
        };

        const observer = new ResizeObserver(resize);
        observer.observe(mount);
        resize();

        const animate = () => {
          if (disposed) return;
          const delta = Math.min(clock.getDelta(), 0.05);
          progress = THREE.MathUtils.damp(progress, targetProgress, 7.5, delta);
          const moving =
            performance.now() < movingUntil || Math.abs(targetProgress - progress) > 0.0008;
          setMotionState(moving ? "walking" : "idle");

          const x = isMobile ? 0 : THREE.MathUtils.lerp(-1.68, 1.82, progress);
          const y = -1.22 + Math.sin(progress * Math.PI) * 0.04;
          characterRoot.position.set(x, y, 0.02);
          shadow.position.x = x;
          shadow.position.z = 0.02;
          ground.position.x = THREE.MathUtils.damp(
            ground.position.x,
            isMobile ? 0.15 - progress * 1.1 : 0.15,
            6,
            delta,
          );

          const targetRotation = moving
            ? facingDirection >= 0
              ? Math.PI / 2
              : -Math.PI / 2
            : isMobile
              ? 0
              : pointerX * 0.1;
          character.rotation.y = THREE.MathUtils.damp(
            character.rotation.y,
            targetRotation,
            moving ? 8 : 5,
            delta,
          );

          mixer.update(delta);
          renderer.render(scene, camera);
        };

        renderer.setAnimationLoop(animate);
        setStatus("ready");

        disposeScene = () => {
          observer.disconnect();
          window.removeEventListener("amas:world-progress", onProgress);
          window.removeEventListener("pointermove", onPointerMove);
          renderer.setAnimationLoop(null);
          mixer.stopAllAction();
          scene.traverse((object) => {
            if (!(object instanceof THREE.Mesh)) return;
            object.geometry.dispose();
            if (Array.isArray(object.material)) {
              object.material.forEach(disposeMaterial);
            } else {
              disposeMaterial(object.material);
            }
          });
          renderer.dispose();
          renderer.domElement.remove();
        };
      } catch (error) {
        console.error("[world-canvas] Unable to initialize WebGL scene", error);
        if (!disposed) setStatus("error");
      }
    }

    void setupScene();

    return () => {
      disposed = true;
      disposeScene();
    };
  }, [characterModel, groundModel, idleCharacterModel]);

  return (
    <div ref={mountRef} className="world-canvas" data-state={status}>
      <span className="sr-only" aria-live="polite">
        {status === "loading" ? "Loading interactive character" : ""}
        {status === "error" ? "Interactive character unavailable" : ""}
      </span>
      {status === "loading" ? (
        <span className="world-loading" aria-hidden="true">
          Loading world…
        </span>
      ) : null}
    </div>
  );
}
