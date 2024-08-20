{/* web sidebar  */}
      {/* <div
        onMouseEnter={handleNavbar}
        onMouseLeave={closeNavbar}
        className={`${
          isOpen ? "md:w-96" : "md:w-20"
        } transition-all duration-300 bg-white w-0 md:visible invisible h-auto md:px-3 py-4 border-r border-r-gray-300 shadow-sm shadow-gray-800`}
      >
        <div className=" w-full">
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
              {navItems?.map((navitem) => (
                <>
                  {
                    isOpen && (
                      navitem?.title.length > 0 && (
                        <div className={` ${ isOpen ? "w-fit" : " w-0 invisible"} uppercase font-semibold text-gray-400 transition-all duration-300 ease-ease text-sm px-4 py-3`}>
                          {navitem.title}
                        </div>
                      )
                    )
                  }
                  {navitem?.items.map((item) => (
                    <li onClick={() => handleSubNavbar(item.name)}>
                      <div className=" flex gap-3 py-3 px-4 items-center hover:bg-[#ff67671a] rounded-md">
                        <div className=" w-5 h-5">
                          <img
                            className=" h-full w-full"
                            src="https://img.icons8.com/ios-filled/50/pos-terminal--v1.png"
                            alt=""
                          />
                        </div>
                        {isOpen && (
                          <div className=" w-full flex justify-between">
                            <div
                              className={` ${
                                isOpen ? "w-fit" : " w-0 invisible"
                              }pl-8 transition-all duration-300 ease-ease text-black `}
                            >
                              {item?.name}
                            </div>
                            {item?.subMenu?.length > 0 && (
                              <div>
                                <i
                                  className={`${
                                    dropdown === item.name
                                      ? "-rotate-180"
                                      : "rotate-0"
                                  } transition-all duration-500  fa-solid fa-caret-down`}
                                ></i>{" "}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      {
                        isOpen && (
                          item?.subMenu?.map((subItem) => (
                            <div
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
                </>
              ))}
            </ul>
          </div>
        </div>
      </div> */}
      {/* mobile sidebar */}