import { MainNavItem, SidebarNavItem } from '@/types/nav';

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    { title: 'Sprints', href: '/' },
    { title: 'Post A Sprint', href: '/post' },
    { title: 'My Sprints', href: '/my-sprints' },
  ],
  sidebarNav: [
    {
      title: 'Links',
      items: [
        {
          title: 'Sprints',
          href: '/',
          items: [],
        },
        {
          title: 'My Sprints',
          href: '/my-sprints',
          items: [],
        },
        {
          title: 'Post A Sprint',
          href: '/post',
          items: [],
        },
      ],
    },
  ],
};
