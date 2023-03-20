import React from 'react';
import {Avatar, Box, Divider, Typography} from "@mui/material";
import Image from "next/image";
import {format} from "date-fns";
import {ContentProps} from "@/components/content/content.props";

const Content = ({blogs}: ContentProps) => {

    // @ts-ignore
    return (
        <Box width={{xs: '100%', md: '70%'}}>
            {blogs.map((item: any) => {
                return (
                    <Box key={item.id}
                         sx={{
                             backgroundColor: 'rgba(0, 0, 0, .5)',
                             padding: '20px',
                             marginTop: '20px',
                             borderRadius: '8px',
                             boxShadow: '0px 8px 16px rgba(255, 255, 255, .1)'
                         }}>
                        <Box position={'relative'} width={'100%'} height={{xs: '30vh', md: '50vh'}}>
                            <Image src={item.image?.url} alt={item.title}
                                   style={{objectFit: 'cover', borderRadius: '10px'}}
                                   fill/>
                        </Box>
                        <Typography variant={'h4'} marginTop={'30px'}>{item.title}</Typography>
                        <Typography variant={'body1'} color={'gray'}>{item.exerpt}</Typography>
                        <Divider sx={{marginTop: '30px'}}/>
                        <Box sx={{display: 'flex', gap: '10px', marginTop: '20px'}}>
                            <Avatar alt={item.author?.name} src={item.author?.avatar?.url}/>
                            <Box>
                                <Typography>{item.author.name}</Typography>
                                <Box color={'gray'}>{format(new Date(item.createdAt), 'dd MMM yyyy')} &#x2022; 10 min read</Box>
                            </Box>
                        </Box>
                    </Box>
                );
            })}
        </Box>
    );
};

export default Content;