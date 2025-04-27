'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
const certificateData = [
  {
    title: "C for Everyone: programming Fundamentals",
    issuer: "UC Santa Cruz",
    description: "Basic knowledge of C language.",
    date: "Completed: February 2022",
    link: "https://www.coursera.org/account/accomplishments/verify/G7Q2SZLET7EE",
    image: "/C_Language_page-0001.jpg",
  },
  {
    title: "The Structured Query Language (SQL)",
    issuer: "University of Colorado Boulder",
    description: "Learned how to use databases and its feature.",
    date: "Completed: May 2022",
    link: "https://www.coursera.org/account/accomplishments/verify/UPZNJ7HDHJEK",
    image: "/SQL_page-0001.jpg",
  },
  {
    title: "Data Structures",
    issuer: "UC San Diego",
    description: "Learned Data structures with C language.",
    date: "Completed: August 2022",
    link: "https://www.coursera.org/account/accomplishments/verify/BXBDXTZZBL8Q",
    image: "/Data_Structure_page-0001.jpg",
  },
  {
    title: "HTML, CSS, and Javascript for Web Developers",
    issuer: "Johns Hopkins University",
    description: "Basic knowledge of HTML, CSS and JavaScript.",
    date: "Completed: January 2023",
    link: "https://www.coursera.org/account/accomplishments/verify/HUYWPXHU5HTX",
    image: "/web_dev_page-0001.jpg",
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    issuer: "IBM",
    description: "Learned how to do data analysis.",
    date: "Completed: July 2023",
    link: "https://www.coursera.org/account/accomplishments/verify/GPLH4YZXYJVA",
    image: "/data_analysis_ml_page-0001.jpg",
  },
  {
    title: "Algorithmic Thinking (Part 1)",
    issuer: "Rice University",
    description: "Go through the basics of algorithmic thinking.",
    date: "Completed: January 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/QSMHADPCAQV5",
    image: "/algorithm_think_1_page-0001.jpg",
  },
  {
    title: "Algorithmic Thinking (Part 2)",
    issuer: "Rice University",
    description: "Go through the basics of algorithmic thinking.",
    date: "Completed: January 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/RG5MYHFA37P6",
    image: "/algorithm_think_2_page-0001.jpg",
  },
  {
    title: "Building Generative AI-Powered Applications with Python",
    issuer: "IBM",
    description: "Learned how to create generative apps using AI.",
    date: "Completed: October 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/GJCU8V6NRK7E",
    image: "/AI_pow_appl_page-0001.jpg",
  },
  {
    title: "Employee of the Month",
    issuer: "CEREBULB",
    description: "Got Employee of the month for the extraordinary performance.",
    date: "Completed: August 2024",
    link: "https://drive.google.com/file/d/1kcBM89fBt_5vr0QzHDMXh-4pwkjGjTuP/view",
    image: "/Employee of the month_page-0001.jpg",
  },
  {
    title: "Ethical Hacking Essentials (EHE)",
    issuer: "EC-Council",
    description: "Learned the basics of Ethical Hacking.",
    date: "Completed: January 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/QJPHUCXN5LDQ",
    image: "/ethical_kacking_page-0001.jpg",
  },
];

const Certificates = () => {
  return (
    <section className="bg-black text-white flex flex-col items-center p-10 min-h-screen">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
        My <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Certificates</span>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 2500, disableOnInteraction: false }} // Autoplay every 1 second
        loop={true} // Loop the carousel
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-6xl"
      >
        {certificateData.map((certificate, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col p-5"
              style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                height: '450px', // Set fixed height for each card
              }}
            >
              <div
                className="relative flex justify-center items-center bg-indigo-500/20 h-48 mb-5 rounded-xl overflow-hidden"
                style={{
                  transition: 'transform 0.3s ease',
                  width: '100%',
                }}
              >
                <Image
                  src={certificate.image}
                  alt="Certificate"
                  width={500}  // Set width according to your design
                  height={200} // Set a consistent height for images
                  style={{ objectFit: 'contain' }} // Ensure images maintain aspect ratio
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
                <div className="text-blue-400 text-sm font-semibold mb-3">{certificate.issuer}</div>
                <p className="text-sm text-gray-400 flex-grow">{certificate.description}</p>
                <div className="flex flex-wrap items-center justify-between mt-5">
                  <div className="text-xs text-gray-400">{certificate.date}</div>
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 text-sm font-semibold hover:underline"
                  >
                    View → 
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Certificates;
