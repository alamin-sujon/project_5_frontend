/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { CreateBlogModal } from '@/components/dashboard/modals/CreateBlog';
import BlogTable from '@/components/dashboard/tables/BlogTable';
import { IBlog } from '@/components/types';

import { useCreateBlogMutation, useGetBlogsQuery } from '@/redux/feature/blogs/blogApi';
import { selectUser } from '@/redux/feature/user/userReducer';
import { useAppSelector } from '@/redux/hooks';
import TableSkeleton from '@/utils/loading/TableSkeleton';
// import { useSession } from 'next-auth/react';
import React, { useMemo, useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';

const BlogsManagement = () => {
    const { data: blogs, isLoading, refetch } = useGetBlogsQuery(null)
    const user = useAppSelector(selectUser)
    const [createBlog, { isLoading: createBlogLoading }] = useCreateBlogMutation();
    const [isOpen, setIsOpen] = useState(false)
    const handleCreate: SubmitHandler<FieldValues> = async (data) => {

        try {
            // const author = { name: session?.user?.name, email: session?.user?.email, avatar: session?.user?.image }
            data.author = {
                name: user?.name,
                email: user?.email,
                avatar: user?.image
            }
            const result = await createBlog(data).unwrap();
            if (result) {
                toast.success(result?.message, { duration: 2000 });
                refetch()
            }
        } catch (error: any) {
            console.log(error)
            toast.error(error?.data?.message, { duration: 3000 });

        } finally {
            setIsOpen(false)
        }
    }


    const blogList = useMemo(
        () => blogs?.map((blog: IBlog) => <BlogTable user={user!} refetch={refetch} key={blog?._id} blog={blog} />),
        [blogs, user, refetch]
    );






    return (
        <div>
            <div className='flex justify-between items-center mb-6'>
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white ">Blogs Management</h1>
                <CreateBlogModal isLoading={createBlogLoading} setIsOpen={setIsOpen} isOpen={isOpen} handleCreate={handleCreate} />
            </div>
            {
                isLoading ? <TableSkeleton /> : <table className="min-w-full shadow-lg divide-y divide-gray-200 dark:divide-gray-700">
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
    );
};

export default BlogsManagement;