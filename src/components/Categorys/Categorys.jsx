import { useEffect, useState } from "react";
import Categorie from "../Categorie/Categorie";

const Categorys = () => {

    const [categorys, setCategorys] = useState()

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])


    return (
        <div>
            <h2 className="text-xl font-semibold">All Caterogy</h2>
            <ul className="space-y-3 mt-4">
                {
                    categorys?.map(categore => <Categorie key={categore.id} categore={categore}></Categorie>)
                }
            </ul>
        </div>
    );
};

export default Categorys;