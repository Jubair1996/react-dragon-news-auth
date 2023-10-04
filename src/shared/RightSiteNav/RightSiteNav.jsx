import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import qZone1 from "../../assets/qZone1.png"
import qZone2 from "../../assets/qZone2.png"
import qZone3 from "../../assets/qZone3.png"
const RightSiteNav = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-2">Login With</h1>
      <button className="btn btn-outline w-full text-blue-400">
        <FcGoogle className="text-2xl bg-[#F3F3F3] rounded-full p-1"></FcGoogle>
        Login with google
      </button>
      <button className="btn btn-outline w-full mt-2">
        <FaGithub className="text-2xl text-black bg-[#F3F3F3] rounded-full p-1"></FaGithub>
        Login with github
      </button>


      <div>
      <h1 className="text-2xl font-semibold mt-4 mb-2">Login With</h1>
      <a href="" className="flex gap-4 items-center  border px-2 py-3 rounded-t-lg">
        <FaFacebook className="text-2xl bg-[#F3F3F3] rounded-full p-1 text-blue-400"></FaFacebook>
        Facebook
      </a>
      <a href="" className="flex gap-4 items-center border-x px-2 py-3">
        <FaTwitter className="text-2xl text-blue-300 bg-[#F3F3F3] rounded-full p-1"></FaTwitter>
        Twitter
      </a>
      <a href="" className="flex gap-4 items-center mb-2 border px-2 py-3 rounded-b-lg">
        <FaInstagram className="text-2xl text-pink-300 bg-[#F3F3F3] rounded-full p-1"></FaInstagram>
        Instagram
      </a>
      </div>


      <div className='bg-[#F3F3F3] p-4'>
      <h1 className="text-2xl font-semibold mt-4 mb-2">Q Zone</h1>
      <img src={qZone1} alt="" />
      <img src={qZone2} alt="" />
      <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSiteNav;
