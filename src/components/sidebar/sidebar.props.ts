import {BlogsType} from "@/interface/blogs.interface";
import {CategoriesType} from "@/interface/categories.interface";

export interface SidebarProps {
    latestBlogs: BlogsType[]
    categories: CategoriesType[]
}