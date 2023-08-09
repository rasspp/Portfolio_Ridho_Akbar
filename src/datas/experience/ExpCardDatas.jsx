/* eslint-disable no-unused-vars */
import { BsArrow90DegLeft, BsAwardFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

export const ExpCardDatas = {
   artatixData: {
      title: "Artatix",
      date: "June - 2022 / October - 2022",
      achievements: [
         {
            first: "Work with multidisciplinary teams of UI/UX, QA, Backend, and Frontend to develop innovative solutions.",
            second: "Fixed bugs in Frontend to improve user experience.",
            third: "Implementing the filter design from UI/UX and making it responsive, so that users can easily perform searches on the website.",
            fourth: "Creating email notifications containing information about purchased products using HTML and CSS.",
         },
      ],
      goto: "https://artatix.co.id/",
   },

   damatizaData: {
      title: "Damatiza",
      date: "October - 2022 / December - 2022",
      achievements: [
         {
            first: "Working together with the same multidisciplinary team.",
            second: "Slicing design from figma to frontend to 100% similarity.",
            third: "Contribute from start to finish on this project",
            fourth: "Assisted in creating looping cards with a backend (PHP) to display dynamic content on the website.",
         },
      ],
      goto: "https://damatiza.com",
   },

   formalEducationData: {
      title: "Formal Education",
      exp: [
         {
            first: (
               <li className="formal-edu">
                  <div>
                     <p> SDN 242 Palembang </p>
                     <p>( 2009 - 2015 )</p>
                  </div>
               </li>
            ),
            second: (
               <li className="formal-edu">
                  <div>
                     <p>SMPN 52 Palembang</p>
                     <p>( 2015 - 2018 )</p>
                  </div>
               </li>
            ),
            third: (
               <li className="formal-edu">
                  <div>
                     <p>SMK Utama Bakti Palembang</p>
                     <p>( 2018 - 2021 )</p>
                  </div>
               </li>
            ),
         },
      ],
      goto: "https://damatiza.com",
   },

   informalEducationData: {
      title: "Informal Education",
      date: "",
      exp: [
         {
            first: (
               <li className="informal-edu">
                  Free Code Camp :
                  <ul>
                     <li className="not-line ">
                        <div>
                           <BsArrow90DegLeft />
                           Responsive Web Design
                        </div>
                        <button className="certificate">
                           <BsAwardFill />
                        </button>
                        <a href="https://rasspp.github.io/freecodecamp-responsivewebdesign.github.io/" className="demo" target="_blank" rel="noreferrer">
                           <CgWebsite />
                        </a>
                        {/* <img  src={imageRWD} alt="Image Responsive Web Design Certificate" /> */}
                        <img src="#" alt="Image Responsive Web Design Certificate" className="certificateView" />
                     </li>
                  </ul>
               </li>
            ),
            second: <li>Hackker Rank</li>,
         },
      ],
      goto: "https://damatiza.com",
   },
};
// export default { artatixData, damatizaData, formalEducationData, informalEducationData };
