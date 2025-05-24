// import ProjectCard from '@/components/ProjectCard';
import { IProject } from '@/components/types';
import { Metadata } from 'next';
import React from 'react';
import ProjectCard from './ProjectCard';
export const metadata: Metadata = {
    title: 'Projects'
}
const Project = async () => {
    const res = await fetch(`${process.env.API_URL}/projects`, { next: { revalidate: 600 } })
    const { data: projects } = await res.json()

    return (
        <div>
            <h1 className='text-3xl  font-bold text-gray-50 text-center mb-5'>My Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {projects?.slice(0, 3)?.map((project: IProject) => <ProjectCard key={project?._id} project={project} />)}
            </div>
        </div>
    );
};

export default Project;