import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="glass-container m-20 p-10">
      <h1 className="text-center text-4xl font-semibold">
        Generate prompts for <br />
        <span className="font-extrabold text-blue-400">
          ai chatbots
        </span> with{" "}
        <span className="font-extrabold text-red-400">ai chatbot</span>
      </h1>
      <p className="text-center mt-4">
        Use ChatGPT, Bing AI, Google Bard now more efficiently!
      </p>
      <Feed />
    </section>
  );
};

export default Home;
