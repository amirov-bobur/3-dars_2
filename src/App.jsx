import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/auth/Register";
import LoginPage from "./pages/auth/Login";
import NavbarComponent from "./components/Navbar";
import NotFound from "./pages/404";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
function App() {
	return (
		<BrowserRouter>
			<NavbarComponent />

			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
