'use client'
import React from 'react'

// Redux
import { Provider } from "react-redux";
import { store } from "@/context";

interface Props {
  children: React.ReactNode;
}

export default function Providers({children} : Props) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
