import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { IProject } from '../types'

export default function ProjectCard({ project }: { project: IProject }) {
    return (
        <Link href={`/projects/${project?._id}`} className="group">
            <Card className="overflow-hidden rounded-none group hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                    <Image
                        src={project?.image || "/placeholder.svg"}
                        alt={project?.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <CardHeader>
                    <CardTitle className="text-lg">{project?.name}</CardTitle>
                    <CardDescription className="text-sm line-clamp-2">{project?.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                        {project?.technologies?.slice(0, 3).map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                                {tech}
                            </Badge>
                        ))}
                        {project?.technologies.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                                +{project.technologies.length - 3}
                            </Badge>
                        )}
                    </div>

                    <div className="flex gap-2">
                        <Button size="sm" asChild className="flex-1 bg-[#38c09e]">
                            <Link href={project?.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3 mr-1" />
                                Demo
                            </Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild className="flex-1">
                            <Link href={project?.githubClient as string} target="_blank" rel="noopener noreferrer">
                                <Github className="h-3 w-3 mr-1" />
                                Code
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}
