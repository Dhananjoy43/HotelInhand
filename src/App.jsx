import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar.jsx";
import Adminscreen from "./assets/screens/Adminscreen.jsx";
import Homescreen from "./assets/screens/Homescreen.jsx";
import Bookingscreen from "./assets/screens/Bookingscreen.jsx";
import Loginscreen from "./assets/screens/Loginscreen.jsx";
import Registerscreen from "./assets/screens/Registerscreen.jsx";
import Profilescreen from "./assets/screens/Profilescreen.jsx";
import LandingPage from "./assets/screens/LandingPage.jsx";

function App() {
    return (
        <div className="App">
            <Navbar />
            <React.StrictMode>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/hotelinhand/"
                            exact
                            Component={LandingPage}
                        />
                        <Route
                            path="/hotelinhand/home"
                            exact
                            Component={Homescreen}
                        />
                        <Route
                            path="/hotelinhand/book/:roomid/:fromdate/:todate"
                            exact
                            Component={Bookingscreen}
                        />
                        <Route
                            path="/hotelinhand/login"
                            exact
                            Component={Loginscreen}
                        />
                        <Route
                            path="/hotelinhand/register"
                            exact
                            Component={Registerscreen}
                        />
                        <Route
                            path="/hotelinhand/admin"
                            exact
                            Component={Adminscreen}
                        />
                        <Route
                            path="/hotelinhand/profile"
                            exact
                            Component={Profilescreen}
                        />
                    </Routes>
                </BrowserRouter>
            </React.StrictMode>
        </div>
    );
}

export default App;
