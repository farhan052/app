import React from "react";
import { Navigate } from "react-router-dom";

// Profile
import UserProfile from "../pages/Authentication/user-profile";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

// Dashboard
import Dashboard from "../pages/Dashboard/index";
import LeaderBoard from "pages/LeaderBoard";
import Participator from "pages/Participator/participator";
import CryptoIcoLanding from "pages/CryptoIcoLanding";
 

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  // //profile
  { path: "/profile", component: <UserProfile /> },
  { path: "/Leaderboard", component: <LeaderBoard /> },
  { path: "/participator", component: <Participator/> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
];

const publicRoutes = [
  {
    path: "/",
    exact: true,
    component: <Navigate to="login" />,
  },
  { path: "/Landing", component: <CryptoIcoLanding /> },
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },
];

export { authProtectedRoutes, publicRoutes };
