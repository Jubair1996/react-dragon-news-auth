import Header from "../../shared/Header/Header";
import LeftSiteNav from "../../shared/LeftSiteNav/LeftSiteNav";
import Navbar from "../../shared/Navbar/Navbar";
import RightSiteNav from "../../shared/RightSiteNav/RightSiteNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSiteNav></LeftSiteNav>
                </div>
                <div className="md:col-span-2">Coming Soon</div>
                <div >
                    <RightSiteNav></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default Home;