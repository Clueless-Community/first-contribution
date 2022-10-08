import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-slate-900">
      <div className="hidden"></div>

      <footer className="text-gray-600 body-font dark:text-white">
        <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a
              href="/"
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-gray-50"
            >
              <img
                className="w-6"
                src="/clueless_logo.png"
                alt="clueless logo"
              />
              <span className="ml-3 text-xl">
                <a href="https://clueless.vercel.app/">ClueLess</a>
              </span>
            </a>
            <p className="mt-2 text-sm dark:text-gray-50">
              ClueLess Community, Learn. Grow.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">
                Resources
              </h2>
              <nav className="list-none mb-10 space-y-2">
                <li>
                  <a
                    href="https://github.com/HITK-2025/first-contribution"
                    target="_blank"
                    className={styles.underline}
                  >
                    First Contribution
                  </a>
                </li>
                <li>
                  <Link href="/whattodo/basic-github-commands">
                    <a className={styles.underline}>Basic GitHub Commands</a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">
                Pages
              </h2>
              <nav className="list-none mb-10 space-y-2">
                <li>
                  <Link href="/" target="_blank">
                    <a className={styles.underline}>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/allcontributors" target="_blank">
                    <a className={styles.underline}>All Contibutors</a>
                  </Link>
                </li>
                <li>
                  <Link href="/whattodo" target="_blank">
                    <a className={styles.underline}>What to do?</a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3 ">
                Community Link
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="https://discord.gg/r5uKBGxT9T" target="_blank"
                     className={styles.underline}>Discord</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3 ">
                Socials
              </h2>
              <nav className="list-none mb-10 space-y-2">
                <li>
                  <a
                    href="https://twitter.com/by_clueless"
                    target="_blank"
                    className={styles.underline}
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Clueless-Community"
                    target="_blank"
                    className={styles.underline}
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/clueless-tech/"
                    target="_blank"
                    className={styles.underline}
                  >
                    LinkedIn
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-blue-500 dark:bg-slate-800 text-center">
          <div className={styles.copyright}>
            <p className="text-gray-50 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} ClueLess
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
