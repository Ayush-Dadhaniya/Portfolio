import React from 'react';

const Projects = () => {
    return (
        <section className="bg-black text-white flex flex-col items-center p-10 min-h-screen">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
                My <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
            </div>

            <div className="flex flex-wrap justify-center gap-10">
                <div className="bg-[#111] rounded-3xl overflow-hidden w-80 shadow-lg flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border hover:border-pink-500">
                    <img src="/shopThumbnail.jpeg" className="object-cover h-56"></img>
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold mb-2">ChaskoCoffeeStop</h3>
                        <p className="text-gray-400 mb-4 text-sm">
                            Developed an online coffee shop platform with ReactJS frontend and Django backend.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">React</span>
                            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Django</span>
                            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Vercel</span>
                        </div>
                        <a href="https://chasko-coffee-stop.vercel.app" className="text-pink-500 font-semibold text-sm mt-auto hover:underline">
                            View Project →
                        </a>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-10">
                    <div className="bg-[#111] rounded-3xl overflow-hidden w-80 shadow-lg flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border hover:border-pink-500">
                        <img src="/diagnos.png" className="object-cover h-56"></img>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold mb-2">DiagnosAI</h3>
                            <p className="text-gray-400 mb-4 text-sm">
                            Created a disease prediction platform based on a machine learning model trained on Kaggle data.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">React</span>
                                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Django</span>
                                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Machine learning</span>
                                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Vercel</span>
                            </div>
                            <a href="https://diagnos-ai.vercel.app" className="text-pink-500 font-semibold text-sm mt-auto hover:underline">
                                View Project →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
