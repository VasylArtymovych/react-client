import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import UserPage from "pages/UserPage";
import Header from "components/Header";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";

function App() {
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);

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
                <UserPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
