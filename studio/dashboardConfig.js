export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f8009a5a05b2c18d768a74e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-uiyqzdys',
                  apiId: '3c2be88c-9f3b-40fa-862b-e0fdc7abfac6'
                },
                {
                  buildHookId: '5f8009a6be79c5163b325111',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-f3yhmy6v',
                  apiId: 'bb0d1e56-c2ef-437d-901d-d2e7f9f299b9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/linkb15/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-f3yhmy6v.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
