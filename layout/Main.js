import React from 'react'
import {Outlet,ScrollRestoration} from 'react-router-dom'
import Header from '../common/Header'
const Main = () => {
  return (
    <>
    <Header/>
    <ScrollRestoration/>
    <main>
        <Outlet/>
    </main>
    <footer>
        <h2>Footer</h2>
    </footer>
    </>
  )
}

export default Main
