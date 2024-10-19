import React from 'react'
import Sidbar from '../component/Admin/Sidbar'
import Footer from '../component/Admin/Footer'
import { Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <>
        <Sidbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}
