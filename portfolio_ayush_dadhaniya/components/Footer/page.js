import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white p-6 flex flex-col items-center">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
            <div className="my-4">
                <hr className="border-t-1 border-gray-500 w-300" />
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
                Contact's <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">& Social links</span>
            </div>

            <div className="space-y-2">
                {/* LinkedIn and GitHub Icons Side by Side */}
                <div className="flex space-x-6 mb-4">
                    <a 
                        href="https://www.linkedin.com/in/ayushdadhaniya" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 text-3xl"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a 
                        href="https://github.com/Ayush-Dadhaniya" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 text-3xl"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </div>

                {/* Email */}
                <div>
                    <a 
                        href="mailto:ayushdadhaniya05@gmail.com" 
                        className="text-green-500 hover:underline"
                    >
                        Email: ayushdadhaniya05@gmail.com
                    </a>
                </div>
                
                {/* Contact Number */}
                <div>
                    <span className="text-white">Contact: +91 7573074545</span>
                </div>

                {/* Location */}
                <div>
                    <span className="text-white">Location: Ahmedabad, Gujarat</span>
                </div>
            </div>

            {/* Thin centered horizontal line */}
            <div className="mt-6 text-sm">
                <p>&copy; 2025 Ayush Dadhaniya. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
