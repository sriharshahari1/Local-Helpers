import { useState } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from './components/HomePage'
import './App.css'

import { ThemeProvider } from "@material-tailwind/react";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
  ]);

  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router}>
          <Outlet/>
        </RouterProvider>
      </ThemeProvider>
    </>
  )
}

export default App
