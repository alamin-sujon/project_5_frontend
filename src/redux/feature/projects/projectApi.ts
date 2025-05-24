/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProject } from "@/components/types";
import baseApi from "../baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getprojects: builder.query({
      query: () => "/projects",
      transformResponse: (response: any) => response.data,
    }),
    createProject: builder.mutation({
      query: (data: IProject) => ({
        url: "/projects",
        method: "POST",
        body: data,
      }),
    }),
    deleteProject: builder.mutation({
      query: (id: string) => ({
        url: `/projects/${id}`,
        method: "DELETE",
      }),
    }),
    updateProject: builder.mutation({
      query: (data: any) => ({
        url: `/projects/${data.id}`,
        method: "PUT",
        body: data.data,
      }),
    }),
  }),
});

export const {
  useGetprojectsQuery,
  useCreateProjectMutation,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} = projectApi;
