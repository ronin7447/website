import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://7447.team'
  return [
    {
      url: baseUrl + '/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
        url: baseUrl + '/about',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: baseUrl + '/robot',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: baseUrl + '/sponsors',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: baseUrl + '/robot/reefscape',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
  ]
}