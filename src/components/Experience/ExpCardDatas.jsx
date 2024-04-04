/* eslint-disable no-unused-vars */
import { BsArrow90DegLeft, BsAwardFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { ModalCertificate } from "./ModalCertificate";

export const ExpCardDatas = {
   artatixData: {
      title: "Artatix",
      date: "Jun 2022 - Oct 2022",
      role: "Front-end / Team ",
      techIcons: ["Bootstrap", "PHP", "Javascript", "Figma"],
      achievements: [
         {
            first: "This website is a ticket booking application built using the Laravel framework.",
            second: "I was recruited as a freelancer for 3 months to update an existing website with the latest design.",
            third: "My job here is to slice design from Figma to code and optimize old code to adhere to best practices on the frontend.",
            fourth:
               "I also implemented the design for email notifications, where I had to use tricks to ensure its perfection and alignment with design the existing ones.",
         },
      ],
      goto: "https://artatix.co.id/",
   },

   damatizaData: {
      title: "Damatiza",
      date: "Oct 2022 - Dec 2022",
      role: "Front-end / Team",
      techIcons: ["Bootstrap", "PHP", "Javascript", "Figma"],
      achievements: [
         {
            first: "This website is a landing page for a product built using the Laravel framework.",
            second: "This website was built from scratch, and I handled the slicing of the design for its frontend.",
            third: "Here, I was also recruited for 3 months with the same person until the development was completed.",
            fourth: "I also helped the backend team integrate the frontend code to ensure smooth development because I have a high sense of cooperation.",
         },
      ],
      goto: "privacy",
   },

   bookingAppData: {
      title: "Booking App",
      date: "Dec 2023 - Jan 2024",
      role: "Full-stack / Individual",
      techIcons: ["ReactJs", "ExpressJs", "NodeJs", "MongoDb", "TailwindCss", "ViteJs"],
      achievements: [
         {
            first: "",
            second: "",
            third: "",
            fourth: "",
         },
      ],
      goto: "privacy",
   },

   formalEducationData: {
      title: "Formal Education",
      date: "",
      exp: [
         <div className="formal-edu" key={"sd"}>
            <div>
               <p> SDN 242 Palembang </p>
               <p>( 2009 - 2015 )</p>
            </div>
         </div>,
         <div className="formal-edu" key={"smp"}>
            <div>
               <p>SMPN 52 Palembang</p>
               <p>( 2015 - 2018 )</p>
            </div>
         </div>,
         <div className="formal-edu" key={"smk"}>
            <div>
               <p>SMK Utama Bakti Palembang</p>
               <p>( 2018 - 2021 )</p>
            </div>
         </div>,
      ],
      goto: "https://damatiza.com",
   },

   informalEducationData: {
      title: "Informal Education",
      date: "",
      exp: [
         <div className="informal-edu" key="certificate">
            <p className="sub-title">Certificate :</p>
            <ul>
               <li className="not-line">
                  <div>
                     <BsArrow90DegLeft />
                     Digitalent Website Development
                  </div>

                  <ModalCertificate />
               </li>
            </ul>
         </div>,

         <div className="informal-edu" key="freeCodeCamp">
            <p className="sub-title">Free Code Camp :</p>
            <ul>
               <li className="not-line">
                  <div>
                     <BsArrow90DegLeft />
                     Responsive Web Design
                  </div>

                  <ModalCertificate />

                  <a href="https://rasspp.github.io/freecodecamp-responsivewebdesign.github.io/" className="demo" target="_blank" rel="noreferrer">
                     <CgWebsite />
                  </a>
               </li>
            </ul>
         </div>,
         <div key="hackerrank">Hackker Rank</div>,
      ],
      goto: "https://damatiza.com",
   },
};
