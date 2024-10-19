
import Navbar from '../component/Navber/Navbar'
import Footer from '../component/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Root({isLogin,setIsLogin,setUserData,userName}) {

  return (
    <>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} setUserData={setUserData} userName={userName}/>
        <Outlet/>
        <Footer/>
    </>
  )
}
