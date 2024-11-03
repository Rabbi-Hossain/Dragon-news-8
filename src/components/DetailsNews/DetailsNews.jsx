
import { useLoaderData, useParams } from "react-router-dom";
import RightSide from "../RightSIde/RightSide";

const DetailsNews = () => {
    const news = useLoaderData()

  const {_id} = useParams()
  

  const newsDetails = news.find(anews=>anews._id == _id)
  

    return (
        <div className="flex gap-5">

            <div className="md:w-9/12 space-y-5 px-2">
                <h2>Detaisl news page:{newsDetails._id}</h2>
                <div>
                    <img src={newsDetails.image_url} alt="" />
                    <h2 className="text-2xl font-bold">{newsDetails.title}</h2>
                    <p>{newsDetails.details}</p>
                </div>
            </div>
            <div>
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default DetailsNews;