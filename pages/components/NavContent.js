import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import styles from "./Navbar.module.css";

export default function NavContent(props) {
	return (
		<div className="container mx-auto flex flex-wrap p-5 flex-col lg:flex-row items-center">
			<Link href="/">
				<a className="flex title-font font-medium items-center text-gray-900 mb-4 lg:mb-0 dark:text-gray-100">
					<img className="w-6" src="/clueless_logo.png" alt="clueless logo" />
					<span className="ml-3 text-xl ">ClueLess</span>
				</a>
			</Link>
			<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
				<Link href="/allcontributors">
					<a className={styles.underline}>All Contributors</a>
				</Link>
				<Link href="/whattodo">
					<a className={styles.underline}>What to do?</a>
				</Link>
				<Link href="/">
					<a
						target="_blank"
						href="https://www.clueless.tech/"
						className={styles.underline}
					>
						Visit main website
					</a>
				</Link>
			</nav>
			<a href="/instructions" target="_blank">
				<button className="font-bold inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none dark:hover:bg-blue-500 hover:text-white hover:bg-blue-500 rounded-xl mt-4 lg:mt-0 text-lg transition-all dark:bg-gray-600">
					Contibute Now
					<svg
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="3"
						className="w-4 h-4 ml-1"
						viewBox="0 -2 24 24"
					>
						<path d="M5 12h14M12 5l7 7-7 7"></path>
					</svg>
				</button>
			</a>
			<Theme hero={props.herotheme} />
		</div>
	);
}
