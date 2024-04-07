/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdOutlineLaunch } from "react-icons/md";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const accountLinks = [
  {
    id: 0,
    title: "Github",
    href: "https://github.com/khamudom",
    icon: <AiOutlineGithub />,
  },
  {
    id: 1,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/khamudom/",
    icon: <AiOutlineLinkedin />,
  },
];

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={styles.container}>
        <hr className={styles.divider} />
        <div className={styles.wrapper}>
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
          </div>
          <div className={styles.siteInfo}>
            <p className={styles.text}>
              The source code for this website is available on GitHub
            </p>
            <a
              href="https://github.com/khamudom/portfolio-khamu-v2"
              target="_blank"
              title="website source code"
            >
              <MdOutlineLaunch />
            </a>
          </div>
          <div className={styles.iconWrapper}>
            <img src="/assets/images/skills/icon-react.png" alt="react" />
            <img src="/assets/images/skills/icon-next.png" alt="next js" />
            <img src="/assets/images/skills/icon-ts.png" alt="typescript" />
            <img src="/assets/images/skills/icon-scss.png" alt="scss" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
