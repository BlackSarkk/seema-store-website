// import React from 'react'

import DateComponent from "../components/DateComponent";
import { BarIcon } from "../icons/BarIcon";
import { FilterIcon } from "../icons/FilterIcon";
import { SortIcon } from "../icons/SortIcon";

export default function Home() {
  return (
    <div>

      <header className="border-b-3 flex bg-myBlack border-myOrange items-center justify-between fixed left-0 h-16 pt-2 px-3 top-12 w-screen" >
        <div>
          <BarIcon size="lg" />
        </div>
        <div>
          <DateComponent />
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


