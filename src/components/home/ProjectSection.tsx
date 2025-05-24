import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
    {
        title: "E-Commerce Platform",
        description:
            "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
        image: "/placeholder.svg?height=200&width=400",
        technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/johndoe/ecommerce",
        featured: true,
    },
    {
        title: "Task Management App",
        description:
            "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "/placeholder.svg?height=200&width=400",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/johndoe/taskmanager",
        featured: true,
    },
    {
        title: "Weather Dashboard",
        description:
            "A responsive weather dashboard that displays current conditions and forecasts using external APIs with beautiful data visualizations.",
        image: "/placeholder.svg?height=200&width=400",
        technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/johndoe/weather",
        featured: false,
    },
    {
        title: "Portfolio Website",
        description:
            "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and optimized performance.",
        image: "/placeholder.svg?height=200&width=400",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/johndoe/portfolio",
        featured: false,
    },
    {
        title: "Blog Platform",
        description:
            "A content management system for bloggers with markdown support, SEO optimization, and social media integration.",
        image: "/placeholder.svg?height=200&width=400",
        technologies: ["Next.js", "MDX", "Prisma", "NextAuth.js"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/johndoe/blog",
        featured: false,
    },
    {
        title: "Chat Application",
        description: "Real-time chat application with private messaging, group chats, file sharing, and emoji support.",
        image: "/placeholder.svg?height=200&width=400",
        technologies: ["React", "Socket.io", "Express.js", "MongoDB"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/johndoe/chat",
        featured: false,
    },
]

export default function ProjectsSection() {
    const featuredProjects = projects.filter((project) => project.featured)
    const otherProjects = projects.filter((project) => !project.featured)

    return (
        <section id="projects" className="w-full">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Featured Projects</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            {/* Featured Projects */}
            <div className="space-y-8 mb-16">
                {featuredProjects.map((project, index) => (
                    <Card key={index} className="overflow-hidden">
                        <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                            <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                            </div>
                            <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <Badge key={techIndex} variant="secondary">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <Button asChild>
                                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="h-4 w-4 mr-2" />
                                                Live Demo
                                            </Link>
                                        </Button>
                                        <Button variant="outline" asChild>
                                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="h-4 w-4 mr-2" />
                                                Code
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Other Projects */}
            <div className="space-y-8">
                <h3 className="text-2xl font-bold text-center">Other Projects</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((project, index) => (
                        <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                            <div className="relative h-48">
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-lg">{project.title}</CardTitle>
                                <CardDescription className="text-sm">{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex flex-wrap gap-1">
                                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                        <Badge key={techIndex} variant="outline" className="text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <Badge variant="outline" className="text-xs">
                                            +{project.technologies.length - 3}
                                        </Badge>
                                    )}
                                </div>

                                <div className="flex gap-2">
                                    <Button size="sm" asChild className="flex-1">
                                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="h-3 w-3 mr-1" />
                                            Demo
                                        </Link>
                                    </Button>
                                    <Button size="sm" variant="outline" asChild className="flex-1">
                                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="h-3 w-3 mr-1" />
                                            Code
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
