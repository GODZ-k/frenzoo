import { myContext } from "@/Context/Context";
import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navItems = [
  {
    title: "",
    items: [
      {
        name: "Dashboard",
        image: <i class="fa-solid fa-house"></i>,
        to: "/admin",
      },
    ],
  },
  {
    title: "",
    items: [
      {
        name: "POS",
        image: <i class="fa-solid fa-signs-post"></i>,
        to: "/pos",
      },
    ],
  },
  {
    title: "ORDER MANAGEMENT",
    items: [
      {
        name: "Cash Payment",
        image: <i class="fa-solid fa-bag-shopping"></i>,
        to: "/admin/cash-payment",
      },
      {
        name: "Order Management",
        image: <i class="fa-solid fa-cart-shopping"></i>,
        to: "/",
        subMenu: [
          {
            name: "All",
            image: "",
            to: "/",
          },
          {
            name: "Pending",
            image: "",
            to: "/",
          },
          {
            name: "Confirmed",
            image: "",
            to: "/",
          },
          {
            name: "Cooking",
            image: "",
            to: "/",
          },
          {
            name: "Ready to Serve",
            image: "",
            to: "/",
          },
          {
            name: "Completed",
            image: "",
            to: "/",
          },
          {
            name: "Canceled",
            image: "",
            to: "/",
          },
        ],
      },
    ],
  },
  {
    title: "Product MANAGEMENT",
    items: [
      {
        name: "Category Setup",
        image: <i class="fa-solid fa-list"></i>,
        to: "/",
      },
      {
        name: "Product Setup",
        image: <i class="fa-solid fa-diamond"></i>,
        to: "/",
        subMenu: [
          {
            name: "Product Customization",
            image: "",
            to: "/",
          },
          {
            name: "Product Add",
            image: "",
            to: "/",
          },
          {
            name: "Product List",
            image: "",
            to: "/",
          },
        ],
      },
    ],
  },
  {
    title: "Report and analytics",
    items: [
      {
        name: "Sales Report",
        image: "",
        to: "/",
      },
    ],
  },
  {
    title: "Customer Detail",
    items: [
      {
        name: "Customers",
        image: "",
        to: "/",
      },
    ],
  },
  {
    title: "Staff management",
    items: [
      {
        name: "Staff Setup",
        image: "",
        to: "/",
      },
    ],
  },
  {
    title: "table management",
    items: [
      {
        name: "Table Setup",
        image: "",
        to: "/",
      },
    ],
  },
  {
    title: "system setting",
    items: [
      {
        name: "Business Setup",
        image: "",
        to: "/",
      },
    ],
  },
];

function Sidebarmenu() {
  const sidebarRef = useRef(null);
  const { isOpen, setIsOpen } = useContext(myContext);
  const [dropdown, setDropdown] = useState("");

  function handleNavbar() {
    setIsOpen(true);
  }

  function closeNavbar() {
    setIsOpen(false);
  }

  function handleSubNavbar(name) {
    setDropdown(dropdown === name ? "" : name);
  }

  // // for mobile devices ----
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <>
      
      <div
        onMouseEnter={handleNavbar}
        onMouseLeave={closeNavbar}
        ref={sidebarRef}
         role="navigation"
  aria-label="Sidebar"
        className={`${
          isOpen ? "w-[20rem] md:w-[23rem]" : "md:w-24"
        } transition-all duration-300  w-0 bg-white md:w-24 fixed md:static pb-14 h-screen overflow-scroll py-4 border-r border-r-gray-300 shadow-sm shadow-gray-800`}
      >
        <div className=" px-3 flex flex-col md:items-center md:justify-center w-full">
          <div className=" flex justify-center">
          {!isOpen && <i className=" fa-solid fa-magnifying-glass"></i>}
            {isOpen && (
              <input
                className=" p-2  w-full border border-orange-500  rounded-md"
                type="text"
                placeholder="Search menu"
              />
            )}
          </div>
          <div className=" my-5">
            <ul className=" flex flex-col gap-2">
              {navItems?.map((navitem ,index) => (
                <React.Fragment key={index}>
                  {isOpen && (
                    navitem?.title.length > 0 && (
                      <div className=" uppercase font-semibold text-gray-400 text-sm px-4 py-3">
                        {navitem.title}
                      </div>
                    )
                  )}
                  {navitem?.items.map((item,index) => (
                    <li key={index} onClick={() => handleSubNavbar(item.name)}>
                      <Link to={item.to}>
                      <div className=" flex gap-3 py-3 px-4 items-center hover:text-[#ff67671a] rounded-md">
                        <div className=" w-5 h-5 hover:text-[#FC6A57]">
                        {item.image}
                        </div>
                        {isOpen && (
                          <div className="  w-full flex justify-between">
                            <div className=" hover:text-[#FC6A57]  transition-all duration-200 ease-in-out text-black">
                              {item?.name}
                            </div>
                            {item?.subMenu?.length > 0 && (
                              <div>
                                <i
                                  className={`${
                                    dropdown === item.name
                                      ? "-rotate-180"
                                      : "rotate-0"
                                  } transition-all duration-200 hover:text-[#FC6A57] fa-solid fa-caret-down`}
                                ></i>{" "}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      </Link>
                    {
                      isOpen && (
                        item?.subMenu?.map((subItem,idx) => (
                          <div
                          key={idx}
                            className={`transition-all duration-700 overflow-hidden pl-5 ${
                              dropdown === item.name
                                ? "max-h-screen visible"
                                : "max-h-0 invisible"
                            }`}
                          >
                            <ul className=" py-2 pl-10">
                              <Link>
                                <li className=" rounded-md list-disc hover:bg-[#e7e7e76e] p-2 cursor-pointer">
                                  {subItem.name}
                                </li>
                              </Link>
                            </ul>
                          </div>
                        ))
                      )
                    }
                    </li>
                  ))}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebarmenu;
