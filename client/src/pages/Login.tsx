// import React from 'react'

import { BarIcon } from "../icons/BarIcon";
import { CircleCrossIcon } from "../icons/CircleCrossIcon";
import { FilterIcon } from "../icons/FilterIcon";
import { LeftArrowIcon } from "../icons/LeftArrow";
import { SortIcon } from "../icons/SortIcon";

export default function Login() {
  return (
    <div>

      <header className="border-b-3 flex bg-myBlack border-myOrange items-center justify-between fixed left-0 h-16 pt-2 px-3 top-12 w-screen" >
        {/* <div>
          <LeftArrowIcon size="lg" />
        </div> */}
        <div className="">
          {/* <SortIcon size="md" />
          <FilterIcon size="md" /> */}
        </div>
      </header>

      <main>
        Contact
      </main>

      <footer></footer>
    </div>
  )
}
