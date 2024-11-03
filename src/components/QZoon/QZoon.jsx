import qZoonimg1 from '../../assets/qZone1.png'
import qZoonimg2 from '../../assets/qZone2.png'
import qZoonimg3 from '../../assets/qZone3.png'
const QZoon = () => {
    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold">Q-Zone</h2>
            <div className='space-y-4'>
                <img src={qZoonimg1} alt="" />
                <img src={qZoonimg2} alt="" />
                <img src={qZoonimg3} alt="" />
            </div>
        </div>
    );
};

export default QZoon;