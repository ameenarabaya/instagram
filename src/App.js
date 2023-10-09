import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home/Home';
import Explore from './component/Explore/Explore';
import MessagePage from './component/Message/MessagePage';
import Profile from './component/Profile/Profile'
import SignUp from './component/SignUp';
import Login from './component/Login';
import Protected from './component/Protected';
import OutLayout from './component/OutLayout';
import ProtectedAuth from './component/ProtectedAuth'
import PageNotFound from './component/PageNotFound';
function App() {
  let routes = createBrowserRouter([
    {path:'/',element:<OutLayout/> ,children:[
      {index:true ,element:<ProtectedAuth><SignUp/></ProtectedAuth>},
      {path:'/login' , element:<ProtectedAuth><Login/></ProtectedAuth>},
       ]},
      {path:'/user' , element:<Protected><Layout/></Protected>,children:[
      {index:true , element:<Home/>},
      {path:'/user/explore', element:<Explore/>},
      {path:'/user/messagePage' , element:<MessagePage/>},
      {path:'/user/profile' , element:<Profile/>},

    ]},
    {path:"*" , element:<PageNotFound/>}
  ])
  return (
   <RouterProvider router={routes}/>
  );
}

export default App;
