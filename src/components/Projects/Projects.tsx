import React from 'react';
import ProjectTile from '../ProjectTile/ProjectTile';
import styles from './Projects.module.scss';
import { ProjectsData } from './data/projectsData';

type ProjectsProps = {
  className?: string;
};

const Projects = ({ className }: ProjectsProps) => {
  return (
    <>
      <section className={className}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.title}>projects</h2>
            <hr className={styles.divider} />
          </div>
          <ul>
            {ProjectsData.map((item) => (
              <li key={item.id}>
                <ProjectTile
                  width={330}
                  height={186}
                  imgSrc={item.imgSrc}
                  imgAlt={item.imgAlt}
                  title={item.title}
                  href={item.href}
                  target={'_self'}
                  skills={item.skills}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Projects;
