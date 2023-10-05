import { useParams } from "react-router-dom";
import Header from "../../shared/Header/Header";
import Navbar from "../../shared/Navbar/Navbar";
import RightSiteNav from "../../shared/RightSiteNav/RightSiteNav";

const News = () => {

    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1 className="text-[#403F3F] text-xl font-semibold">Dragon News Home</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 ">
                <div className="col-span-3">
                    <h2>{id}</h2>
                </div>
                <div>
                    <RightSiteNav></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default News;