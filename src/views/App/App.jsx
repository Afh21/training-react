import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import BookList from "../../components/BookList";
import { ThemeContext } from "../../context/ThemeContext";

function App() {
   const [isLightTheme] = useState(true);
   const [lightTheme] = useState({
      syntax: "#555",
      ui: "#ddd",
      bg: "#eee"
   });
   const [darkTheme] = useState({
      syntax: "#ddd",
      ui: "#333",
      bg: "#555"
   });

   return (
      <div className="App">
         <ThemeContext.Provider
            value={{
               isLightTheme,
               lightTheme,
               darkTheme
            }}
         >
            <NavBar />
            <BookList />
         </ThemeContext.Provider>
      </div>
   );
}

export default App;
