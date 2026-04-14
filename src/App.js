import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
    return (_jsxs("div", { className: "relative min-h-screen overflow-hidden flex flex-col", children: [_jsx(Navbar, {}), _jsxs("main", { className: "relative z-10 flex-grow", children: [_jsx(Hero, {}), _jsx(About, {}), _jsx(Projects, {}), _jsx(Experience, {}), _jsx(Contact, {})] }), _jsx(Footer, {})] }));
}
export default App;
