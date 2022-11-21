import { Provider } from "react-redux";
import classes from "./App.module.css";
import Header from "./components/header/Header";
import AppNavigation from "./navigators/AppNavigation";

import store from "./redux/store";

const AppProvider = () => {
  return (
    <div className={classes.body}>
      <Header />
      <AppNavigation />
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppProvider />
    </Provider>
  );
}

export default App;
