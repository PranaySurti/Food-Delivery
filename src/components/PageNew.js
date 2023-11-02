import { Link } from "react-router-dom";

export default function PageNew() {
  const currentDate = new Date(); // Represents the current date and time
  const formattedDateTime = currentDate.toLocaleString();

  return (
    <>
      <center>
        <h1>Transaction has been completed</h1>
        <p>Transaction Id: JBISWB723BJK</p>
        <p>Current Date and Time: {formattedDateTime}</p>
        <br/><br/>
        <Link to="/">Go to Home Page</Link>
      </center>
    </>
  );
}
