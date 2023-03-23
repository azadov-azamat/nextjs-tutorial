import {gql, request} from "graphql-request";
import {BlogsType} from "@/interface/blogs.interface";
import {CategoriesType} from "@/interface/categories.interface";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string
export const BlogsService = {
    async getAllBlogs() {
        const query = gql`
         query GetAll {
            blogs {
                excerpt
                id
                slug
                title
                createdAt
                author {
                  ... on Author {
                    name
                    avatar {
                        url
                    }
                  }
                }
                image {
                    url
                }
                category {
                    ... on Category {
                            label
                            slug
                    }
                }
                description {
                       text
                 }
            }
         }
      `;
        const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
        return result.blogs
    },

    async getLatestBlog() {
        const query = gql`
         query GetLatestBlog {
            blogs(last: 2) {
                excerpt
                id
                slug
                title
                createdAt
                author {
                  ... on Author {
                    name
                    avatar {
                        url
                    }
                  }
                }
                image {
                    url
                }
                description {
                       text
                 }
            }
         }
        `;
        const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
        return result.blogs
    },

    async getCategories() {
        const query = gql`
        query MyQuery {
            categories {
                    id
                    label
                    slug
            }
        }
    `;
        const result = await request<{ categories: CategoriesType[] }>(graphqlAPI, query);
        return result.categories
    },

    async getDetailBlog(slug: string){
        const query = gql`
        query MyQuery($slug: String!) {
            blog(where: {slug: $slug}) {
                excerpt
                id
                slug
                title
                createdAt
                author {
                  ... on Author {
                    name
                    avatar {
                        url
                    }
                  }
                }
                image {
                    url
                }
                description {
                       html
                       text
                 }
            }
        }
`;
        const result = await request<{blog: BlogsType}>(graphqlAPI, query, {slug});
        return result.blog
    },

    async getDetailedCategoriesBlog(slug: string) {
        const query = gql`
			query getCategoriesBlog($slug: String!) {
				blogs(where: {category: {Category: {slug: $slug}}}) {
				 excerpt
                id
                slug
                title
                createdAt
                author {
                  ... on Author {
                    name
                    avatar {
                        url
                    }
                  }
                }
                image {
                    url
                }
                description {
                       html
                       text
                 }
				}
			}
		`;

        const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query, { slug });
        return result.blogs;
    },
}