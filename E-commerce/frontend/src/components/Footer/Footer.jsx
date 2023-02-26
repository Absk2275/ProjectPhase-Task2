import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Video games journalism has gone through a lot of problems in the past decade. We'll spare specific details here, but suffice it to say that several well-known video game websites have suffered major breaches of ethics: collusion, undisclosed financial ties, and cronyism, among other behaviors.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Metro Point, Tadong, Gangtok, East Sikkim,
                            Sikkim, 737102
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 0700 178 1363</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: gamestore@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Gamepad</span>
                    <span className="text">Gaming Console</span>
                    <span className="text">Gaming Keyboards</span>
                    <span className="text">Mobile Gaming Triggers</span>
                    <span className="text">In-Ear Headphones</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
       



        </div>
    );
};

export default Footer;


