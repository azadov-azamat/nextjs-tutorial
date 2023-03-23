import React from 'react';
import {BlogsType} from "@/interface/blogs.interface";
import {BlogsService} from "@/service/blog.service";
import {GetServerSideProps} from "next";
import {Content} from "@/components";
import Layout from "@/layout/layout";
import {Box} from "@mui/material";
import SEO from "@/layout/seo/seo";

const BlogPage = ({ blogs }: BLogPageProps) => {
    return (
        <SEO metaTitle='All blogs'>
            <Layout>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '20px',
                        flexDirection: { xs: 'column', md: 'row' },
                        padding: '20px',
                        justifyContent: 'center',
                    }}
                >
                    <Content blogs={blogs} />
                </Box>
            </Layout>
        </SEO>
    );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<BLogPageProps> = async () => {
    const blogs = await BlogsService.getAllBlogs();

    return {
        props: { blogs },
    };
};

interface BLogPageProps {
    blogs: BlogsType[];
}