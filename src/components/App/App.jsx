import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import UserPage from "pages/UserPage";
import Header from "components/Header";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:3030");

function App() {
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);

  useEffect(() => {
    socket.on("sendNotify", (notify) => {
      toast.success(notify.msg);
      console.log(notify);
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={
              <PublicRoute
                redirectPath="/user"
                isLoggedIn={isLoggedIn}
                restricted
              >
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute
                redirectPath="/user"
                isLoggedIn={isLoggedIn}
                restricted
              >
                <LoginPage />
              </PublicRoute>
            }
          />

          <Route
            path="/user"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn} redirectPath="/login">
                <UserPage socket={socket} />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
