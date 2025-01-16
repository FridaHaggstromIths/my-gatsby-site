import React from "react";
import { graphql, useStaticQuery, Link} from "gatsby";
import { navigation, navigationList, navigationLinks, activeLink } from "../styles/menu.module.css"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMenuItem (sort: {order: ASC}){
        nodes {
          title
          linkTo {
            slug
            title
          }
        }
      }
    }
    `);

    const menuItems = data.allContentfulMenuItem.nodes;

    if (!menuItems || menuItems.length === 0) {
      console.error('No menu items found:', menuItems)
      return (
        <div>
          Error loading menu items, please contact me if you see this error
          message.
        </div>
      )
    }

    return (
      <nav className={navigation}>
        <ul className={navigationList}>
          {menuItems.map((item,index) => (
            <li key={index}>
              <Link className={navigationLinks} activeClassName={activeLink} to={item.linkTo.slug === "/" ? "/" : `/${item.linkTo.slug}`}>{item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
};

export default Menu;
