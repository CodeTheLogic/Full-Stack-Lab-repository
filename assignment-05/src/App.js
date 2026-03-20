import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    name: "",
    objective: "",
    summary: "",
    education: "",
    skills: "",
    experience: "",
    achievements: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const printResume = () => {
    const content = document.getElementById("resume").innerHTML;
    const win = window.open("", "", "width=800,height=600");
    win.document.write("<html><head><title>Resume</title></head><body>");
    win.document.write(content);
    win.document.write("</body></html>");
    win.document.close();
    win.print();
  };

  return (
    <div className="container">
      <h1>Resume Builder</h1>

      <div className="main">

        <div className="form">
          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <textarea name="objective" placeholder="Career Objective" onChange={handleChange}></textarea>
          <textarea name="summary" placeholder="Professional Summary" onChange={handleChange}></textarea>
          <textarea name="education" placeholder="Education" onChange={handleChange}></textarea>
          <textarea name="skills" placeholder="Skills" onChange={handleChange}></textarea>
          <textarea name="experience" placeholder="Experience / Internships" onChange={handleChange}></textarea>
          <textarea name="achievements" placeholder="Achievements" onChange={handleChange}></textarea>

          <button onClick={printResume}>Download Resume</button>
        </div>

        <div className="preview" id="resume">
          <h2>{data.name}</h2>

          <h3>Career Objective</h3>
          <p>{data.objective}</p>

          <h3>Professional Summary</h3>
          <p>{data.summary}</p>

          <h3>Education</h3>
          <p>{data.education}</p>

          <h3>Skills</h3>
          <p>{data.skills}</p>

          <h3>Experience</h3>
          <p>{data.experience}</p>

          <h3>Achievements</h3>
          <p>{data.achievements}</p>
        </div>

      </div>
    </div>
  );
}

export default App;