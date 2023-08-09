/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { BsArrow90DegLeft, BsAwardFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { ExpCardDatas } from "./../../datas/experience/ExpCardDatas";
// import imageRWD from  "./../../assets/experience"

/* eslint-disable react/prop-types */

export function ExpCard({ dataType }) {
   // const [selectedData, setSelectedData] = useState(
   //    dataType === "artatix"
   //       ? ExpCardDatas.artatixData
   //       : dataType === "damatiza"
   //       ? ExpCardDatas.damatizaData
   //       : dataType === "formal education"
   //       ? ExpCardDatas.formalEducationData
   //       : dataType === "informal education"
   //       ? ExpCardDatas.informalEducationData
   //       : {}
   // );

   console.log(ExpCardDatas[dataType]);
   const selectedData = ExpCardDatas[dataType];

   return (
      <Col xs={12} md={12} xl={5} className="container-card">
         <div className="card">
            {selectedData.achievements ? (
               selectedData.achievements.map((item, index) => (
                  <div key={index}>
                     <h2>{selectedData.title}</h2>
                     <p className="date">{selectedData.date}</p>
                     <div className="card-content">
                        <ul>
                           <li>{item.first}</li>
                           <li>{item.second}</li>
                           <li>{item.third}</li>
                           <li>{item.fourth}</li>
                           <li>
                              <a href={selectedData.goto} target="_blank" rel="noreferrer">
                                 Visit the website.
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               ))
            ) : (
               <div>
                  <h2 className="education">{selectedData.title}</h2>
                  <div className="card-content">
                     <ul type="1">
                        {selectedData.exp.map((item, index) => (
                           <li key={index}>{item}</li>
                        ))}
                     </ul>
                  </div>
               </div>
            )}
         </div>
      </Col>
   );

   // return (
   //    <Col xs={12} md={12} xl={5} className="container-card">
   //       <div className="card">
   //          {dataType === "artatix" || dataType === "damatiza"
   //             ? selectedData.achievements.map((item, index) => (
   //                  <div key={item}>
   //                     <h2>{selectedData.title}</h2>
   //                     <p className="date">{selectedData.date}</p>
   //                     <div className="card-content">
   //                        <ul>
   //                           <li>{item.first}</li>
   //                           <li>{item.second}</li>
   //                           <li>{item.third}</li>
   //                           <li>{item.fourth}</li>
   //                           <li>
   //                              <a href={selectedData.goto} target="_blank" rel="noreferrer">
   //                                 Visit the website.
   //                              </a>
   //                           </li>
   //                        </ul>
   //                     </div>
   //                  </div>
   //               ))
   //             : selectedData.exp.map((item, index) => (
   //                  <div key={item}>
   //                     <h2 className="education">{selectedData.title}</h2>
   //                     <p className="date"></p>
   //                     <div className="card-content">
   //                        <ul dataType="1">
   //                           {item.first}
   //                           {item.second}
   //                           {item.third}
   //                           {item.fourth}
   //                           {item.fiveth}
   //                           {item.sixth}
   //                        </ul>
   //                     </div>
   //                  </div>
   //               ))}
   //       </div>
   //    </Col>
   // );
}
