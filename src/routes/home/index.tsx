import Fetch from "../../components/fetch";

const Home: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Fetch url="/loading" />
    </>
  );
};

export default Home;
