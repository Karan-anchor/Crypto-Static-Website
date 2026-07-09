import React from "react";
import {
    FaTwitter,
    FaFacebook,
    FaInstagram,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
    const socialLinks = [
        { icon: FaTwitter, color: "#1DA1F2", link: "#" },
        { icon: FaFacebook, color: "#1877F2", link: "#" },
        { icon: FaInstagram, color: "#E4405F", link: "#" },
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-16 pb-8 border-t border-purple-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* GRID CONTAINER */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* SOCIAL LINKS */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Connect With Us
                        </h3>

                        <div className="flex space-x-5">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={index}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-lg transition-transform duration-300 hover:scale-110"
                                        style={{ color: social.color }}
                                    >
                                        <Icon
                                            size={36}
                                            className="hover:drop-shadow-[0_0_12px_rgba(192,132,252,0.5)]"
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Quick Links
                        </h3>

                        <div className="space-y-4">
                            {["Home", "Works", "Mission", "FAQ"].map((link, index) => (
                                <a
                                    href="#"
                                    key={index}
                                    className="block text-lg hover:text-purple-400 transition duration-300 hover:pl-3 border-l-2 border-transparent hover:border-purple-400"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* NEWSLETTER */}
                    <div className="space-y-6 lg:col-span-2">
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Stay Updated
                        </h3>

                        <p className="text-gray-400 text-lg">
                            Subscribe to receive the latest crypto news, updates, and insights.
                        </p>

                        <form className="flex flex-col space-y-4 relative group">
                            <div className="relative w-full">

                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-all duration-300"></div>

                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="relative w-full bg-gray-800/50 backdrop-blur-sm rounded-3xl px-6 py-4 text-lg outline-none focus:ring-2 focus:ring-purple-400 border-2 border-gray-700 hover:border-purple-400 transition-all placeholder:text-gray-500 text-gray-100 pr-24"
                                />

                                <button
                                    type="submit"
                                    className="absolute right-2 top-2 bottom-2 px-5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-all flex items-center justify-center"
                                >
                                    <FiArrowRight className="text-xl text-white" />
                                    <span>Join</span>
                                </button>

                            </div>
                        </form>
                    </div>

                </div>

                {/* Bottom Line */}
                <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-500">
                    © {new Date().getFullYear()} Crypto. All Rights Reserved.
                </div>
                <p className="text-gray-500 text-sm text-center w-full">
                    Designed By{" "}
                    <a
                        href="#"
                        className="text-white hover:text-purple-400 transition-colors duration-300"
                    >
                       Karan Rathor
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;