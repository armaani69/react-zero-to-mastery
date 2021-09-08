const BlogList = (props: any) => {
  let blogs = props.blog;
  let title = props.title;
  return (
    <div>
      <h1>{title}</h1>
      {blogs.map((data: any) => (
        <div key={data.id} className="blog-div">
          <h2 style={{ marginTop: "1em", color: "rgb(202, 24, 68)" }}>
            {data.title}
          </h2>
          <p>{data.body}</p>
          <p>The name of the author is {data.author} </p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
