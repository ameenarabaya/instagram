import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Pages/Home/Home';
import Explore from './component/Pages/Explore/Explore';
import MessagePage from './component/Pages/Message/MessagePage';
import Profile from './component/Pages/Profile/Profile'
import SignUp from './component/SignUp';
import Login from './component/Login';
import Protected from './component/Protected';
import OutLayout from './component/OutLayout';
import ProtectedAuth from './component/ProtectedAuth'
import PageNotFound from './component/Pages/PageNotFound';
import { PostContext } from './component/context';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './component/Pages/search/Search';
import UserProfile from './component/Pages/Userprofile/UserProfile.jsx';
function App() {
  let [posts,setposts] = useState([]);
  let [myUser,setMyUser] = useState([])
  let token = localStorage.getItem('token')
  let routes = createBrowserRouter([
    {path:'/',element:<OutLayout/> ,children:[
      {index:true ,element:<ProtectedAuth><Login/></ProtectedAuth>},
      {path:'signup' , element:<ProtectedAuth><SignUp/></ProtectedAuth>},
       ]},
      {path:'user' , element:<Protected><Layout/></Protected>,children:[
      {index:true , element:<Home/>},
      {path:'explore', element:<Explore/>},
      {path:'messagePage' , element:<MessagePage/>},
      {path:'profile' , element:<Profile/>},
      {path:'search', children:[
        {index:true ,element:<Search/>},
        {path:'user/:UserId' , element:<UserProfile/>}
      ]}

    ]},
    {path:"*" , element:<PageNotFound/>}
  ])
  return (
  <PostContext.Provider value={{posts,setposts,myUser,setMyUser}}>
   <RouterProvider router={routes}/>
   </PostContext.Provider>
  );
}

export default App;
