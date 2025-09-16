import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

import './footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* About Section */}
                    <div className="md:col-span-2">
                        <div className="logo logo-footer">
                            <span className="code">ASA</span><span className="clubs">associates</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            some words about the club :0 .
                        </p>
                        <div className="flex space-x-4">
                            
                            <a href="https://www.instagram.com/asa_associates23?igsh=MWU2dzNiN2hjMjdydQ==" className="text-gray-400 hover:text-white transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://youtube.com/@asaassociates23?si=C_-u_-EbI-fqnq7H" className="text-gray-400 hover:text-white transition-colors">
                                <FaYoutube size={20} />
                            </a>
                        </div>
                    </div>

                    
                    

                    {/* Contact */}
<div className="md:col-span-1 md:col-start-4 text-left md:text-right">
    <h4 className="text-lg font-semibold mb-4">Contact</h4>
    <ul className="space-y-2 text-gray-400">
        <li className="hover:text-white transition-colors">
            <a href="mailto:jatinkm02@gmail.com">jatinkm02@gmail.com</a>
        </li>
        <li className="hover:text-white transition-colors">
            <a href="tel:+919884797312">+91 9884797312</a>
        </li>
    </ul>
</div>

                </div>

                {/* Google Maps Embed */}
                <div className="mb-8">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.901080350582!2d-73.99686448459388!3d40.730610179329675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQzJzUwLjIiTiA3M8KwNTknNTIuNyJX!5e0!3m2!1sen!2sus!4v1691427046927!5m2!1sen!2sus"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 my-6"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-white text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} kammu&co. All rights reserved.
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-white hover:text-white text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-white hover:text-white text-sm transition-colors">Terms of Service</a>
                        <a href="#" className="text-white hover:text-white text-sm transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
