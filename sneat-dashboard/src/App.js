import "./App.css";
import "./index.css";
import MiniDrawer from "./Components/sidebar/MiniDrawer";
import Header from "./Components/header/Header";
import Dashboard_Analytics from "./pages/dashboard/Dashboard_Analytics";
import Routes from "./routes/Routes";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const element = useRoutes(Routes);
  const navigate = useNavigate();
  const location = useLocation();

  // 如果路径是 /login，则只渲染 LoginPage
  if (location.pathname === "/login") {
    return <LoginPage />;
  } else if (location.pathname === "/register") {
    return <Register />;
  } else if (location.pathname === "/forgot-password") {
    return <ForgotPassword />;
  }
  return (
    <div className="App" style={{ backgroundColor: "#f5f5f9" }}>
      <div className="layout-wrapper">
        <MiniDrawer />
        <div
          className="layout-content-wrapper"
          style={{ marginLeft: "20px", marginRight: "20px" }}
        >
          <Header />
          <main className="layout-page-content">{element}</main>
        </div>
      </div>
    </div>
  );
}

export default App;
