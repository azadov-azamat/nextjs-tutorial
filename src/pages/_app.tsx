import React from "react";
import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {CacheProvider, EmotionCache} from '@emotion/react'
import createEmotionCache from "@/helpers/create-emotion-cache"
import Head from "next/head";
import {ThemeProvider} from '@mui/material/styles'
import theme from "@/helpers/theme";
import {CssBaseline} from "@mui/material";

const clientSlideEmotionCache = createEmotionCache();

export interface MyAppsProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function App(props: MyAppsProps) {
    const {Component, emotionCache = clientSlideEmotionCache, pageProps} = props

    return <CacheProvider value={emotionCache}>
        <Head>
            <meta name={'viewport'} content={'initial-scale=1, width=device-width'}/>
        </Head>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Component {...pageProps} />
        </ThemeProvider>
    </CacheProvider>
}
