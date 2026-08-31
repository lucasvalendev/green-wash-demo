import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Green Wash Estética Automotiva',
    short_name: 'Green Wash',
    description: 'Estética automotiva e higienização em geral em Taubaté.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f5f5ef',
    theme_color: '#10130f',
  }
}
