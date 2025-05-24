/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCategoryColor, IBlog, IUser } from "@/components/types";
import Image from "next/image";
import { BlogDeleteModal } from "../modals/BlogDeleteModal";
import { useDeleteBlogMutation, useUpdateBlogMutation } from "@/redux/feature/blogs/blogApi";

import { UpdateBlogModal } from "../modals/UpdateBlogModal";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";



const BlogTable = ({ blog, refetch, user }: { blog: IBlog, refetch: () => void, user: IUser }) => {

    // console.log(session)

    const [deleteBlog, { isLoading }] = useDeleteBlogMutation();
    const [updateModal] = useUpdateBlogMutation()
    const deleteHandler = async () => {
        const toastId = toast.loading("Deleting Blog...");
        if (user?.email !== blog?.author?.email) {
            toast.error("You are not authorized to delete this blog", { id: toastId, duration: 3000 });
            return
        }

        try {
            const result = await deleteBlog(blog?._id).unwrap();
            if (result) {
                toast.success(result?.message, { id: toastId, duration: 2000 });
                refetch()
            }
        } catch (error: any) {
            console.log(error)
            toast.error(error?.data?.message, { id: toastId, duration: 3000 });
        }
    }


    const handleUpdate: SubmitHandler<FieldValues> = async (data) => {
        console.log('Hello World')
        const toastId = toast.loading("Updating Blog...");
        if (user?.email !== blog?.author?.email) {
            toast.error("You are not authorized to update this blog", { id: toastId, duration: 3000 });
            return
        }
        try {

            const result = await updateModal({ data: { ...data }, id: blog._id }).unwrap();
            console.log(result)
            if (result) {
                toast.success(result?.message, { id: toastId, duration: 2000 });
                refetch()
            }
        } catch (error: any) {


            toast.error(error?.data?.message, { id: toastId, duration: 3000 });
        }
    }
    return (
        <tr className="hover:bg-base-200">
            <td className="px-4 py-2  text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">


                    <div className="">
                        <Image className="object-cover rounded-sm" height={60} width={60} src={blog?.image} alt="" />

                    </div>
                </div>
            </td>
            <td className="px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                <p className="text-gray-900 dark:text-gray-100">{blog.title}</p>
            </td>

            <td className="px-4 py-2 text-sm  text-gray-500 dark:text-gray-300 whitespace-nowrap  truncate w-48">
                <span className={` rounded-full py-1 ${getCategoryColor(blog?.category)} px-2 text-sm`}>{blog?.category || 'Technology'}</span>
            </td>
            <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                    <Image className="object-cover rounded-full" height={30} width={40} src={blog?.author?.avatar ? blog?.author?.avatar : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"} alt="" />
                    <div>
                        <p>{blog?.author?.name || 'Author name'}</p>
                        <p className="">{blog?.author?.email}</p>
                    </div>

                </div>

            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                {new Intl.DateTimeFormat("en-GB", {
                    hour: "numeric",
                    minute: "numeric",
                    day: "2-digit",
                    month: "short",
                    hour12: false,
                    timeZone: "UTC",
                })
                    .format(new Date(blog?.createdAt))
                    .replace(",", "")}
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-6">
                    <BlogDeleteModal isLoading={isLoading} text="Blog" handleDelete={deleteHandler} />

                    <UpdateBlogModal defaultValue={blog} handleUpdate={handleUpdate} />
                </div>
            </td>
        </tr>
    );
};

export default BlogTable;