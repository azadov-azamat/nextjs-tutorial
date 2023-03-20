import React from "react";
import {Box} from "@mui/material";
import Layout from "@/layout/layout";
import {Content, Hero, Sidebar} from "@/components";
import {BlogsService} from "@/service/blog.service";
import {GetServerSideProps} from "next";
import {BlogsType} from "@/interface/blogs.interface";
import {CategoriesType} from "@/interface/categories.interface";

const IndexPage = ({blogs, latestBlogs, categories}: HomePageProps) => {

    return (
        <Layout>
            <Hero blogs={blogs.slice(0, 3)}/>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    gap: '20px',
                    padding: '20px'
                }}>
                <Sidebar latestBlogs={latestBlogs} categories={categories}/>
                <Content blogs={blogs}/>
            </Box>
        </Layout>
    )
}
export default IndexPage

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {

    const blogs = await BlogsService.getAllBlogs();
    const latestBlogs = await BlogsService.getLatestBlog();
    const categories = await BlogsService.getCategories();

    return {
        props: {
            blogs,
            latestBlogs,
            categories
        }
    }
}

interface HomePageProps {
    blogs: BlogsType[]
    latestBlogs: BlogsType[]
    categories: CategoriesType[]
}