export interface IProject {
  _id: string;
  name: string;
  image: string;
  liveUrl: string;
  author: {
    name: string;
    avatar: string;
    email: string;
  };
  description: string;
  coreFeatures: string[];
  technologies: string[];
  githubClient?: string;
  githubServer?: string;
  createdAt: string;
}

export type TAuthor = {
  name: string;
  avatar: string;
  email: string;
};

export interface IBlog {
  title: string;
  description: string;
  _id: string;
  image: string;
  author: TAuthor;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  category: TCategory;
}

export interface ISessionUser {
  name: string;
  email: string;
  image: string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export const categories = [
  "Technology",
  "Health & Wellness",
  "Lifestyle",
  "Business",
  "Education",
  "Entertainment",
] as const;
export type TCategory = (typeof categories)[number];
export const blogCategories = categories.map((el) => ({
  label: el,
  value: el,
}));

export type TCategoryOptions = { value: TCategory; label: string }[];

export const getCategoryColor = (category: string) => {
  const categoryColors: Record<string, string> = {
    Technology: "bg-blue-100 text-blue-600",
    "Health & Wellness": "bg-green-100 text-green-600",
    Lifestyle: "bg-purple-100 text-purple-600",
    Business: "bg-yellow-100 text-yellow-600",
    Education: "bg-indigo-100 text-indigo-600",
    Entertainment: "bg-red-100 text-red-600",
  };
  return categoryColors[category] || "bg-gray-100 text-gray-600";
};

export type TMessage = {
  name: string;
  email: string;
  message: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
};
