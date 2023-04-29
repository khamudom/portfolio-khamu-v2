import React from 'react';
import styles from './PageLayout.module.scss';
import ProjectPageHeader from './PageLayoutHeader/PageLayoutHeader';
import { IPageData } from '@/models/PageData';

interface ProjectPageProps {
  children?: React.ReactNode;
  page: IPageData;
}

const ProjectPage = ({ children, page }: ProjectPageProps) => {
  return (
    <main className={styles.container}>
      <ProjectPageHeader
        title={page.title}
        description={page.description}
        tech={page.tech}
        links={page.link}
      />
      {children}
    </main>
  );
};

export default ProjectPage;
