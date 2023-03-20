import React from "react";
import {Box} from "@mui/material";
import Layout from "@/layout/layout";
import {Content, Hero, Sidebar} from "@/components";

const IndexPage = () => {
    return (
        <Layout>
            <Hero/>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    gap: '20px',
                    padding: '20px'
                 }}>
                <Sidebar/>
                <Content/>
            </Box>
        </Layout>
    )
}
export default IndexPage