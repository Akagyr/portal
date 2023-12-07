import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { store } from "./redux/store";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <MainPage />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
