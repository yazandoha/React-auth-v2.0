import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import Home from './component/Home/Home'
import PageNotFound from './component/PageNotFound/PageNotFound'
import Content from './component/Content/Content'
import Profile from './component/Profile/Profile'
import { jwtDecode } from 'jwt-decode'
import Root from './Layout/Root'


export default function App() {
  // this code :localStorage.getItem("userToken")?true:false 
  //mean : if the userToken is found in the login set the isLogin true else set false 
  const [isLogin,setIsLogin]=useState(localStorage.getItem("userToken")?true:false);
  const [userData,setUserData]=useState({}); // this variable to store the 

  useEffect(()=>{
    const token = localStorage.getItem("userToken");
    if(token){
      setIsLogin(true);
      const decode = jwtDecode(token);
      setUserData(decode);
    }

  },[])


  const Router = createBrowserRouter([
    {
      path:'/',
      element:<Root isLogin={isLogin} setIsLogin={setIsLogin} setUserData={setUserData} userName={userData.userName}/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
         
          path:'/login',
          element:<Login setIsLogin={setIsLogin} setUserData={setUserData}/>

        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/profile',
          element:<Profile userData={userData}/>
        },
        {
          path:'/content',
          element:<Content/>
        },
        {
          path:'/*',
          element:<PageNotFound/>
        }
      ]
    }
    // {
    //   path:'/admin',
    //   element:<Admin/>,
    //   children:[
    //     {
    //       path:'/users',
    //       element:<Users/>
    //     },
    //     {
    //       path:'/products',
    //       element:<Products/>
    //     }
    //   ]
    // }
])
  return (
    <RouterProvider router={Router}/>
  )
}
