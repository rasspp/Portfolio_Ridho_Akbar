/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";

function PortfolioCards({ title, imgPath, description, ghUrl, demo, demoUrl }) {
   const [isButtonClicked, setButtonClicked] = useState(false);
   const [isAnimationActive, setAnimationActive] = useState(false);

   const handleClick = () => {
      if (!isButtonClicked) {
         setButtonClicked(true);
      } else if (!isAnimationActive) {
         setAnimationActive(true);
         setButtonClicked(true);
      } else {
         setAnimationActive(false);
      }
   };

   return (
      <Card className="project-card-view">
         <Card.Body>
            <Card.Title className="title">{title}</Card.Title>
            <hr />
            <div className="project-card-content">
               <div>
                  <Card.Img className="image" variant="top" src={imgPath} alt="card-img" loading="lazy" />
                  <Card.Text className={`desc ${isAnimationActive ? "out" : isButtonClicked ? "in" : ""} `}>{description}</Card.Text>
               </div>
            </div>
            <div className="project-link">
               <a className="github" href={ghUrl} target="_blank" rel="noreferrer">
                  <BsGithub />
               </a>
               {"\n"}
               {"\n"}

               {!demo && demoUrl && (
                  <a className="demo" href={demoUrl} target="_blank" rel="noreferrer">
                     <CgWebsite />
                  </a>
               )}
            </div>
            <div className={`project-info ${isAnimationActive ? "out" : isButtonClicked ? "in" : ""}`} onClick={handleClick}>
               i
            </div>
         </Card.Body>
      </Card>
   );
}
export default PortfolioCards;
