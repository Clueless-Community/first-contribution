import React, { useState } from "react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { Show, Hide } from "@chakra-ui/react"
import NavContent from "./NavContent"

const Navbar = (props) => {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <div className='dark:bg-gray-700 z-50 sticky top-0 left-0 w-full'>
        <header className='text-gray-600 body-font bg-gray-50 bg-opacity-50 dark:bg-gray-800 dark:text-white dark:bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-sm'>
          <Show breakpoint='(max-width: 400px)'>
            <div>
              <button className='p-4 mr-auto' onClick={() => setShowNav(!showNav)}>
                {showNav ? (
                  <CloseIcon
                    w={24}
                    h={24}
                    color={props.homeTheme === "dark" ? "white" : "black"}
                  />) : (<HamburgerIcon
                    w={28}
                    h={28}
                    color={props.homeTheme === "dark" ? "white" : "black"}
                  />)
                }
              </button>
            </div>
            {showNav && <NavContent herotheme={props.herotheme} />}
          </Show>
          <Hide breakpoint='(max-width: 400px)'>
            <NavContent herotheme={props.herotheme} />
          </Hide>
        </header>
      </div>
    </>
  )
}

export default Navbar
