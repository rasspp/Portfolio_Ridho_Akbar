/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";

/* eslint-disable react/prop-types */
export const ExpCard = ({ type }) => {
   const artatixData = {
      title: "Artatix",
      date: "Juny - 2022 / October - 2022",
      achievements: [
         {
            first: "Work with multidisciplinary teams of UI/UX, QA, Backend, and Frontend to develop innovative solutions.",
            second: "Fixed bugs in Frontend to improve user experience.",
            third: "Implementing the filter design from UI/UX and making it responsive, so that users can easily perform searches on the website.",
            fourth: "Creating email notifications containing information about purchased products using HTML and CSS.",
         },
      ],
      goto: "https://artatix.co.id/",
   };

   const damatizaData = {
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
   };

   const formalEducationData = {
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
   };

   const informalEducationData = {
      title: "Informal Education",
      date: "",
      exp: [
         {
            first: (
               <li>
                  Free Code Camp :
                  <ul>
                     <li className="not-line d-flex justify-content-between">
                        <div>
                           <span className="d-md-none">-</span> Responsive Web Design
                        </div>
                        <a href="#">
                           <BsFillFileEarmarkTextFill />
                        </a>
                     </li>
                  </ul>
               </li>
            ),
            second: <li>Hackker Rank</li>,
         },
      ],
      goto: "https://damatiza.com",
   };

   const [types, setTypes] = useState(
      type === "artatix"
         ? artatixData
         : type === "damatiza"
         ? damatizaData
         : type === "formal education"
         ? formalEducationData
         : type === "informal education"
         ? informalEducationData
         : {}
   );

   return (
      <Col xs={12} md={12} xl={5} className="container-card">
         <div className="card">
            {type === "artatix" || type === "damatiza"
               ? types.achievements.map((item, index) => (
                    <div key={item}>
                       <h2>{types.title}</h2>
                       <p className="date">{types.date}</p>
                       <div className="card-content">
                          <ul>
                             <li>{item.first}</li>
                             <li>{item.second}</li>
                             <li>{item.third}</li>
                             <li>{item.fourth}</li>
                             <li>
                                <a href={types.goto} target="_blank" rel="noreferrer">
                                   Visit the website.
                                </a>
                             </li>
                          </ul>
                       </div>
                    </div>
                 ))
               : types.exp.map((item, index) => (
                    <div key={item}>
                       <h2 className="education">{types.title}</h2>
                       <p className="date"></p>
                       <div className="card-content">
                          <ul type="1">
                             {item.first}
                             {item.second}
                             {item.third}
                             {item.fourth}
                             {item.fiveth}
                             {item.sixth}
                          </ul>
                       </div>
                    </div>
                 ))}
         </div>
      </Col>
   );
};
