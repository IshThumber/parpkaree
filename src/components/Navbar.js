// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { menu } from "../utils/menuItems";
// import Menus from "../utils/Menus";

// const Nav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <>
//       <div  className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-green-300">
//         <div  className="relative flex items-center justify-between">
//           <Link to="/" aria-label="Company" title="Company"  className="inline-flex items-center">
//             <span  className="ml-2 text-xl font-bold tracking-wide text-gray-800">Paropkaree Foundation</span>
//           </Link>
//           <ul  className="flex items-center hidden space-x-8 lg:flex">
//             {/* {menu.map((item, index) => {
//               return (
//                 <Menus key={index} items={item} />
//               );
//             })} */}

//             <li>
//               <Link to="/"  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about-us"
//                 aria-label="Our product"
//                 title="Our product"
//                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//               >
//                 About us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/projects"
//                 aria-label="Product pricing"
//                 title="Product pricing"
//                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//               >
//                 Projects
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/core-team"
//                 aria-label="About us"
//                 title="About us"
//                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//               >
//                 Our Team
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/help"
//                 aria-label="About us"
//                 title="About us"
//                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//               >
//                 How can you help
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact-us"
//                 aria-label="About us"
//                 title="About us"
//                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//               >
//                 Contact us
//               </Link>
//             </li>
//           </ul>
//           <div  className="lg:hidden">
//             <button
//               aria-label="Open Menu"
//               title="Open Menu"
//                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
//               onClick={() => setIsMenuOpen(true)}
//             >
//               <svg  className="w-5 text-gray-600" viewBox="0 0 24 24">
//                 <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
//                 <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
//                 <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
//               </svg>
//             </button>
//             {/* {isMenuOpen && (
//                 <div  className="absolute top-0 left-0 w-full">
//                   <div  className="p-5 bg-white border rounded shadow-sm">
//                     <div  className="flex items-center justify-between mb-4">
//                       <div>
//                         <a href="/" aria-label="Company" title="Company"  className="inline-flex items-center">
//                           <svg
//                              className="w-8 text-deep-purple-accent-400"
//                             viewBox="0 0 24 24"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeMiterlimit="10"
//                             stroke="currentColor"
//                             fill="none"
//                           >
//                             <rect x="3" y="1" width="7" height="12" />
//                             <rect x="3" y="17" width="7" height="6" />
//                             <rect x="14" y="1" width="7" height="6" />
//                             <rect x="14" y="11" width="7" height="12" />
//                           </svg>
//                           <span  className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Company</span>
//                         </a>
//                       </div>
//                       <div>
//                         <button
//                           aria-label="Close Menu"
//                           title="Close Menu"
//                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
//                           onClick={() => setIsMenuOpen(false)}
//                         >
//                           <svg  className="w-5 text-gray-600" viewBox="0 0 24 24">
//                             <path
//                               fill="currentColor"
//                               d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
//                             />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                     <nav>
//                       <ul  className="space-y-4">
//                         <li>
//                           <a
//                             href="/"
//                             aria-label="Our product"
//                             title="Our product"
//                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//                           >
//                             Product
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="/"
//                             aria-label="Our product"
//                             title="Our product"
//                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//                           >
//                             Features
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="/"
//                             aria-label="Product pricing"
//                             title="Product pricing"
//                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//                           >
//                             Pricing
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="/"
//                             aria-label="About us"
//                             title="About us"
//                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//                           >
//                             About us
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="/"
//                             class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
//                             aria-label="Sign up"
//                             title="Sign up"
//                           >
//                             Sign up
//                           </a>
//                         </li>
//                       </ul>
//                     </nav>
//                   </div>
//                 </div>
//               )} */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Nav;

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";

const navListMenuItems1 = [
  {
    title: "Mission & Vision",
    link: "/mission-n-vision"
  }
];

const navListMenuItems2 = [
  {
    title: "Core Team",
    link: "/core-team"
  }
];

const navListMenuItems3 = [
  {
    title: "Donate",
    link: "/donate"
  },
  {
    title: "Member",
    link: "/member"
  },
  {
    title: "Volunteer",
    link: "/volunteer"
  }
];

function AboutUsMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems1.map(({ title, link }, key) => (
    <Link to={link} key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-serif font-normal"
          >
            {title}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  ));

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="medium"
            className="font-serif font-normal"
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              About Us
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
}

function OurTeamMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems2.map(({ title, link }, key) => (
    <Link to={link} key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-serif font-normal"
          >
            {title}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  ));

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="medium"
            className="font-serif font-normal"
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Our Team
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
}

function HelpMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems3.map(({ title, link }, key) => (
    <Link to={link} key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-serif font-normal"
          >
            {title}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  ));

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="medium"
            className="font-normal font-serif"
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              How can you Help
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block font-serif">
          <ul className="grid gap-y-2 font-serif">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden font-serif">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 text-xl">
      <Typography
        as="a"
        href="/"
        variant="medium"
        color="blue-gray"
        className="font-normal font-serif"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <AboutUsMenu />
      <Typography
        as="a"
        href="/projects"
        variant="medium"
        color="blue-gray"
        className="font-normal font-serif"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Projects
        </ListItem>
      </Typography>
      <OurTeamMenu />
      <HelpMenu />
      <Typography
        as="a"
        href="/contact-us"
        variant="medium"
        color="blue-gray"
        className="font-normal font-serif"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

const NavbarTop = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen px-5 py-3 align-middle text-xl font-serif">
      <div className="flex items-center justify-between text-blue-gray-900 align-middle font-serif">
        <Typography
          as="a"
          href="#"
          variant="h5"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 font-serif"
        >
          Paropkaree Foundation
        </Typography>
        <div className="hidden lg:block text-xl font-serif">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default NavbarTop;
