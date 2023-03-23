import React from 'react';
import {GetServerSideProps} from "next";
import {BlogsService} from "@/service/blog.service";
import {BlogsType} from "@/interface/blogs.interface";
import Layout from "@/layout/layout";
import {Sidebar} from "@/components";
import {Avatar, Box, Divider, Typography} from "@mui/material";
import {CategoriesType} from "@/interface/categories.interface";
import Image from "next/image";
import {format} from "date-fns";
import {calculateEstimatedTimeToRead} from "@/helpers/time.format";
import SEO from "@/layout/seo/seo";

const DetailedBlogsPage = ({blog, latestBlogs, categories}: DetailBlogsPageProps) => {

    return (
        <SEO metaTitle={blog.title}>
            <Layout>
                <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' }, padding: '20px' }}>
                    <Box width={{ xs: '100%', md: '70%' }}>
                        <Box
                            sx={{
                                backgroundColor: 'black',
                                padding: '20px',
                                borderRadius: '8px',
                                boxShadow: '0px 8px 16px rgba(255, 255, 255, .1)',
                            }}
                            position={'relative'}
                            width={'100%'}
                            height={{ xs: '30vh', md: '50vh' }}
                            marginBottom={'20px'}
                        >
                            <Image src={blog.image.url} alt={blog.title} fill style={{ objectFit: 'cover', borderRadius: '10px' }} />
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} rowGap={'10px'}>
                            <Box sx={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                                <Avatar alt={blog.author.name} src={blog.author.avatar.url} />
                                <Box>
                                    <Typography>{blog.author.name}</Typography>
                                    <Box color={'gray'}>
                                        {format(new Date(blog.createdAt), 'dd MMM, yyyy')} &#x2022;{' '}
                                        {calculateEstimatedTimeToRead(blog.description.text)}
                                        min read
                                    </Box>
                                </Box>
                            </Box>
                            <Typography variant='h3'>{blog.title}</Typography>
                            <Typography color={'gray'}>{blog.excerpt}</Typography>
                            <Divider />
                            <div style={{ opacity: '.8' }} dangerouslySetInnerHTML={{ __html: blog.description.html }} />
                        </Box>
                    </Box>
                    <Sidebar latestBlogs={latestBlogs} categories={categories} />
                </Box>
            </Layout>
        </SEO>
    );
};

export default DetailedBlogsPage;

export const getServerSideProps: GetServerSideProps<DetailBlogsPageProps> = async ({query}) => {
    const blog = await BlogsService.getDetailBlog(query.slug as string)
    const latestBlogs = await BlogsService.getLatestBlog();
    const categories = await BlogsService.getCategories();

    return {
        props: {
            blog,
            latestBlogs,
            categories
        }
    }
}

interface DetailBlogsPageProps {
    blog: BlogsType
    latestBlogs: BlogsType[]
    categories: CategoriesType[]
}