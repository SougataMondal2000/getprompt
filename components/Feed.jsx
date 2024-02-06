import { FaMagnifyingGlass } from "react-icons/fa6";
const Feed = () => {
  return (
    <section className="">
      <form className="bg-white relative w-full flex justify-between mt-10 items-center px-4">
        <input
          type="text"
          placeholder="//search for a tag or a username"
          className="w-full p-1 outline-none text-black"
        />
        <FaMagnifyingGlass className="text-red-400 w-5 h-5" />
      </form>
    </section>
  );
};

export default Feed;
