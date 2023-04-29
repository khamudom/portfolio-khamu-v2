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
    'An open source project, FAST is a layered framework built on native browser web component APIs.',
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
    'Collaborated with the design team to build web components for multiple experiences for Microsoft Edge, Edge Shopping and Microsoft News',
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
