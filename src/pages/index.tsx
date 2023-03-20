import React from "react";
import {Box, Button} from "@mui/material";
import Layout from "@/layout/layout";
import {Content, Hero, Sidebar} from "@/components";

const IndexPage = () => {
    return (
        <Layout>
            <Hero/>
            <Box sx={{display: 'flex', gap: '20px', padding: '20px'}}>
                <Sidebar/>
                <Content/>
            </Box>
        </Layout>
    )
}
export default IndexPage