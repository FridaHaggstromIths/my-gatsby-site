import React from "react";
import Menu from "./menu.js"
import { container} from "../styles/layout.module.css";


const Layout = ({children}) => {
	return (
		<div className={container}>
			<Menu />
			<main> {children}</main>
		</div>
	);
};

export default Layout;



// // export default Layout

// import * as React from "react";
// import { Link } from "gatsby";
// import {
// 	container,
// 	navigation,
// 	navigationList,
// 	mainContent,
// } from "../styles/layout.module.css";

// const Layout = ({ children }) => {
// 	return (
// 		<div className={container}>
// 			<nav className={navigation}>
// 				<ul className={navigationList}>
// 					<li>
// 						<Link to="/">Hem</Link>
// 					</li>
// 					<li>
// 						<Link to="/portfolio">Portfolio</Link>
// 					</li>
// 					<li>
// 						<Link to="/about">About</Link>
// 					</li>
// 				</ul>
// 			</nav>
// 			<main className={mainContent}>{children}</main>
// 			<footer>Footer</footer>
// 		</div>
// 	);
// };

// export const Head = () => <title>Portfolio</title>;

// export default Layout;
