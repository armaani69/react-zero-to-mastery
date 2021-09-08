import { useState } from "react";
import blogData from "../homepage/blog";
import "./home.css";

const Home = () => {
  const [blog, setBlog] = useState(blogData);
  //   const [num, setNum] = useState(34);
  //   const changeNumber = () => {
  //     setNum(Math.floor(Date.now()));
  //   };
  return (
    <div className="homepage">
      <div className="blog-preview">
        {blog.map((data) => (
          <div key={data.id}>
            <h2 style={{ marginTop: "1em", color: "rgb(202, 24, 68)" }}>
              {data.title}
            </h2>
            <p>{data.body}</p>
            <p>The name of the author is {data.author} </p>
          </div>
        ))}
      </div>
      {/* <button onClick={changeNumber}>Click Me</button>
      <p>{num}</p> */}
    </div>
  );
};

export default Home;
