// import React, { useState } from "react";
// import { RiMenuUnfoldLine } from "react-icons/ri";
// import { AiOutlineClose } from "react-icons/ai";
// import SideMenu from "./sideMenu";

// const SideBar = () => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <div
//       className={`h-screen flex absolute left-0 top-0 z-10 ${
//         toggle ? "w-full" : "w-1/12"
//       } sidebar`}
//     >
//       <div
//         onClick={() => setToggle(!toggle)}
//         className="mt-4 text-2xl flex h-full flex-col"
//       >
//         <span className="ml-auto px-1">
//           {toggle ? (
//             <AiOutlineClose />
//           ) : (
//             <RiMenuUnfoldLine />
//           )}
//         </span>

//         <span className="w-full mt-10">
//           {toggle && <SideMenu />}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default SideBar;
