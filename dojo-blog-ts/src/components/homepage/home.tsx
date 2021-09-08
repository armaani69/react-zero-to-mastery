import { useState } from "react";
import BlogList from "../bloglist/bloglist";
// import blogData from "../homepage/blog";
import "./home.css";

const Home = () => {
  const [blogs, setBlog] = useState([
    {
      title: "My new website",
      body: "This is the data regarding my new website. I am a pro",
      author: "Armaan Mathew",
      id: 1,
    },
    {
      title: "My new t-shirt",
      body: "This is the data regarding my new t-shirt. I am a pro",
      author: "Akshay Sajeev",
      id: 2,
    },
    {
      title: "My new car",
      body: "This is the data regarding my new car. I am a pro",
      author: "Rehaan John",
      id: 3,
    },
  ]);
  let title = "List of all blogs";
  //   const [num, setNum] = useState(34);
  //   const changeNumber = () => {
  //     setNum(Math.floor(Date.now()));
  //   };
  return (
    <div className="homepage">
      <div className="blog-preview">
        <BlogList blog={blogs} title={title} />
      </div>
      {/* <button onClick={changeNumber}>Click Me</button>
      <p>{num}</p> */}
    </div>
  );
};

export default Home;
