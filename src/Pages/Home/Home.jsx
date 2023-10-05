import { useLoaderData } from "react-router-dom";
import Header from "../../shared/Header/Header";
import LeftSiteNav from "../../shared/LeftSiteNav/LeftSiteNav";
import Navbar from "../../shared/Navbar/Navbar";
import RightSiteNav from "../../shared/RightSiteNav/RightSiteNav";
import BreakingNews from "./BreakingNews";
import NewsCards from "./NewsCards";

const Home = () => {
    const news= useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <LeftSiteNav></LeftSiteNav>
                </div>
                <div className="md:col-span-2 text-[#403F3F] text-xl font-semibold">
                    <h1 className="text-[#403F3F] text-xl font-semibold">Dragon News Home</h1>
                    <div>
                        {
                            news.map(aNews => <NewsCards key={aNews._id} news={aNews}></NewsCards>)
                        }
                    </div>
                </div>
                <div >
                    <RightSiteNav></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default Home;