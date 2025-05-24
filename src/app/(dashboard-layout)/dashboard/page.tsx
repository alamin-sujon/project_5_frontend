"use client"
import BlogTable from '@/components/dashboard/tables/BlogTable';
import ProjectTable from '@/components/dashboard/tables/ProjectTable';
import { IBlog, IProject } from '@/components/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { useGetBlogsQuery } from '@/redux/feature/blogs/blogApi';
import { useGetAllMessageQuery } from '@/redux/feature/messages/messageApi';
import { useGetprojectsQuery } from '@/redux/feature/projects/projectApi';
import { selectUser } from '@/redux/feature/user/userReducer';
import { useAppSelector } from '@/redux/hooks';
import TableSkeleton from '@/utils/loading/TableSkeleton';

// import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useMemo } from 'react';


const DashboardPage = () => {
    // const { data: session } = useSession();
    const user = useAppSelector(selectUser)

    const { data: messages } = useGetAllMessageQuery(null);
    const { data: projects, refetch: projectRefetch, isLoading: projectLoading } = useGetprojectsQuery(null)
    const { data: blogs, refetch: blogRefetch, isLoading: blogLoading } = useGetBlogsQuery(null)


    // Projects
    const projectList = useMemo(() => projects?.slice(0, 3)?.map((project: IProject) => <ProjectTable key={project?._id} user={user!} refetch={projectRefetch} project={project} />), [projects, projectRefetch, user]);

    // Blogs
    const blogList = useMemo(
        () => blogs?.slice(0, 3)?.map((blog: IBlog) => <BlogTable user={user!} refetch={blogRefetch} key={blog?._id} blog={blog} />),
        [blogs, user, blogRefetch]
    );

    return (
        <div className='bg-white'>
            <div className=' mb-6'>
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Dashboard Overview</h1>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="flex items-center hover:shadow-xl transition-shadow duration-500 cursor-pointer ">

                    <CardContent className="py-5">
                        <CardTitle className="text-2xl font-semibold">Total Projects</CardTitle>
                        <p className="text-green-600 text-xl font-bold">{projects?.length}</p>
                    </CardContent>
                </Card>
                <Card className="flex items-center hover:shadow-xl transition-shadow duration-500 cursor-pointer  ">

                    <CardContent className="py-5">
                        <CardTitle className="text-2xl font-semibold">Total Blogs</CardTitle>
                        <p className="text-blue-600 text-xl font-bold">{blogs?.length}</p>
                    </CardContent>
                </Card>
                <Card className="flex items-center hover:shadow-xl transition-shadow duration-500 cursor-pointer ">

                    <CardContent className=" py-5">
                        <CardTitle className="text-2xl font-semibold">Total Messages</CardTitle>
                        <p className="text-red-600 text-xl font-bold">{messages?.length}</p>
                    </CardContent>
                </Card>
            </div>

            {/* Projects */}
            <div className='mt-16'>
                <div className='flex justify-between items-center mb-6'>
                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Projects </h1>

                    <Link href={'/dashboard/projects'}> <Button variant={"outline"}>View All Projects</Button></Link>
                </div>

                {projectLoading ? <TableSkeleton /> : <table className="min-w-full shadow-lg divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th scope="col" className="py-3.5 px-4 text-base font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                Project Name
                            </th>

                            <th scope="col" className="px-12 py-3.5 text-base font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <button className="flex items-center gap-x-2">
                                    <span>Description</span>


                                </button>
                            </th>

                            <th scope="col" className="px-4 py-3.5 text-base font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                Live Link
                            </th>

                            <th scope="col" className="px-4 py-3.5 text-base font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Developer</th>
                            <th scope="col" className="px-4 py-3.5 text-base font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Action</th>




                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        {
                            projectList
                        }

                    </tbody>
                </table>}
            </div>
            <div className='mt-16'>
                <div className='flex justify-between items-center mb-6'>
                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Blogs </h1>

                    <Link href={'/dashboard/blogs'}> <Button variant={'outline'} >View All Blogs</Button></Link>
                </div>

                {
                    blogLoading ? <TableSkeleton /> : <table className="min-w-full shadow-lg divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-base font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">


                                    Image

                                </th>
                                <th scope="col" className="py-3.5 px-4 text-base font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">


                                    Title

                                </th>
                                <th scope="col" className="py-3.5 px-4 text-base font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">


                                    Category

                                </th>



                                <th scope="col" className="px-4 py-3.5 text-base font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Author
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-base font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Created At</th>

                                <th scope="col" className="px-4 py-3.5 text-base font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Action</th>


                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                            {blogList}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    );
};

export default DashboardPage;