import { useState } from "react";
import "./App.css";
import Dashboard from "./components/dashboard";
import ThemeContext from "./context/theme-context";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Dashboard />
    </ThemeContext.Provider>
  );
}

export default App;
