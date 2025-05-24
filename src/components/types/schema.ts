import { z } from "zod";
import { categories } from ".";
export const blogSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title cannot be longer than 100 characters"),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Invalid image URL"),
  category: z.enum(categories, { message: "Invalid category" }),
});
export const projectSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name cannot be longer than 100 characters"),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Invalid image URL"),
  liveUrl: z.string().url("Invalid URL"),
  coreFeatures: z.string(),
  technologies: z.string(),
  githubClient: z.string().optional(),
  githubServer: z.string().optional(),
});

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name cannot be longer than 100 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});
