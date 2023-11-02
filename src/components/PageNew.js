import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function PageNew() {
  const currentDate = new Date(); // Represents the current date and time
  const formattedDateTime = currentDate.toLocaleString();

  const rName = useRef();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");

  const hName = (event) => {
    setName(event.target.value);
  };
  const hPhone = (event) => {
    setPhone(event.target.value);
  };
  const hMail = (event) => {
    setMail(event.target.value);
  };

  const save = (event) => {
    event.preventDefault();
    let data = { name: name, phone: phone, mail: mail };
    emailjs
      .send("service_f9mlxe5", "template_yistcoe", data, "LRJLiZUKC5pBoTYvK")
      .then((res) => {
        alert("we will get back to u soon");
        setName("");
        setMail("");
        setPhone("");
        rName.current.focus();
      })
      .catch((err) => console.log("issue " + err));
  };
  return (
    <>
      <center>
        <h1>Transaction has been completed</h1>
        <p>Transaction Id: JBISWB723BJK</p>
        <p>Current Date and Time: {formattedDateTime}</p>
        <br />
        <br />

          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={hName}
          />
          <input
            type="number"
            placeholder="Mobile Number"
            value={phone}
            onChange={hPhone}
          />
          <input
            type="text"
            placeholder="Email "
            value={mail}
            onChange={hMail}
          />
          <br /><br/>
          <button onClick={save}>SAVE</button>
        <br /><br/>
        <Link to="/">Go to Home Page</Link>
      </center>
    </>
  );
}
