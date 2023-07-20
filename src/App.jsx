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
                        <Route path="/" exact Component={LandingPage} />
                        <Route path="/home" exact Component={Homescreen} />
                        <Route
                            path="/book/:roomid/:fromdate/:todate"
                            exact
                            Component={Bookingscreen}
                        />
                        <Route path="/login" exact Component={Loginscreen} />
                        <Route
                            path="/register"
                            exact
                            Component={Registerscreen}
                        />
                        <Route path="/admin" exact Component={Adminscreen} />
                        <Route
                            path="/profile"
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
