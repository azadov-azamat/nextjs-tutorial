import React from 'react';
import {SeoProps} from "@/layout/seo/seo.props";
import Head from "next/head";
import {siteConfig} from "@/config/site.config";

const SEO = ({
                 children,
                 metaDescription = siteConfig.metaDescription,
                 metaTitle = siteConfig.metaTitle,
                 metaKeywords = siteConfig.metaKeywords,
                 author = siteConfig.author
             }: SeoProps) => {
    return (
        <>
            <Head>
                <meta charSet={'utf-8'}/>
                <meta name={'viewport'} content={'width=device-width, initial-scale=1, maximum-scale=5'}/>
                <title>{metaTitle}</title>
                <meta httpEquiv={'X-UA-Compatible'} content={'ie=edge'}/>
                <meta name={'keyword'} content={metaKeywords}/>
                <meta name={'author'} content={author}/>
                <meta name={'description'} content={metaDescription}/>
                <link rel="shortcut icon" href="/favicon.ico" type={'image/x-icon'}/>
            </Head>
            {children}
        </>
    );
};

export default SEO;