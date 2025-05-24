// import ProjectCard from '@/components/ProjectCard';
import ProjectCard from '@/components/home/ProjectCard';
import { IProject } from '@/components/types';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
    title: 'Projects'
}
const ProjectPage = async () => {
    const res = await fetch(`${process.env.API_URL}/projects`, { cache: 'no-store' })
    const { data: projects } = await res.json() as { data: IProject[] }

    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {projects?.map((project: IProject) => <ProjectCard key={project?._id} project={project} />)}
            </div>
        </div>
    );
};

export default ProjectPage;