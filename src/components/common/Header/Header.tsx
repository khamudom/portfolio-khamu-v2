import Link from 'next/link';
import React, { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import styles from './Header.module.scss';

const navigationItems = [
  {
    id: 0,
    title: 'Intro',
    href: '/',
  },
  {
    id: 1,
    title: 'Projects',
    href: '/projects',
  },
  {
    id: 2,
    title: 'Contact',
    href: '/contact',
  },
  {
    id: 3,
    title: 'About',
    href: '/about',
  },
];

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span>LOGO</span>
        </div>
        <div className={styles.navLinks}>
          <ul>
            {navigationItems.map((item) => (
              <Link href={item.href} className={styles.link} key={item.id}>
                <BiChevronLeft className={styles.chevron} />
                <span>{item.title}</span>
                <BiChevronRight className={styles.chevron} />
              </Link>
            ))}
          </ul>
        </div>
        <div className={styles.accounts}>
          <AiOutlineGithub />
          <AiOutlineLinkedin />
          <FiMail />
          <RxHamburgerMenu className={styles.hamburger} />
        </div>
      </div>
    </header>
  );
};

export default Header;
