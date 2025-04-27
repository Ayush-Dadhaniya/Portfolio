import { Space } from 'lucide-react';
import React from 'react';

const Experience = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-wrap flex-col items-center p-10">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
        My <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Experience</span>
      </div>
      <div>
        {/* Timeline Line */}
        {/* <div className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-pink-500 to-indigo-500 w-1 h-full top-0 z-0"></div> */}

        {/* Experience Card */}
        <div className="flex flex-col sm:flex-row justify-start sm:items-start mb-20 relative z-10">
          <div className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center">
            <span className="text-black font-bold text-lg">1</span>
          </div>
          <div className="ml-4 sm:ml-8 bg-gradient-to-r from-pink-500 to-indigo-500 p-8 rounded-lg shadow-lg w-full sm:w-2/3 transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-4">System Engineer</h3>
            <h3 className="text-2xl sm:text-3xl text-black font-sans font-bold mb-1">CEREBULB</h3>
            <div className="mb-4">
              <span className="text-black font-bold font-sans text-lg sm:text-xl">Nov 2023 - Dec 2024</span>
            </div>
            <p className="text-[14px] sm:text-base font-sans">
              • Contributed to projects for a leading organization ranked 3rd in India’s power generation and distribution sector.
              <br />
              • Developed real-time data collection systems and dashboards using IoT sensors.
              <br />
              • Designed solutions that improved management efficiency by 15% and reduced maintenance delays by 20%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
