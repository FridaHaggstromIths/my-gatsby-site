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
