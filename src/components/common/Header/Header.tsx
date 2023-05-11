/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
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
    href: '/#projects',
  },
  {
    id: 2,
    title: 'Contact',
    href: '/#contact',
  },
  // {
  //   id: 3,
  //   title: 'About',
  //   href: '/about',
  // },
];

const accountLinks = [
  {
    id: 0,
    title: 'Github',
    href: 'https://github.com/khamudom',
    icon: <AiOutlineGithub />,
  },
  {
    id: 1,
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/khamudom/',
    icon: <AiOutlineLinkedin />,
  },
];

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <img
            className={styles.logo}
            src="/assets/images/kulogo.png"
            alt="logo"
          />
          <div>
            Kham <br />
            Udom
          </div>
        </div>
        <div className={styles.navLinks}>
          <ul>
            {navigationItems.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className={styles.link}>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.accounts}>
          {accountLinks.map((item) => (
            <Link
              className={styles.icon}
              href={item.href}
              key={item.id}
              target="_blank"
            >
              {item.icon}
            </Link>
          ))}
          {/* <FiMail /> */}
          {/* <RxHamburgerMenu className={styles.hamburger} /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
