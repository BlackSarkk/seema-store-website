// import React from 'react'

import { BarIcon } from "../icons/BarIcon";
import { FilterIcon } from "../icons/FilterIcon";
import { PlusIcon } from "../icons/PlusIcon";
import { SortIcon } from "../icons/SortIcon";

export default function Admin() {

  

  return (
    <div>

      <header className="border-b-3 flex bg-myBlack border-myOrange items-center justify-between fixed left-0 h-16 pt-2 px-3 top-12 w-screen" >
        <div className="flex">
          <BarIcon size="lg" />
          <PlusIcon size="lg" />
        </div>
        <div>
          12 JAN 2025
        </div>
        <div className="flex items-center justify-between w-20 ">
          <SortIcon size="md" />
          <FilterIcon size="md" />
        </div>
      </header>

      <main>
      HOME
      </main>

      <footer></footer>
    </div>
  )
}