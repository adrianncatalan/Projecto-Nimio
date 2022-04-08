import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import NotFoundPage from "./pages/notFoundPage/notFoundPage";
import Register from "./pages/register/register";
import HomeAdmin from "./pages/homeAdmin/homeAdmin";
import Settings from "./pages/settings/settings";
import Footer from "./components/footer/footer";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";
import HomeWorker from "./pages/homeWorker/homeWorker";
import NewTask from "./pages/newTask/newTask";
import NewCustomer from "./pages/newCustomer/newCustomer";
import NewProject from "./pages/newProject/newProject";
import NewWorker from "./pages/newWorker/newWorker";
import { Calendar } from "react-calendar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Calendar />
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/homeAdmin' element={<HomeAdmin />}></Route>
          <Route path='/newCustomer' element={<NewCustomer />}></Route>
          <Route path='/newProject' element={<NewProject />}></Route>
          <Route path='/newWorker' element={<NewWorker />}></Route>
          <Route path='/homeWorker' element={<HomeWorker />}></Route>
          <Route path='/newTask' element={<NewTask />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
