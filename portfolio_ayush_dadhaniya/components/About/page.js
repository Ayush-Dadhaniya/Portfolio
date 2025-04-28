import React from "react"
const About = () => {
    return (
        <section className="mt-7 flex justify-between bg-gradient-to-br font-serif flex-wrap from-[#000080] via-black to-red-400 h-auto mx-5 p-4 text-white flex-row gap-10 relative overflow-hidden">
            <div className="flex pt-10 pl-5 flex-col font-stretch-extra-expanded flex-wrap w-full md:w-1/2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">Hey! I am</h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Ayush Dadhaniya</h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                    <span className="text-bold text-3xl">"</span>I"m an IT student passionate about building software, crafting machine learning solutions, and designing for the web. I"ve contributed to real-world projects for one of India"s leading power generation and distribution companies. Now, I"m excited to bring my skills, creativity, and energy into a software development role — and keep leveling up along the way.<span className="text-bold text-3xl">"</span>
                </p>
                {/* <button className="bg-pink-500 h-10 w-30 rounded-3xl font-bold font-[Poppins] duration-500 ease-in-out hover:scale-105 hover:shadow-[0_20px_60px_-10px_rgba(255,0,128,0.7),0_10px_40px_-15px_rgba(128,0,255,0.6),0_5px_30px_-20px_rgba(255,0,0,0.5)] text-white mt-5 md:mt-10">Let"s connect</button> */}
            </div>
            <div className="flex m-5 gap-3 relative">
                <img className="w-full max-w-[400px] rounded-[30px] border-[4px] border-white/10 duration-900 ease-in-out hover:scale-105 hover:border-white/30 hover:shadow-[0_25px_70px_-10px_rgba(255,0,128,0.8),0_15px_50px_-15px_rgba(128,0,255,0.7),0_8px_40px_-20px_rgba(255,0,0,0.6)]" src="/image.png" alt="Ayush Dadhaniya" />
                <div className="absolute top-[5%] right-[-20px] bg-black rounded-full p-2.5 text-[24px] cursor-pointer z-20 transition-transform duration-300 ease-in-out hover:scale-125 hover:-translate-y-1 shadow-[0_10px_30px_0_rgba(236,72,153,0.6),0_10px_60px_0_rgba(168,85,247,0.5)] group" style={{ animation: "float 3s ease-in-out infinite" }}>
                    ✨
                    <div className="absolute top-[100%] right-0 bg-black text-[9px] text-white opacity-0 group-hover:opacity-100 p-2 rounded-lg whitespace-nowrap transition-opacity duration-300">
                        Making design with a sprinkle of magic.
                    </div>
                </div>
                <div className="absolute top-[25%] left-[-20px] bg-black rounded-full p-2.5 text-[24px] cursor-pointer z-20 transition-transform duration-300 ease-in-out hover:scale-125 hover:-translate-y-1 shadow-[0_10px_30px_0_rgba(236,72,153,0.6),0_10px_60px_0_rgba(168,85,247,0.5)] group" style={{ animation: "float 4s ease-in-out infinite" }}>
                    💻
                    <div className="absolute top-[100%] left-0 bg-black text-[9px] text-white opacity-0 group-hover:opacity-100 p-2 rounded-lg whitespace-nowrap transition-opacity duration-300">
                        All you need is a laptop and a dream. Let"s code together!
                    </div>
                </div>
                <div className="absolute top-[80%] right-[-20px] bg-black rounded-full p-2.5 text-[24px] cursor-pointer z-20 transition-transform duration-300 ease-in-out hover:scale-125 hover:-translate-y-1 shadow-[0_10px_30px_0_rgba(236,72,153,0.6),0_10px_60px_0_rgba(168,85,247,0.5)] group" style={{ animation: "float 4.5s ease-in-out infinite" }}>
                    🚀
                    <div className="absolute top-[100%] right-0 bg-black text-[9px] text-white opacity-0 group-hover:opacity-100 p-2 rounded-lg whitespace-nowrap transition-opacity duration-300">
                        Always reaching new heights.
                    </div>
                </div>
                <div className="absolute top-[65%] left-[-20px] bg-black rounded-full p-2.5 text-[24px] cursor-pointer z-20 transition-transform duration-300 ease-in-out hover:scale-125 hover:-translate-y-1 shadow-[0_10px_30px_0_rgba(236,72,153,0.6),0_10px_60px_0_rgba(168,85,247,0.5)] group" style={{ animation: "float 3.5s ease-in-out infinite" }}>
                    🎨
                    <div className="absolute top-[100%] left-0 bg-black text-[9px] text-white opacity-0 group-hover:opacity-100 p-2 rounded-lg whitespace-nowrap transition-opacity duration-300">
                        Creative thinker with a passion for design.
                    </div>
                </div>
            </div>
            <style>
                {`
                    @keyframes float {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-15px); }
                    }
                `}
            </style>
        </section>
    )
}

export default About
