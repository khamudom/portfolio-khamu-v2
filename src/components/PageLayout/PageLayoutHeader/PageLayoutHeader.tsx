import React from 'react';
import styles from './PageLayoutHeader.module.scss';
import Button from '../../common/Button/Button';
import { IPageLinkData } from '@/pages/pageData';

interface ProjectPageProps {
  title?: string;
  description?: string[];
  tech?: string[];
  links?: IPageLinkData[];
}

const ProjectPageHeader = ({
  title,
  description,
  tech,
  links,
}: ProjectPageProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.btnWrapper}>
          {links?.map((link) => {
            const Icon = link.icon;
            return (
              <Button
                key={link.id}
                href={link.href}
                target="_blank"
                title={link.title}
              >
                <Icon /> {link.title}
              </Button>
            );
          })}
        </span>
      </div>
      <div className={styles.description}>
        {description?.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
      <div className={styles.technology}>
        <h3>Technology</h3>
        <span>
          {tech?.map((item, index) => (
            <span key={index}>
              <p>{item}</p>
              {index !== tech.length - 1 && '-'}
            </span>
          ))}
        </span>
      </div>
    </section>
  );
};

export default ProjectPageHeader;
