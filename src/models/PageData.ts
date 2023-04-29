import { IconType } from 'react-icons';
import { FiGlobe } from 'react-icons/fi';
import { AiOutlineGithub } from 'react-icons/ai';

export interface IPageLinkData {
  id: number;
  title: string;
  href: string;
  icon: IconType;
}

export interface IPageData {
  title: string;
  description: string[];
  tech: string[];
  link: IPageLinkData[];
}

export const xboxPageData: IPageData = {
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

export const fastPageData: IPageData = {
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

export const edgePageData: IPageData = {
  title: 'Microsoft Edge',
  description: [
    'Collaborate with design and engineering team to own, build and maintain Web Components for multiple web experiences for Microsoft Edge, Edge Shopping feature and Microsoft News feed.',
  ],
  tech: [
    'FAST',
    'JavaScript',
    'Typescript',
    'Web Component',
    'HTML',
    'CSS',
    'Chromium',
    'Gerrit',
  ],
  link: [
    {
      id: 0,
      title: 'Website',
      href: 'https://www.microsoft.com/en-us/edge/features?form=MA13FJ&exp=e00',
      icon: FiGlobe,
    },
  ],
};
