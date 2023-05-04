import React from 'react';
import ProjectTile from '../ProjectTile/ProjectTile';
import styles from './Projects.module.scss';
import { ProjectsData } from '../../models/ProjectsData';

type ProjectsProps = {
  className?: string;
};

const Projects = ({ className }: ProjectsProps) => {
  return (
    <>
      <section className={className} id="projects">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.title}>projects</h2>
            <hr className={styles.divider} />
          </div>
          <ul>
            {ProjectsData.map((item) => (
              <li key={item.id}>
                <ProjectTile
                  width={280}
                  height={233}
                  imgSrc={item.imgSrc}
                  imgAlt={item.imgAlt}
                  title={item.title}
                  href={item.href}
                  target={'_self'}
                  skills={item.skills}
                  projectType={item.projectType}
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
