import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";

import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { TbMoonStars } from "react-icons/tb";
import { ImSun } from "react-icons/im";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { BsGithub } from "react-icons/bs";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkScheme = window.matchMedia("(prefers-color-scheme:dark)").matches;
    setIsDark(darkScheme);
    document.body.classList.toggle("dark", darkScheme);
  }, []);

  function handleModeToggle() {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
  }

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] flex items-center justify-between z-20 sticky top-0 duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center bg-white dark:bg-gray-700 text-black dark:text-white">
        <div className={isDark ? "dark" : "light"}>
          <Link href="/">
            {isDark ? (
              <img
                src="/logo-dark.svg"
                className="w-[40px] md:w-[60px]"
                alt=""
              />
            ) : (
              <img src="/logo.svg" className="w-[40px] md:w-[60px]" alt="" />
            )}
          </Link>
        </div>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />

        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            className="bg-black text-white"
          />
        )}

        <div className={`flex items-center gap-2 t`}>
          {/* Icon Starts from here  */}
          {/* <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] ">
              51
            </div>
          </div> */}
          {/* Icon ends here */}

          {/* Icon Starts from here  */}
          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[15px] md:text-[20px]" />
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] ">
                5
              </div>
            </div>
          </Link>

          <div
            onClick={() =>
              window.open("https://github.com/Shivraj-K09", "_blank")
            }
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative"
          >
            <BsGithub className="text-[15px] md:text-[22px]" />
          </div>

          {/* Theme switch starts from here */}
          <div
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative"
            onClick={handleModeToggle}
          >
            {isDark ? (
              <ImSun
                className="text-[15px] md:text-[22px]"
                aria-label="Switch to Light mode"
              />
            ) : (
              <TbMoonStars
                className="text-[15px] md:text-[22px]"
                aria-label="Switch to Dark mode"
              />
            )}
          </div>
          {/* Theme switch ends here */}

          {/* Mobile Icon Starts here */}
          <div className="md:hidden w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>

          {/* Mobile Icon ends here */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
