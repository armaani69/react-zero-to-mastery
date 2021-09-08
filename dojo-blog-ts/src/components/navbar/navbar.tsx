import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <h1>Dojo Blog</h1>
      <div className="navbar-items">
        <a href="home">Home</a>
        <a
          href="blog"
          style={{
            color: "white",
            backgroundColor: "rgb(202, 24, 68)",
            borderRadius: "10px",
          }}
        >
          New Blog
        </a>
      </div>
    </div>
  );
};

export default NavBar;
