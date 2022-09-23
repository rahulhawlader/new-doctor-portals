import Navber from './pages/Shared/Navber/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import About from './pages/About/About';
import Appoinement from './pages/Appointment/Appointment/Appoinement';
import Reviews from './pages/Reviews/Reviews';
import Login from './pages/Login/Login/Login';
import Contack from './pages/Contack/Contack';
import SignUp from './pages/Login/SignUp';
import RequireAuth from './pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './pages/DashBoard/DashBoard';
import MyAppointment from './pages/DashBoard/MyAppointment';
import MyReview from './pages/DashBoard/MyReview';
import MyHistory from './pages/DashBoard/MyHistory';
import AllUsers from './pages/DashBoard/AllUsers';
import RequireAdmin from './pages/Login/RequireAdmin';

function App() {
  return (
    <div >
      <Navber />
      <div className=''>

        <Routes >
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/appoinment" element={

            <RequireAuth>

              <Appoinement />

            </RequireAuth>

          }></Route>

          <Route path="/dashboard" element={

            <RequireAuth>

              <DashBoard />

            </RequireAuth>

          }>
            <Route index element={<MyAppointment />}></Route>
            <Route path="review" element={<MyReview />}></Route>
            <Route path="history" element={<MyHistory />}></Route>
            <Route path="allusers" element={
              <RequireAdmin>
                <AllUsers />
              </RequireAdmin>

            }></Route>


          </Route>


          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/contack" element={<Contack />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>

        </Routes>

        <ToastContainer />
      </div>

    </div>
  );
}

export default App;
