import React from "react";
import ProjectTile from "../ProjectTile/ProjectTile";
import styles from "./Projects.module.scss";
import { ProjectsData } from "../../models/ProjectsData";
import SectionHeader from "../common/SectionHeader/SectionHeader";

type ProjectsProps = {
  className?: string;
};

const Projects = ({ className }: ProjectsProps) => {
  return (
    <>
      <section className={className} id="projects">
        <div className={styles.container}>
          <SectionHeader title="Projects" />
          <ul className={styles.content}>
            {ProjectsData.map((item) => (
              <li key={item.id}>
                <ProjectTile
                  width={280}
                  height={233}
                  imgSrc={item.imgSrc}
                  imgAlt={item.imgAlt}
                  title={item.title}
                  href={item.href}
                  target={"_self"}
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
