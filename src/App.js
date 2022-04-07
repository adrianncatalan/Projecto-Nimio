import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import NotFoundPage from "./pages/notFoundPage/notFoundPage";
import Register from "./pages/register/register";
import HomeAdmin from "./pages/homeAdmin/homeAdmin";
import Settings from "./pages/settings/settings";
import Footer from "./components/footer/footer";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";
import HomeWorker from "./pages/homeWorker/homeWorker";
// import Calendar from 'react-calendar';


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
          <Route path='/homeWorker' element={<HomeWorker />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
