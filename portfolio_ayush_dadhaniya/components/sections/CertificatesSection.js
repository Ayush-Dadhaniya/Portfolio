import React from "react"
import { GlitchText } from "@/components/glitch-text"
import CertificateCarousel from '../ui/CertificateCarousel';

const certificates = [
  {
    name: "Ethical Hacking Essentials (EHE) - EC-Council",
    image: "/ethical_kacking_page-0001.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/QJPHUCXN5LDQ"
  },
  {
    name: "Employee of the month - CEREBULB",
    image: "/Employee of the month_page-0001.jpg",
    link: "/Employee of the month_page-0001.jpg"
  },
  {
    name: "Building Generative AI-Powered Applications with Python - IBM",
    image: "/AI_pow_appl_page-0001.jpg",
    link: "/https://www.coursera.org/account/accomplishments/verify/GJCU8V6NRK7E"
  },
  {
    name:"Algorithmic Thinking (Part 1)",
    image: "/algorithm_think_1_page-0001.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/QSMHADPCAQV5"
  },
  {
    name:"Algorithmic Thinking (Part 2)",
    image: "/algorithm_think_2_page-0001.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/RG5MYHFA37P6"
  },
  {
    name: "Exploratory Data Analysis for Machine Learning",
    image: "/data_analysis_ml_page-0001.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/GPLH4YZXYJVA"
  },
  {
    name: "HTML, CSS, and Javascript for Web Developers",
    image: "/web_dev_page-0001.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/HUYWPXHU5HTX"
  },
  {
    name: "Data Structures",
    image: "/Data_Structure_page-0001.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/BXBDXTZZBL8Q"
  },
  {
    name: "The Structured Query Language (SQL)",
    image: "/SQL_page-0001.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/UPZNJ7HDHJEK"
  },
  {
    name: "C for Everyone: Programming Fundamentals",
    image: "/C_Language_page-0001.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/G7Q2SZLET7EE"
  }
];

export default function CertificatesSection() {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><GlitchText text="Certificates" /></h2>
        </div>
        <CertificateCarousel certificates={certificates} />
      </div>
    </section>
  )
} 