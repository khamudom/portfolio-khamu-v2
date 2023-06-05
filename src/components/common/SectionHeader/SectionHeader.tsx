import React from 'react';
import styles from './SectionHeader.module.scss';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className={styles.sectionHeader}>
      <hr className={styles.divider} />
      <h2 className={styles.title}>{title}</h2>
      <hr className={styles.divider} />
    </div>
  );
};

export default SectionHeader;
