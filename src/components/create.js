import axios from "axios";
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";




const Create = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

const history = useNavigate();   

    const header = { "Access-Control-Allow-Origin": ""};

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked");
            axios.post(
                "https://66a22023967c89168f1ee39f.mockapi.io/crudyoutube/crud-youtube",
                {name : name, 
                email : email,
                header
                }
            )

            .then(() => {
                history("/read");
            });
    
    };

  return (
   <>
  <div className="d-flex justify-content-between m-2">
  <h2>CREATE</h2>
  <Link to="/read">
  <button className="btn btn-secondary"
  >
    Show Data</button>
    </Link>
  </div>
  <form>
  <label className="form-label">Name</label>
  <div className="mb-3">
    <input type="text" 
    className="form-control" 
    onChange = {(e) => setName(e.target.value)}
    
    />
    </div>
  <div className="mb-3">
    <label className="form-label">Email Address</label>
    <input type="email" className="form-control" 
    id="exampleInputPassword1"
    onChange = {(e) => setEmail(e.target.value)}
    />
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>

  </>
  );
}; 

export default Create;
