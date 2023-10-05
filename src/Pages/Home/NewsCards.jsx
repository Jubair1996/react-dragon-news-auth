import { AiFillEye, AiTwotoneStar } from "react-icons/ai";
import { BsBookmark, BsShare } from "react-icons/bs";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const NewsCards = ({ news }) => {
  const { title, image_url, details, rating, total_view,author,_id } = news;

  return (
    <div>
      <div className="mb-4 border rounded px-4 py-2 space-y-2">
        <did className="flex justify-between items-center bg-[#F3F3F3] mb-4 px-4 py-2 rounded w-full">
          <div className="flex gap-4 items-center">
            <div>
              <img className="w-10 rounded-full" src={author.img} alt="" />
            </div>
            <div>
              <h1 className="text-xl  font-semibold text-[#403F3F]">
               {author.name}
              </h1>
              <p className="text-sm  font-medium text-[#706F6F]">{author.published_date}</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <p>
              <BsBookmark></BsBookmark>
            </p>
            <p>
              <BsShare></BsShare>
            </p>
          </div>
        </did>

        <h1 className="text-[#403F3F] font-semibold text-xl">{title}</h1>
        <img src={image_url} alt="" />
        {/* <p className="text-sm  font-medium text-[#706F6F]">{details}</p> */}


            {
                details.length >200 ? <p className="text-sm  font-medium text-[#706F6F]">{details.slice(0,200)} <br /> <Link to={`/news/${_id}`} className="text-[#FF8C47] font-bold" >Reed More.......</Link></p> : <p className="text-sm  font-medium text-[#706F6F]">{details}</p>
            }

        <div className="flex justify-between items-center">
        <div className="flex items-center gap-2
        ">
            <div className="flex items-center text-[#FF8C47]">
                <AiTwotoneStar></AiTwotoneStar>
                <AiTwotoneStar></AiTwotoneStar>
                <AiTwotoneStar></AiTwotoneStar>
                <AiTwotoneStar></AiTwotoneStar>
                <AiTwotoneStar></AiTwotoneStar>
            </div>
          <p className="text-sm  font-medium text-[#706F6F]">{rating.number}</p>
        </div>
        <div className="flex items-center gap-2
        ">
            <AiFillEye></AiFillEye>
          <p className="text-sm  font-medium text-[#706F6F]">{total_view}</p>
        </div>
        </div>
      </div>
    </div>
  );
};
NewsCards.propTypes = {
    news: PropTypes.node
  };
export default NewsCards;
