import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="row justify-content-start">
                    <div className="tab col">
                        <span>Plants</span>
                    </div>
                    <div className="tab col">
                        <span>Planters</span>
                    </div>
                    <div className="tab col">
                        <span>Plant Care</span>
                    </div>
                </div>
                <div className="justify-content-center">
                    <span>Tony's Plant Shop</span>
                </div>
                <div className="row justify-content-end">
                    <ul className="icon col">Homepage Icon</ul>
                    <ul className="icon col">About</ul>
                    <ul className="icon col">Contact</ul>
                    <ul className="icon col">Shopping Cart Icon</ul>
                </div>
            </div>
        </div>

    )
}

export default Navbar