import React from 'react';
import Layout from "@/layout/layout";
import {GetServerSideProps} from "next";
import {BlogsService} from "@/service/blog.service";
import {BlogsType} from "@/interface/blogs.interface";
import {CategoriesType} from "@/interface/categories.interface";
import {Box} from "@mui/material";
import {Content, Sidebar} from "@/components";
import {useRouter} from "next/router";
import SEO from "@/layout/seo/seo";

const CategoryDetailedPage = ({ blogs, latestBlogs, categories }: DetailedCategoriesPageProps) => {
    const router = useRouter();

    return (
        <SEO metaTitle={`${router.query.slug}-category`}>
            <Layout>
                <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' }, padding: '20px' }}>
                    <Sidebar latestBlogs={latestBlogs} categories={categories} />
                    <Content blogs={blogs} />
                </Box>
            </Layout>
        </SEO>
    );
};

export default CategoryDetailedPage;

export const getServerSideProps: GetServerSideProps<DetailedCategoriesPageProps> = async ({ query }) => {
    const blogs = await BlogsService.getDetailedCategoriesBlog(query?.slug as string);
    const latestBlogs = await BlogsService.getLatestBlog();
    const categories = await BlogsService.getCategories();

    return {
        props: {
            blogs,
            latestBlogs,
            categories,
        },
    };
};

interface DetailedCategoriesPageProps {
    blogs: BlogsType[];
    latestBlogs: BlogsType[];
    categories: CategoriesType[];
}