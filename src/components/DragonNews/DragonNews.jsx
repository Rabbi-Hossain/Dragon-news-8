import { Link } from "react-router-dom";

const DragonNews = ({ anews }) => {
    const { _id, name, title, image_url, details } = anews

    return (
        <div className="mt-4">
            <div className="card bg-base-100  ">
                <figure>
                    <img
                        src={image_url}
                        alt="Shoes" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>

                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}... <Link to={`/details/${_id}`}>Read More</Link> </>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default DragonNews;