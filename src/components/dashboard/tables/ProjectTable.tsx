/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProject, IUser } from "@/components/types";
import Image from "next/image";
import Link from "next/link";
import { BlogDeleteModal } from "../modals/BlogDeleteModal";
import { useDeleteProjectMutation, useUpdateProjectMutation } from "@/redux/feature/projects/projectApi";
import { toast } from "sonner";
import { UpdateProjectModal } from "../modals/UpdateprojectModal";
import { FieldValues, SubmitHandler } from "react-hook-form";


const ProjectTable = ({ project, refetch, user }: { project: IProject, refetch: () => void, user: IUser }) => {


    const [deleteProject] = useDeleteProjectMutation();
    const [updateProject] = useUpdateProjectMutation()
    const deleteHandler = async () => {

        const toastId = toast.loading("Deleting Project...");

        try {
            if (user?.email !== project?.author?.email) {
                toast.error("You are not authorized to delete this project", { id: toastId, duration: 3000 });
                return
            }

            const result = await deleteProject(project?._id).unwrap();
            console.log(result)
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
        const toastId = toast.loading("Updating Project...");
        try {
            if (user?.email !== project?.author?.email) {
                toast.error("You are not authorized to delete this project", { id: toastId, duration: 3000 });
                return
            }
            const result = await updateProject({ data: { ...data }, id: project._id }).unwrap();
            console.log(result)
            if (result?.success) {
                toast.success(result?.message, { id: toastId, duration: 2000 });
                refetch()
            }
        } catch (error: any) {
            toast.error(error?.data?.message, { id: toastId, duration: 3000 });
        }

    }

    return (
        <tr className="hover:bg-base-200">
            <td className="px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">


                    <div className="flex items-center gap-x-2">
                        <Image unoptimized className="object-cover shadow-lg  " src={project?.image} height={60} width={60} alt="" />
                        <div>
                            <h2 className="font-semibold text-gray-600 dark:text-white  ">{project?.name}</h2>

                        </div>
                    </div>
                </div>
            </td>
            <td className="px-12 ml-3 py-4 truncate w-48 text-sm font-medium text-gray-500 whitespace-nowrap">
                {project?.description.split("").slice(0, 40).join("")}...
            </td>
            <td className="px-4 py-4 text-sm text-blue-500 dark:text-gray-300 whitespace-nowrap"><Link target="_blank" href={project?.liveUrl} className="hover:underline">{project?.liveUrl}</Link></td>
            <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                    <Image src={project?.author?.avatar} height={30} width={40} alt="" className="rounded-full" />
                    <div className="flex flex-col">
                        <span className="text-gray-600 dark:text-white font-medium">{project?.author?.name}</span>
                        <span className="text-gray-600 dark:text-white font-medium">{project?.author?.email}</span>
                    </div>
                </div>
            </td>

            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-4">
                    <BlogDeleteModal text="Project" handleDelete={deleteHandler} />

                    <UpdateProjectModal handleUpdate={handleUpdate} defaultValue={project} />
                </div>
            </td>
        </tr>

    );
};

export default ProjectTable;