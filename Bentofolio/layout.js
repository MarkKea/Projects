'use client'

import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

export const ShowContext = createContext()
export const SwitcherContext = createContext()
export const ActiveContext = createContext()

export default function RootLayout({ children }) {
  const [show, setShow] = useState(false)
  const [switcher, setSwitcher] = useState(false)
  const [active, setActive] = useState('Home')

  return (
    <html lang="en">
      <body className={switcher ? 'body' : 'darkbody'}>
          <ActiveContext.Provider value={[active, setActive]}>
            <SwitcherContext.Provider value={[switcher, setSwitcher]}>
              <ShowContext.Provider value={[show, setShow]}>
                {children}
              </ShowContext.Provider>
            </SwitcherContext.Provider>
          </ActiveContext.Provider>
        </body>
    </html>
  );
}
