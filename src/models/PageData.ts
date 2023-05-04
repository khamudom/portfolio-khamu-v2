import { IconType } from 'react-icons';
import { FiGlobe } from 'react-icons/fi';
import { AiOutlineGithub } from 'react-icons/ai';

export interface PageLinkData {
  id: number;
  title: string;
  href: string;
  icon: IconType;
}

export interface PageData {
  title: string;
  description: string[];
  tech: string[];
  link: PageLinkData[];
}

export const xboxPageData: PageData = {
  title: 'Xbox One Dashboard',
  description: [
    'Create, contribute, iterate and own the UI and UX experiences on the Xbox Dashboard, from the launch of the Xbox One to the release of the Xbox One SX',
    'Collaborate with the console design team to champion the design and help the team understand the product development capabilities and limits. In addition, collaborate with the console development product team to convey the design vision. Pair program with the engineers, where I would focus on implementing or addressing bugs on the UI and UX, while they focused on the functionality of the product.',
  ],
  tech: ['XAML', 'XAML data binding', 'MVVM consumption', 'Compass'],
  link: [
    {
      id: 0,
      title: 'Website',
      href: 'https://www.xbox.com/en-US/',
      icon: FiGlobe,
    },
  ],
};

export const fastPageData: PageData = {
  title: 'FAST',
  description: [
    'As a collaborator on the FAST open source team, I contributed to developing and maintaining components using React and Web Component technology.',
    'Collaborate with design and engineering team to own, build and maintain Web Components for multiple web experiences for Microsoft Edge, Edge Shopping feature and Microsoft News feed.',
    'Focused on accessibility to make sure the components are aligned with the W3C ARIA standards. I also addressed the high contrast styles for the components within FAST, Fluent UI, Microsoft Edge and the Chromium developer tools.',
    'Support and assist developers within Microsoft and the open source community to help adopt and integrate the FAST and Fluent UI components.',
  ],
  tech: [
    'Open Source',
    'JavaScript',
    'Typescript',
    'Web Component',
    'HTML',
    'CSS',
    'React',
  ],
  link: [
    {
      id: 0,
      title: 'Website',
      href: 'https://www.fast.design/',
      icon: FiGlobe,
    },
    {
      id: 0,
      title: 'GitHub',
      href: 'https://github.com/microsoft/fast/',
      icon: AiOutlineGithub,
    },
  ],
};

export const edgePageData: PageData = {
  title: 'Microsoft Edge',
  description: [
    'Collaborate with design and engineering team to own, build and maintain Web Components for multiple web experiences for Microsoft Edge, Edge Shopping feature and Microsoft News feed.',
  ],
  tech: ['FAST', 'JavaScript', 'Web Component', 'Chromium', 'Gerrit'],
  link: [
    {
      id: 0,
      title: 'Website',
      href: 'https://www.microsoft.com/en-us/edge/features?form=MA13FJ&exp=e00',
      icon: FiGlobe,
    },
  ],
};

export const gameStorePageData: PageData = {
  title: 'Game On',
  description: [
    'Game On is a made up online game store. The idea for building this site was a personal exercise to search for a random design online and build out the UI. It is not fully functional, but I added a few animations to the buttons. The site is responsive and works on all device sizes.',
  ],
  tech: ['React', 'Typescript', 'CSS'],
  link: [
    {
      id: 0,
      title: 'Demo',
      href: 'https://radiant-malasada-04173f.netlify.app/',
      icon: FiGlobe,
    },
    {
      id: 1,
      title: 'Source Code',
      href: 'https://github.com/khamudom/site-store-game',
      icon: AiOutlineGithub,
    },
  ],
};
