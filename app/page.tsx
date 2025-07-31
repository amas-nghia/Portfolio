import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  GamepadIcon,
  Code,
  Palette,
  Calendar,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const experiences = [
    {
      company: "Capy Labs",
      position: "Developer",
      period: "Aug 2024 - Present",
      description:
        "Developing NFT games for Android and Web using Unity Engine and Phaser Framework. Building partner websites using TypeScript, React, and NextJS.",
      technologies: [
        "Unity",
        "Photon",
        "Nakama",
        "Phaser",
        "TypeScript",
        "React",
        "NextJS",
        "TailwindCSS",
      ],
    },
    {
      company: "EGD Group",
      position: "Unity Game Developer - Junior/Middle",
      period: "Jul 2023 - Jul 2024",
      description:
        "Developed mobile games from concept to release, including programming, ideation, graphic design, and client communication to create engaging and profitable games.",
      technologies: [
        "Unity",
        "Mobile Development",

        "Graphic Design",
        "AdMob",
        "Firebase",
        "Photoshop",
        "Blender",
      ],
    },
    {
      company: "Dinosys Corporation",
      position: "Unity Game Developer - Junior",
      period: "Jul 2022 - Jul 2023",
      description:
        "Built NFT game 'Hellven' using Unity Engine. Developed multiplayer shooter 'Gunslinger' and 'Metabank' project for VPBank and Vietcombank.",
      technologies: [
        "Unity",
        "NFT Games",
        "Multiplayer",
        "Game Development",
        "WebGL",
        "Spine",
        "Zenject",
        "Nakama",
      ],
    },
    {
      company: "The Minders Studio",
      position: "Unity Game Developer - Fresher",
      period: "Jan 2022 - Jun 2022",
      description:
        "Learned project management through Jira, Git workflows, Photon library, RPC models, and API integration. Optimized game UI management and performance.",
      technologies: ["Unity", "Photon", "Git", "Jira", "API Integration"],
    },
    {
      company: "Leanminds Studio",
      position: "Unity Game Developer - Intern",
      period: "Oct 2020 - Dec 2021",
      description:
        "Developed mobile games including programming, graphic design, and game experience design in a small team environment.",
      technologies: ["Unity", "Mobile Games", "Game Design", "Graphics"],
    },
  ];

  const projects = [
    {
      title: "Basoho Real Estate Platform",
      period: "Apr 2025 - Present",
      teamSize: "6",
      developmentDuration: "6 months",
      description:
        "Real estate platform supporting property businesses with VIP listings, top placement, location-based search, and advertising features.",
      image:
        "https://storage.googleapis.com/amasnghia-porfolio/Basoho.png?height=300&width=500",
      technologies: [
        "React",
        "TypeScript",
        "React Query",
        "Zustand",
        "Axios",
        "Next.js",
        "TailwindCSS",
        "Responsive Design",
        "SEO",
      ],
      link: "https://www.basoho.com.vn/",
      status: "Live",
    },
    {
      title: "Koala Island",
      period: "June - Present",
      teamSize: "3",
      description:
        "NFT game platform for trading and playing games, featuring a dynamic marketplace for buying and selling NFTs. The game offers comprehensive onsen management, upgrade systems, staff recruitment, competitive arena fighting, lucky spin mechanics, and a relaxing zen garden, delivering a rich and engaging experience for players and collectors.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: [
        "Phaser",
        "TypeScript",
        "React",
        "Next.js",
        "React Query",
        "Zustand",
        "Axios",
        "TailwindCSS",
        "Amazon S3",
      ],
      link: "#",
      status: "Ongoing",
    },
    {
      title: "VR Tour Projects",
      period: "Apr 2025 - Present",
      teamSize: "1",
      developmentDuration: "1 day per project",
      description:
        "Interactive VR tours providing authentic experiences for businesses and products without physical visits.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["WebGL", "VR", "3D Graphics", "JavaScript"],
      link: "https://vrtour.wepac.vn/",
      status: "Live",
    },
    {
      title: "Grand Toilet Auto",
      period: "2024",
      teamSize: "3",
      developmentDuration: "5 weeks",
      description:
        "Android mobile game with optimized performance and integrated advertising systems.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: [
        "Unity",
        "Android",
        "AdMob",
        "Firebase",
        "C#",
        "Google Play Games Services (GPGS)",
      ],
      link: "#",
      status: "Live",
    },
    {
      title: "Tapout: Unlock Anime",
      period: "2024",
      teamSize: "3",
      developmentDuration: "3 weeks",
      description:
        "Android Puzzle mobile game with optimized performance and integrated advertising systems.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: [
        "Unity",
        "Android",
        "AdMob",
        "Firebase",
        "C#",
        "Applovin",
        "Google Play Games Services (GPGS)",
      ],
      link: "#",
      status: "Live",
    },
    {
      title: "Rope Tangle - Master Twisted 3D",
      period: "2024",
      teamSize: "3",
      developmentDuration: "4 weeks",
      description:
        "3D puzzle game featuring rope physics and optimized mobile performance.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: [
        "Unity",
        "Obi-rope",
        "AdMob",
        "Firebase",
        "C#",
        "Google Play Games Services (GPGS)",
      ],
      link: "https://play.google.com/store/apps/details?id=com.ccn.davi&pcampaignid=web_share",
      status: "Closed",
    },
    {
      title: "Gunslinger",
      period: "2023",
      teamSize: "1",
      description:
        "Multiplayer shooter game with real-time combat and multiplayer features.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Unity", "Photon Fusion", "Multiplayer", "C#"],
      link: "#",
      status: "Suspended",
    },
    {
      title: "Hellven NFT Game",
      period: "Jul 2022 - Jul 2023",
      teamSize: "11",
      description:
        "WebGL NFT game developed for funding and full product deployment.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Unity", "WebGL", "Nakama", "Spine"],
      link: "#",
      status: "Closed",
    },
    {
      title: "Planet Sandbox",
      period: "2022",
      description:
        "Multiplayer sandbox game with multilingual support and collaborative UI development.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Unity", "Photon Fusion", "Multiplayer", "C#"],
      link: "#",
      status: "Closed",
    },
    {
      title: "Davi",
      period: "2021",
      teamSize: "3",
      description:
        "Android mobile game with optimized performance and integrated advertising systems.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: [
        "Godot",
        "Android",
        "AdMob",
        "Firebase",
        "GDScript",
        "DragonBones",
      ],
      link: "#",
      status: "Live",
    },
  ];

  const skills = [
    {
      category: "Game Development",
      items: [
        "Unity Engine",
        "C# Programming",
        "Phaser Framework",
        "2D/3D Games",
        "Mobile Optimization",
        "Multiplayer (Netcode/Nakama)",
        "Game Physics",
        "Animation Systems",
      ],
    },
    {
      category: "Frontend Development",
      items: [
        "React",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "Shadcn",
        "SSR/SSG",
        "SEO Optimization",
        "Responsive Design",
      ],
    },
    {
      category: "Tools & Technologies",
      items: [
        "Unity UI Toolkit",
        "Git/GitHub",
        "Jira/Trello",
        "Firebase",
        "AdMob",
        "Photon",
        "WebGL",
        "Android Development",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Problem Solving",
        "Team Collaboration",
        "Agile/Scrum",
        "Project Management",
        "Time Management",
        "Client Communication",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-light tracking-wide">
              Nguyễn Thành Nghĩa
            </div>
            <div className="flex gap-8">
              <Link
                href="#about"
                className="text-sm hover:text-gray-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="#experience"
                className="text-sm hover:text-gray-600 transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="text-sm hover:text-gray-600 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="text-sm hover:text-gray-600 transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="text-sm hover:text-gray-600 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-light tracking-tight">
                Game Developer
              </h1>
              <div className="w-24 h-px bg-black mx-auto"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Passionate about creating immersive gaming experiences through
                Unity Engine and modern web technologies. Specializing in mobile
                games, NFT platforms, and interactive applications.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Hà Nội, Vietnam</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>0352614770</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>thanhnghia98@gmail.com</span>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 bg-transparent"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/nghia-nguyen-thanh-4b61a613a"
                  target="_blank"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 bg-transparent"
              >
                <Link
                  href="https://www.linkedin.com/in/nghia-nguyen-thanh-4b61a613a"
                  target="_blank"
                >
                  <Github className="w-4 h-4 mr-2" />
                </Link>
                GitHub
              </Button>
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 bg-transparent"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">About</h2>
            <div className="w-16 h-px bg-black mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                I am a dedicated game developer with over 4 years of experience
                in Unity Engine and modern web technologies. My journey spans
                from intern to developer, working on diverse projects including
                mobile games, NFT platforms, and interactive web applications.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                I specialize in creating engaging mobile games, optimizing
                performance, and integrating modern technologies like
                multiplayer systems, advertising platforms, and blockchain
                solutions. My goal is to become a technical expert in game
                development while contributing to innovative gaming experiences.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Unity Certified Associate: Game Developer (Dec 2022)
                  </Badge>
                </div>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <GamepadIcon className="w-5 h-5" />
                    <span className="text-sm">4+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    <span className="text-sm">15+ Projects</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <Image
                  className="w-full h-full object-cover rounded-lg"
                  src={
                    "https://storage.googleapis.com/amasnghia-porfolio/avatar.jpg"
                  }
                  alt={"avatar"}
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Experience</h2>
            <div className="w-16 h-px bg-black mx-auto"></div>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                      <div className="space-y-2">
                        <h3 className="font-medium text-lg">{exp.company}</h3>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </p>
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <div className="space-y-4">
                        <h4 className="text-xl font-light">{exp.position}</h4>
                        <p className="text-gray-700 leading-relaxed">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Featured Projects</h2>
            <div className="w-16 h-px bg-black mx-auto"></div>
          </div>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-video md:aspect-auto">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-2xl font-light">
                          {project.title}
                        </CardTitle>
                        <Badge
                          variant={
                            project.status === "Live" ? "default" : "secondary"
                          }
                          className="text-xs"
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{project.period}</p>
                      <CardDescription className="text-base leading-relaxed text-gray-600">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      {project.link !== "#" && (
                        <Button
                          variant="outline"
                          className="w-fit border-black text-black hover:bg-black hover:text-white transition-all duration-300 bg-transparent"
                          asChild
                        >
                          <Link href={project.link} target="_blank">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Project
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Skills & Technologies</h2>
            <div className="w-16 h-px bg-black mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-light flex items-center gap-2">
                    {skillGroup.category === "Game Development" && (
                      <GamepadIcon className="w-5 h-5" />
                    )}
                    {skillGroup.category === "Frontend Development" && (
                      <Code className="w-5 h-5" />
                    )}
                    {skillGroup.category === "Tools & Technologies" && (
                      <Palette className="w-5 h-5" />
                    )}
                    {skillGroup.category === "Soft Skills" && (
                      <Calendar className="w-5 h-5" />
                    )}
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-light mb-4">Let's Work Together</h2>
              <div className="w-16 h-px bg-black mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                Interested in collaborating on game development projects or
                discussing opportunities? I'm always open to new challenges and
                meaningful partnerships.
              </p>
            </div>
            <div className="flex justify-center gap-6">
              <Button
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="mailto:thanhnghia98@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 bg-transparent"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/nghia-nguyen-thanh-4b61a613a"
                  target="_blank"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="tel:0352614770">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Nguyễn Thành Nghĩa. Crafted with
              passion for gaming.
            </div>
            <div className="text-sm text-gray-600">
              遊戲開發者 - Game Developer
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
