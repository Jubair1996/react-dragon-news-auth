import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  return (
    <div className="flex gap-6 bg-[#F3F3F3] justify-center items-center px-4 mb-4 py-2 rounded">
      <button className="bg-[#D72050] px-6 py-2 text-white rounded uppercase font-semibold ">Latest</button>
      <div>
        <Marquee pauseOnHover={true} speed={100} >
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
