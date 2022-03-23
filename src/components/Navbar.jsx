import { Link } from "react-router-dom";
const links = [
  {
    title: "Home",
    link: "/"
  },
  //   add the other link as well
  {
title : "About",
link : "/about"
  },
  {
    title : "Products",
    link : "/products"
  }
];
export const Navbar = () => {
  return(
    <div>
      <ul>
        {
          links.map((el, index) => {
            return(
              <Link key={index} to={el.link}>
                <li id={el.id}>{el.title} </li>
              </Link>
            )
          })
        }
      </ul>
    </div>
  )
};
