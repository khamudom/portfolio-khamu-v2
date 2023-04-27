/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './ProjectTile.module.css';

type SkillsProps = {
  iconSrc?: string;
  iconAlt?: string;
};

interface ProjectTileProps {
  width?: number;
  height?: number;
  href?: string;
  target?: string;
  title?: string;
  imgSrc?: string;
  imgAlt?: string;
  skills?: SkillsProps[];
}

const ProjectTile = ({
  width,
  height,
  title,
  href,
  target,
  imgSrc,
  imgAlt,
  skills,
}: ProjectTileProps) => {
  return (
    <div
      className={styles.card}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <div className={styles.overlay}></div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <a className={styles.anchor} href={href} target={target}>
            <span className={styles.title}>{title}</span>
          </a>
          <ul className={styles.skills}>
            {skills?.map((item, index) => (
              <li key={index}>
                <img
                  className={styles.icon}
                  src={item.iconSrc}
                  alt={item.iconAlt}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
