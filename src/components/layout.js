// import * as React from "react";

// const Layout = ({children}) => {

//   return (
//     <div className="container">
//       <header>
//         <h1> Min navbar</h1>
//       </header>

//       <main>
//         {children}
//       </main>
//       <footer>
//         Här ska min footer ligga
//       </footer>

//     </div>
//   )
// }



// export default Layout

import * as React from "react";
import { Link } from "gatsby";
import {
	container,
	navigation,
	navigationList,
	mainContent,
} from "../styles/layout.module.css";

const Layout = ({ children }) => {
	return (
		<div className={container}>
			<header>
				<h1>Header ett måste?</h1>
			</header>
			<nav className={navigation}>
				<ul className={navigationList}>
					<li>
						<Link to="/">Hem</Link>
					</li>
					<li>
						<Link to="/portfolio">Portfolio</Link>
					</li>
				</ul>
			</nav>
			<main className={mainContent}>{children}</main>
			<footer>Footer</footer>
		</div>
	);
};

export const Head = () => <title>Portfolio</title>;

export default Layout;
