import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tasks from "./pages/Tasks";
import Lists from "./pages/Lists";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/lists" element={<Lists />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
