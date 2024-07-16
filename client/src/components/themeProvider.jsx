import React from "react";
import { useSelector } from "react-redux";

function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className="bg-white text-black dark:text-white dark:bg-black">
        {children}
      </div>
    </div>
  );
}

export default ThemeProvider;
