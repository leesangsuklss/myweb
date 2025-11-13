import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: '/#about',
    },
    {
      text: 'Vision',
      href: '/#vision',
    },
    {
      text: 'Research',
      href: '/#research',
    },
    {
      text: 'Teaching',
      href: '/#teaching',
    },
    {
      text: 'Services',
      href: '/#services',
    },
    
  ],
  
  actions: [],
};

export const footerData = {
  links: [

  ],
  secondaryLinks: [
    
  ],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:lee.sangsuk.lss@gmail.com' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/sangsuk-lee' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    Made by Sangsuk Lee · All rights reserved.
  `,
};
