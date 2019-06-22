export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d0dfa5de67e35a75ced44cf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-bn37eks7',
                  apiId: 'd547ce6e-1565-45f6-a77c-22b077f55295'
                },
                {
                  buildHookId: '5d0dfa5d7ba95284214af2c7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ym6nvxfr',
                  apiId: 'e02332ec-d34d-4b3b-a1d4-3bfca5d285c7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/krissnawat/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ym6nvxfr.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
