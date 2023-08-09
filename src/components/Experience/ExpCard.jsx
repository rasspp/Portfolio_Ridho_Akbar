/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";
import { ExpCardDatas } from "./../../datas/experience/ExpCardDatas";
// import imageRWD from  "./../../assets/experience"

export function ExpCard({ dataType }) {
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
}
