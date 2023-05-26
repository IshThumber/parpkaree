// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import Dropdown from "./Dropdown";
// import Dropdown from "flowbite/components/dropdown/Dropdown";

// const Menus = ({ items }) => {
//   const [dropdown, setDropdown] = useState(false);

//   return (
//     <li className="menu-items">
//       {items.submenu ? (
//         <>
//           <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}>
//             {items.title}
//           </button>
//           {/* <Dropdown submenus={items.submenu} dropdown={dropdown} /> */}
//           <Dropdown label="Dropdown">

//           </Dropdown>
//         </>
//       ) : (
//         <Link
//           to={items.url}
//           aria-label={items.title}
//           title={items.title}
//            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//         >
//           {items.title}
//         </Link>
//       )}
//     </li>
//   );
// };

// export default Menus;
