import React from 'react';
import styles from './PageLayoutHeader.module.scss';
import Button from '../../Button/Button';
import { PageLinkData } from '@/models/PageData';

interface ProjectPageProps {
  title?: string;
  description?: string[];
  tech?: string[];
  links?: PageLinkData[];
}

const ProjectPageHeader = ({
  title,
  description,
  tech,
  links,
}: ProjectPageProps) => {
  const dot = '\u00B7';
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
              {index !== tech.length - 1 && `${dot}`}
            </span>
          ))}
        </span>
      </div>
    </section>
  );
};

export default ProjectPageHeader;
