import React from 'react';

const Education = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-10">
      
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
        My <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Education</span>
      </div>

      <div className="relative w-full max-w-3xl">
        
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-500"></div>

        <div className="mb-20 flex flex-col items-center relative">
          <div className="w-4 h-4 bg-pink-500 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-2"></div>

          <div className="bg-gray-800 p-6 rounded-lg mt-8 w-[90%] sm:w-2/3 text-center 
            transition-all duration-300 border border-transparent hover:border-pink-500 hover:-translate-y-2 hover:shadow-lg">
            <h2 className="text-sm text-white mb-1">2021 - 2025</h2>
            <h1 className="text-lg sm:text-2xl font-bold mb-2">Bachelor in Information Technology</h1>
            <p className="text-xl text-cyan-600 font-bold mb-1">L.J.I.E.T</p>
            <p className="text-lg mb-2">CGPA: 8.8/10</p>
            <p className="text-sm italic text-gray-300">"Learned how to solve real-world problems using technology."</p>
          </div>
        </div>

        <div className="mb-20 flex flex-col items-center relative">
          <div className="w-4 h-4 bg-purple-500 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-2"></div>

          <div className="bg-gray-800 p-6 rounded-lg mt-8 w-[90%] sm:w-2/3 text-center 
            transition-all duration-300 border border-transparent hover:border-pink-500 hover:-translate-y-2 hover:shadow-lg">
            <h2 className="text-sm text-white mb-1">2020-2021</h2>
            <h1 className="text-lg sm:text-2xl font-bold mb-2">Higher Secondary Education</h1>
            <p className="text-xl text-cyan-600 font-bold mb-1">Devasya International Public School</p>
            <p className="text-lg mb-2">Percentage: 84%</p>
            <p className="text-sm italic text-gray-300">"Basic foundation for Maths and Science was created."</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Education;
