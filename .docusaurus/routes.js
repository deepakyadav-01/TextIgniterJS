import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/TextIgniterJS/__docusaurus/debug',
    component: ComponentCreator('/TextIgniterJS/__docusaurus/debug', 'ad7'),
    exact: true
  },
  {
    path: '/TextIgniterJS/__docusaurus/debug/config',
    component: ComponentCreator('/TextIgniterJS/__docusaurus/debug/config', '570'),
    exact: true
  },
  {
    path: '/TextIgniterJS/__docusaurus/debug/content',
    component: ComponentCreator('/TextIgniterJS/__docusaurus/debug/content', '3cd'),
    exact: true
  },
  {
    path: '/TextIgniterJS/__docusaurus/debug/globalData',
    component: ComponentCreator('/TextIgniterJS/__docusaurus/debug/globalData', '846'),
    exact: true
  },
  {
    path: '/TextIgniterJS/__docusaurus/debug/metadata',
    component: ComponentCreator('/TextIgniterJS/__docusaurus/debug/metadata', '93c'),
    exact: true
  },
  {
    path: '/TextIgniterJS/__docusaurus/debug/registry',
    component: ComponentCreator('/TextIgniterJS/__docusaurus/debug/registry', '316'),
    exact: true
  },
  {
    path: '/TextIgniterJS/__docusaurus/debug/routes',
    component: ComponentCreator('/TextIgniterJS/__docusaurus/debug/routes', '55d'),
    exact: true
  },
  {
    path: '/TextIgniterJS/markdown-page',
    component: ComponentCreator('/TextIgniterJS/markdown-page', 'd18'),
    exact: true
  },
  {
    path: '/TextIgniterJS/docs',
    component: ComponentCreator('/TextIgniterJS/docs', '848'),
    routes: [
      {
        path: '/TextIgniterJS/docs',
        component: ComponentCreator('/TextIgniterJS/docs', '196'),
        routes: [
          {
            path: '/TextIgniterJS/docs',
            component: ComponentCreator('/TextIgniterJS/docs', '6c5'),
            routes: [
              {
                path: '/TextIgniterJS/docs/angular',
                component: ComponentCreator('/TextIgniterJS/docs/angular', '6d0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/TextIgniterJS/docs/contributing',
                component: ComponentCreator('/TextIgniterJS/docs/contributing', 'fc9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/TextIgniterJS/docs/installation',
                component: ComponentCreator('/TextIgniterJS/docs/installation', '19c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/TextIgniterJS/docs/introduction',
                component: ComponentCreator('/TextIgniterJS/docs/introduction', 'bee'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/TextIgniterJS/docs/javascript',
                component: ComponentCreator('/TextIgniterJS/docs/javascript', 'fa2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/TextIgniterJS/docs/our-contributors',
                component: ComponentCreator('/TextIgniterJS/docs/our-contributors', '1e3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/TextIgniterJS/docs/react',
                component: ComponentCreator('/TextIgniterJS/docs/react', '344'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/TextIgniterJS/',
    component: ComponentCreator('/TextIgniterJS/', '246'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
