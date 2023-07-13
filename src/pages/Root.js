import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";

const Layout = () => {
  return (
    <div className={classes.content}>
      <MainNavigation />
      <Outlet />
    </div>
  );
};

export default Layout;
