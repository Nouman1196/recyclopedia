import * as React from "react";
import { useEffect } from "react";
import "react-native-gesture-handler";
import SplashScreen from "react-native-splash-screen";
import Navigation from "./src/navigation/Navigation";
console.reportErrorsAsExceptions = false;


const App = ({ }) => {
  useEffect(() => {
    hideSplashScreen();
  }, []);

  const hideSplashScreen = () => {
    setTimeout(
      () => {
        SplashScreen.hide();
      }, 1500);
  };

  return (
    <Navigation />
  );
}


export default App;
