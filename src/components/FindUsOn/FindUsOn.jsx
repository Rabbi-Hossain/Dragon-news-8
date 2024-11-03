import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUsOn = () => {
    return (
        <div className="mt-6">
            <h3 className="text-xl font-semibold">Find Us On</h3>
            <div className="mt-4">
                <button className="text-start text-2xl btn-outline p-2 border border-black  w-full  flex items-center"><FaFacebook /> <span className="ml-2">Facebook</span></button>
                <button className="text-start btn-outline p-2 border-x border-black text-2xl  w-full flex items-end"><FaTwitter /><span className="ml-2">Twitter</span></button>
                <button className="text-start btn-outline p-2 border border-black   w-full flex text-2xl items-center"><FaInstagram></FaInstagram><span className="ml-2">Instagram</span></button>
            </div>
        </div>
    );
};

export default FindUsOn;