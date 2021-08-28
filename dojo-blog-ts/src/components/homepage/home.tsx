const Home = () => {
  const handleClick = (name?: string) => {
    console.log(`Hi there, ${name}!!`);
  };
  const eventTesterFunction = (e: any) => {
    console.log(e.target);
  };
  return (
    <div className="homepage">
      <h1>Homepage data</h1>
      <button
        onClick={() => {
          handleClick("Armaan");
        }}
      >
        Test Click
      </button>
      <button onClick={eventTesterFunction}>Event Tester Button</button>
    </div>
  );
};

export default Home;
