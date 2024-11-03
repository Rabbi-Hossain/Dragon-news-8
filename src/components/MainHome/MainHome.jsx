import { useLoaderData } from "react-router-dom";
import Category from "../Categorys/Categorys";
import DragonNews from "../DragonNews/DragonNews";
import RightSide from "../RightSIde/RightSide";

const MainHome = () => {

    const news = useLoaderData()
    

    return (
        <div className="w-full flex gap-3">
            <div className="w-3/12 border">
                <Category></Category>
            </div>
            <div className="w-6/12">
                {
                    news.map(anews=><DragonNews key={anews._id} anews={anews}></DragonNews>)
                }
            </div>
            <div className="w-3/12 border">
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default MainHome;