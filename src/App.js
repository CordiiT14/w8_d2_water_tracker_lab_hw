import { useState } from 'react';
import MainPage from './pages/MainPage';
import { useToggle } from './hooks';

function App() {

  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // }

  let {toggleState, toggle} = useToggle();

  return (
    <div className={!toggleState ? "dark" : "light"}>
      <button onClick={toggle}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
