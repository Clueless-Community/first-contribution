import React, { useState } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Show, Hide } from "@chakra-ui/react";
import NavContent from "./NavContent";

const Navbar = (props) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className="relative z-50">
        <header className="text-gray-600 body-font bg-gray-50 dark:bg-gray-800 dark:text-white">
          <Show breakpoint="(max-width: 400px)">
            <div className="p-4 mr-auto" onClick={() => setShowNav(!showNav)}>
              {!showNav && (
                <HamburgerIcon
                  w={28}
                  h={28}
                  color={props.homeTheme === "dark" ? "white" : "black"}
                />
              )}
              {showNav && (
                <CloseIcon
                  w={24}
                  h={24}
                  color={props.homeTheme === "dark" ? "white" : "black"}
                />
              )}
            </div>
            {showNav && <NavContent herotheme={props.herotheme} />}
          </Show>
          <Hide breakpoint="(max-width: 400px)">
            <NavContent herotheme={props.herotheme} />
          </Hide>
        </header>
      </div>
    </>
  );
};

export default Navbar;
