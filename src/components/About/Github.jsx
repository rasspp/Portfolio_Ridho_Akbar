import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

function Github() {
   const selectLastHalfYear = (contributions) => {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      const shownMonths = 6;

      return contributions.filter((activity) => {
         const date = new Date(activity.date);
         const monthOfDay = date.getMonth();

         return date.getFullYear() === currentYear && monthOfDay > currentMonth - shownMonths && monthOfDay <= currentMonth;
      });
   };

   return (
      <Row className="hover-area">
         <Col md={6} className="github-heading">
            <h1 className="project-heading ">
               Contributions
               <br /> in <strong className="strong-animation"> Github</strong>
            </h1>
         </Col>

         <Col md={6}>
            <GitHubCalendar
               username="rasspp"
               blockSize={20}
               blockMargin={5}
               color="green"
               fontSize={16}
               responsive={true}
               blockRadius={5}
               transformData={selectLastHalfYear}
            />
         </Col>
      </Row>
   );
}

export default Github;
