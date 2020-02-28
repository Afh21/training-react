import React, { useContext } from "react";
import { List } from "antd";
import { ThemeContext } from "../context/ThemeContext";

const data = [
   "Racing car sprays burning fuel into crowd.",
   "Japanese princess to wed commoner.",
   "Australian walks 100km after outback crash.",
   "Man charged over missing wedding girl.",
   "Los Angeles battles huge wildfires."
];

const BookList = () => {
   const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
   const theme = isLightTheme ? lightTheme : darkTheme;

   return (
      <List
         size="large"
         header={
            <div>
               <b> Book's List </b>
            </div>
         }
         footer={<div></div>}
         bordered
         dataSource={data}
         renderItem={item => <List.Item>{item}</List.Item>}
         style={{ background: `${theme.bg}` }}
      />
   );
};

export default BookList;
