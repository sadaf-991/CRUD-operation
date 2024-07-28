import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
   const [id, setId] = useState(0);
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");

   const navigate = useNavigate();

   useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
   },[])

const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
    .put(`https://66a22023967c89168f1ee39f.mockapi.io/crudyoutube/crud-youtube/${id}`,
    {
        name: name,
        email: email,
    })
    .then(() => {
        navigate("/read");
    });

};

  return (
    <>
   <h2>UPDATE</h2>
  <form>
  <label className="form-label">Name</label>
  <div className="mb-3">
    <input type="text" 
    className="form-control" 
    value={name}
    onChange = {(e) => setName(e.target.value)}
    
    />
    </div>
  <div className="mb-3">
    <label className="form-label">Email Address</label>
    <input type="email" className="form-control" 
    value={email}
    id="exampleInputPassword1"
    onChange = {(e) => setEmail(e.target.value)}
    />
  </div>

  <div>
  <button type="submit" className="btn btn-primary me-2" 
  onClick={handleUpdate}
  >Update</button>
  <Link to="/">
  <button className="btn btn-secondary"
  >
    Back</button>
    </Link>
  </div>
</form>
    </>
  )
}

export default Update;
