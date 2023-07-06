import axios, * as others from "axios";
import React, { useState } from "react";

const PostData = () => {
  const url = "https://9e53-27-107-28-2.ngrok-free.app/login";
  const [restodata, setRestodata] = useState({
    email: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        email: email,
        password: password,
        // isOpen: restodata.isOpen,
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
          value={email}
          placeholder="restaurantName"
          type="text"
        ></input>
        <input
          onChange={(e) => handle(e)}
          id="restaurantImage"
          value={password}
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
        
      </form>
    </div>
  );
};

export default PostData;
