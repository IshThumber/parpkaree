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
import { Link, useNavigate } from "react-router-dom";
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
            variant="medium"
            color="blue-gray"
            className="flex items-center text-sm font-serif font-normal "
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
              className="flex items-center gap-2 py-2 pr-4 text-gray-800"
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
              className="flex items-center gap-2 py-2 pr-4 text-gray-800"
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
              className="flex items-center gap-2 py-2 pr-4 text-gray-800"
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
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-gray-800">
          Home
        </ListItem>
      </Typography>
      <AboutUsMenu />
      <Typography
        as="a"
        href="/projects"
        variant="medium"
        color="blue-gray"
        className="font-normal font-serif"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-gray-800">
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
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-gray-800">
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

  const navigate = useNavigate();
  return (
    <Navbar className="mx-auto max-w-screen px-5 py-5 align-middle text-xl font-serif shadow-transparent rounded-none bg-primary border-0">
      <div className="flex items-center justify-between text-blue-gray-900 align-middle font-serif">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            className="h-12 w-12"
            src="https://paropakaareefoundation.org/wp-content/uploads/2023/02/cropped-cropped-cropped-paropkari_foundation-removebg-preview.png"
            alt="logo"
          />
          <Typography
            as="a"
            href="/"
            variant="h5"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2 font-serif"
          >
            Paropkaree Foundation
          </Typography>
        </div>
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
