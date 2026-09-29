import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import MainRouter from "./MainRouter.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <MainRouter />

      <footer>
        <p>© 2026 Alexis Gabriel Morales. All rights reserved.</p>
      </footer>
    </BrowserRouter>
  );
}