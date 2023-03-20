export interface BlogsType {
    excerpt: string;
    id: string;
    slug: string;
    title: string;
    author: {
        name: string;
        avatar: {
            url: string;
        }
    }
    description: {
        text: string
    }
    image: {
        url: string
    }
    category: {
        label: string
        slug: string
    },
    createdAt: Date
}