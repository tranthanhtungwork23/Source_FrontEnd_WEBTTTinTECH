export interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage?: {
        node: {
            sourceUrl: string;
        }
    };
}

export async function getPosts(): Promise<Post[]> {
    const url = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

    if (!url || url.includes('your-wordpress-site.com')) {
        console.warn('WordPress API URL is not configured. Returning empty array.');
        // Return dummy data for development visualization if no API is connected
        return [
            {
                id: '1',
                title: "NEURALINK'S NEXT LEAP: BRAIN-MACHINE INTERFACE UNVEILED",
                slug: 'neuralink-next-leap',
                excerpt: "Musk's vision for seamless human-AI integration takes a giant step forward. Full report and analysis.",
                content: '',
                featuredImage: { node: { sourceUrl: 'https://images.unsplash.com/photo-1614728853913-1e3258af70d7?q=80&w=2070&auto=format&fit=crop' } }
            },
            {
                id: '2',
                title: "QUANTUM COMPUTING EXASCALE BARRIER",
                slug: 'quantum-computing',
                excerpt: 'Breaking the speed limit of the universe with new q-bit technology.',
                content: '',
                featuredImage: { node: { sourceUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop' } }
            },
            {
                id: '3',
                title: "INTERSTELLAR MINING",
                slug: 'interstellar-mining',
                excerpt: 'The race to the asteroid belt implies new economic frontiers.',
                content: '',
                featuredImage: { node: { sourceUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop' } }
            },
            {
                id: '4',
                title: "SUSTAINABLE TECH: BIO-BATTERIES",
                slug: 'sustainable-tech',
                excerpt: 'Powering the future with organic energy storage solutions.',
                content: '',
                featuredImage: { node: { sourceUrl: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1974&auto=format&fit=crop' } }
            }
        ];
    }

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            next: { revalidate: 60 },
            body: JSON.stringify({
                query: `
          query GetPosts {
            posts(first: 4) {
              nodes {
                id
                title
                slug
                excerpt
                content
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        `,
            }),
        });

        const json = await res.json();
        return json.data?.posts?.nodes || [];
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}
