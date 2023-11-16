// // import React from 'react';
// // import Home from './home';
// // import './App.css';
// // import Navbar from './Component/NavBar';
// // import BackgroundImgpage from './Component/BackgroundImgpage';
// // import Footer from './Component/Footer/Footer';
// // import SlideShows from './Component/SlideShows';
// // const  App = () => {
// //   return (
// //     <div className='background'>
// //       <Home />
// //       <Navbar />
// //       <SlideShows />
// //       {/* <BackgroundImgpage />  */}
// //       <Footer /> 
// //     </div>
// //   );
// // }

// // export default App;



import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import React from 'react';
import { Children } from "react";
import SlideShows from "./Component/SlideShows";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./Component/Contact/Contact";
import Login from "./pages/Login";
import Services from "./pages/Services";
import './App.css';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import Construction from "./pages/Construction";
import AfterLogin from "./pages/AfterLogin";
import UserLoginComponent from "./pages/UserLoginComponent";
import SignUp from './pages/SignUp';
import Flats from "./Component/Type of Houses/Flats";
import ForgotPasswordPage from "./pages/ForgotPassword";

const Layout = () => {
  return (
    <div>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

const router = createBrowserRouter(
  [{
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login/> },
      { path: "/service", element: <Services />},
      { path: "/dashboard", element: <AfterLogin /> },
      { path:"/Learnmore", element: <About /> },
      { path:"/construction", element: <Services /> },
      { path:"/designing", element: <Services /> },
      { path:"/preconstruction", element: <Services /> },
      { path:"/maintenance", element: <Services /> },
      { path:"/renovation", element: <Services /> },
      {path:"/database", element:<UserLoginComponent/> },
      {path:"register", element:<SignUp/>},
      { path:"/login", element:<Login/>},
      { path:"/flats", element:<Flats/>},
      {path:"/forgotpassword", element:<ForgotPasswordPage/>},
      // {path: "/listEmployee", element: <ListEmployee />},
    ],
  }]
);

const App = () => {
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
