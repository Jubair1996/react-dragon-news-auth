
import logo from "../../assets/logo.png"
import moment from 'moment';
const Header = () => {
    return (
        <div className="text-center my-6 space-y-2">
            <img className="mx-auto" src={logo} alt="" />
            <h3 className="text-[#706F6F] text-xl">Journalism Without Fear or Favour</h3>
            <p className="text-[#706F6F] text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;