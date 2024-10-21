'use client'

import Aside from "@/components/shared/aside";
import Header from "@/components/shared/header";
import Main from "@/components/shared/main";
import { createContext, useState } from "react";

export const HideContext = createContext()

export default function Home() {
  const [hide, setHide] = useState(true)

  return (

    <HideContext.Provider value={[hide, setHide]}>
      <div className=""> 
        <Header />
        <Aside />
        <Main />
      </div>
    </HideContext.Provider>
  );
}
