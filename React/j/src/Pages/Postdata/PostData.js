import axios, * as others from "axios";
import React, { useState } from "react";

const PostData = () => {
  const url = "http://localhost:3002/posts";
  const [restodata, setRestodata] = useState({
    restaurantName: "",
    restaurantImage: "",
    isOpen: "",
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        restaurantName: restodata.restaurantName,
        restaurantImage: restodata.restaurantImage,
        isOpen: restodata.isOpen,
      })
      .then((res) => {
        // console.log(res.restodata)
      });
  }
  function deleteHandler(id,e) {
    e.preventDefault();
    axios
      .delete(`http://localhost:3002/posts/${id}`, {
        restaurantName: restodata.restaurantName,
        restaurantImage: restodata.restaurantImage,
        isOpen: restodata.isOpen,
      })
      .then((res) => {
        // console.log(res.restodata)
      });
  }
  function handle(e) {
    const newdata = { ...restodata };
    newdata[e.target.id] = e.target.value;
    setRestodata(newdata);
    console.log(newdata);
  }
  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handle(e)}
          id="restaurantName"
          value={restodata.restaurantName}
          placeholder="restaurantName"
          type="text"
        ></input>
        <input
          onChange={(e) => handle(e)}
          id="restaurantImage"
          value={restodata.restaurantImage}
          placeholder="Image Url"
          type="text"
        ></input>
        <input
          onChange={(e) => handle(e)}
          id="isOpen"
          value={restodata.isOpen}
          placeholder="isOpen"
          type="text"
        ></input>
        <button type="submit">Submit</button>
        <button onClick={deleteHandler(restodata.id)}>delete</button>
      </form>
    </div>
  );
};

export default PostData;
