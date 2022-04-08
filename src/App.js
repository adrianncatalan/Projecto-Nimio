
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { ForgotPassword } from "./pages/forgotPassword/ForgotPassword";
import { HomeAdmin } from "./pages/homeAdmin/HomeAdmin";
import { HomeWorker } from "./pages/homeWorker/HomeWorker";
import { Login } from "./pages/login/Login";
import { NewCustomer } from "./pages/newCustomer/NewCustomer";
import { NewProject } from "./pages/newProject/NewProject";
import { NewTask } from "./pages/newTask/NewTask";
import { NewWorker } from "./pages/newWorker/NewWorker";
import { NotFoundPage } from "./pages/notFoundPage/NotFoundPage";
import { Register } from "./pages/register/Register";
import { Settings } from "./pages/settings/settings";
// import { Calendar } from "react-calendar";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Calendar /> */}
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
