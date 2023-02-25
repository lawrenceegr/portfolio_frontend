import React, { useState, useEffect } from "react";
import api from "../api";
const About = () => {
  const [about, setAbout] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAbout();
  }, []);

  const getAbout = async () => {
    try {
      const res= await api.get("/about");
      setAbout(res.data);
      console.log(res.data)
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      if (isEdit) {
        const res = await api.put("/about", about, config);
        setAbout(res.data);
        setIsEdit(false);
      } else {
        const res = await api.post("/about", about, config);
        setAbout(res.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setAbout({ ...about, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {Object.keys(about).length === 0 ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="3"
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
           ) : ( 
            <>
              <h2>{about.title}</h2>
              <p>{about.description}</p>
              <button className="btn btn-primary" onClick={handleEdit}>
                Edit
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default About;
