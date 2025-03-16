import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
function ThemeComp() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div style={{ backgroundColor: theme =='light' ? 'white':'gray',width:'100vh',padding:'200px' }}>
        <h2 style={{ color: theme =='light' ? 'black':'white' }}>{theme} </h2>
        <button onClick={toggleTheme}>Change Theme</button>
      </div>
    </>
  );
}

export default ThemeComp;
