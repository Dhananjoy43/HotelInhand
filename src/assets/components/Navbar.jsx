import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Navbar() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    function logout() {
        localStorage.removeItem("currentUser");
        window.location.href = "/hotelinhand/login";
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-warning fixed-top">
                <div className="container-fluid">
                    <a
                        className="navbar-brand"
                        href="/hotelinhand/home"
                        style={{ fontSize: "25px", padding: "15px" }}
                    >
                        HotelInHand
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon">
                            <i className="fa fa-reorder fa-lg"></i>
                        </span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">
                            {user ? (
                                <>
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant="warning"
                                            id="dropdown-basic"
                                        >
                                            <i className="fa fa-user fa-lg"></i>{" "}
                                            {user.name}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="/hotelinhand/profile">
                                                Profile
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                href="#/action-2"
                                                onClick={logout}
                                            >
                                                Log Out
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </>
                            ) : (
                                <>
                                    <a
                                        className="nav-link"
                                        href="/hotelinhand/register"
                                        style={{
                                            fontFamily: "Georgia",
                                            fontSize: "20px",
                                        }}
                                    >
                                        Register
                                    </a>
                                    <a
                                        className="nav-link"
                                        href="/hotelinhand/login"
                                        style={{
                                            fontFamily: "Georgia",
                                            fontSize: "20px",
                                        }}
                                    >
                                        Log in
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
