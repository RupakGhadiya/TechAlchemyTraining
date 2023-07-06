import React, { useState, useEffect } from "react";
import axios from "axios";

const AllApi = () => {
  const [formData, setFormData] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });

  const [editID, setEditID] = useState();
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const { userId, id, title, body } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId && id && title && body) {
      axios
        .post("http://localhost:3000/posts", formData)
        .then((res) => {
          setData([...data, res.data]);
          setFormData({ userId: "", id: "", title: "", body: "" });
        })
        .catch((err) => console.log(err));
    }
  };

  const handleUpdate = () => {
    if (userId && id && title && body) {
      axios
        .put(`http://localhost:3000/posts/${editID}`, formData)
        .then((res) => {
          setFormData({ userId: "", id: "", title: "", body: "" });
          setRefresh(refresh + 1);
        })
        .catch((err) => console.log(err));
    }
  };
  const handleEdit = (editIDNotState) => {
    axios
      .get(`http://localhost:3000/posts/${editIDNotState}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
    // console.log(data);
  }, [refresh]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <h1>Employee Details</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="userId"></label>
              <input
                style={{ border: "2px solid black" }}
                type="number"
                className="form-control"
                id="userId"
                placeholder="Enter id"
                name="userId"
                value={userId}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="id"></label>
              <input
                style={{ border: "2px solid black" }}
                type="text"
                className="form-control "
                id="id"
                placeholder="Enter your Employee Id"
                name="id"
                value={id}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title"></label>
              <input
                style={{ border: "2px solid black" }}
                type="text"
                className="form-control"
                id="title"
                placeholder="Employee Name"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body"></label>
              <textarea
                style={{ border: "2px solid black" }}
                className="form-control"
                id="body"
                rows="3"
                placeholder="Description"
                name="body"
                value={body}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>{" "}
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                handleUpdate();
              }}
            >
              Update
            </button>
          </form>

          <hr />

          <table
            className="table table-striped"
            style={{ border: "2px solid black" }}
          >
            <thead>
              <tr style={{ border: "2px solid black" }}>
                <th>Id</th>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} style={{ border: "2px solid black" }}>
                  <td>{item.userId}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        handleEdit(item.id);
                        setEditID(item.id);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllApi;
