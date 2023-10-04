import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSiteNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch("categories.json")
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h1 className="text-xl font-semibold text-[#403F3F]">All Categroy</h1>
            <h3 className="text-xl font-semibold text-[#403F3F] bg-[#E7E7E7] w-full text-center my-4 py-2 rounded">National News </h3>

            <div className="space-y-3 ms-16">
                {
                    categories.map(category =><NavLink to={`category / ${category.id}`} className="block text-[#9F9F9F] text-xl font-medium" key={category.id}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSiteNav;