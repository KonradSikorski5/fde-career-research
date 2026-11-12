import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'FDE Career Research',
  description: 'Forward Deployed Engineer internships and full-time roles, from real employer postings.',
  base: '/fde-career-research/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Internships', link: '/internships' },
      { text: 'Full-time', link: '/full-time' },
      { text: 'The work', link: '/role' },
      { text: 'Skills', link: '/skills' },
      { text: 'Sources', link: '/sources' }
    ],
    sidebar: [
      { text: 'Start here', items: [{ text: 'Overview', link: '/' }] },
      {
        text: 'Openings',
        items: [
          { text: 'Internships (I1–I6)', link: '/internships' },
          { text: 'Full-time (F1–F13)', link: '/full-time' }
        ]
      },
      {
        text: 'Findings',
        items: [
          { text: 'What the role does', link: '/role' },
          { text: 'Skills employers ask for', link: '/skills' }
        ]
      },
      {
        text: 'Evidence',
        items: [{ text: 'Sources & check dates', link: '/sources' }]
      }
    ],
    outline: { level: [2, 3], label: 'On this page' },
    search: { provider: 'local' },
    footer: {
      message: 'Research collection. All postings checked on 2026-11-12; openings change often, so open the source before relying on any detail.'
    }
  }
})
