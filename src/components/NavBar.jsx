import React, { useContext } from "react";
import { Menu, Icon } from "antd";
import { ThemeContext } from "../context/ThemeContext";

const NavBar = () => {
   const { isLightTheme } = useContext(ThemeContext);
   console.log("theme: ", isLightTheme);

   return (
      <>
         <Menu onClick={() => {}} selectedKeys={[""]} mode="horizontal">
            <Menu.Item key="mail">
               <Icon type="mail" />
               Navigation One
            </Menu.Item>
            <Menu.Item key="lazy">
               <Icon type="save" />
               Lazy
            </Menu.Item>
         </Menu>
      </>
   );
};

export default NavBar;
