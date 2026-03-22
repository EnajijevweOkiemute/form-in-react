import { useState } from "react";
import "./App.css";

function App() {
  const[values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    contact: '',
    course: '',
    resume: '',
    url: '',
    about: '',
  })


  const handleChanges = (e) => {
      setValues({...values, [e.target.name]:[e.target.value]})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //axios.post('url', values)
    console.log(values);
  }

  const resetFun = () => {
    setValues({firstName: '', lastName: '', email:''})
  }
  
  return ( 
    <div className="container">
      <h1>React Form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name*</label>
        <input type="text" placeholder="Enter First Name"  name="firstName" 
           onChange = {(e) => handleChanges(e)}  value={values.firstName} required />

          <label htmlFor="lastName">Last Name*</label>
          <input type="text" placeholder="Enter Last Name" name="lastName" 
           onChange = {(e) => handleChanges(e)}  value={values.lastName} required />

          <label htmlFor="email">Enter Email*</label>
          <input type="text" placeholder="Your Email" name="email"
           onChange = {(e) => handleChanges(e)}  value={values.email} required />

          <label htmlFor="contact">Contact*</label>
          <input type="text" placeholder="Your phone number" name="contact" 
           onChange = {(e) => handleChanges(e)} required />

          <label htmlFor="gender">Gender*</label>
          <input type="radio"  name="gender" onChange = {(e) => handleChanges(e)} required /> Male
          <input type="radio" name="gender" onChange = {(e) => handleChanges(e)} required /> Female
          <input type="radio" name="gender" onChange = {(e) => handleChanges(e)} required /> Rather Not Say

          <label htmlFor="course">Course Of Study*</label>
            <select name="course" id="course"  onChange = {(e) => handleChanges(e)} required >
              <option value="mathematics">Mathematics</option>
              <option value="physiology">Physiology</option>
              <option value="meteorology">Meteorology</option>
              <option value="metallurgy">Metallurgy</option>
              <option value="sexology">Sexology</option>
              <option value="morphology">Morphology</option>
          </select>

          <label htmlFor="resume">Upload Resume*</label>
          <input type="file" name="resume" onChange = {(e) => handleChanges(e)} required />
          
          <label htmlFor="url">Enter Url*</label>
          <input type="text" name="url" placeholder="Enter Image URL"
           onChange = {(e) => handleChanges(e)} required />

          <label htmlFor="about">About*</label>
          <textarea name="about" placeholder="Tell us about you" id="about" 
           onChange = {(e) => handleChanges(e)} required ></textarea>

          <button type="button" onClick={resetFun}>Reset</button>

          <button type="submit">Submit</button>
      </form>
    </div>
  );
}








export default App