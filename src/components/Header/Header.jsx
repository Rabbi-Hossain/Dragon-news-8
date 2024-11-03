import moment from 'moment';
import headerimg from '../../assets/The Dragon News.jpg';
import NewsHeading from '../NewsHeading/NewsHeading';


const Header = () => {

    return (

        <div>
            <div className=' space-y-3 text-center'>
                <div className='flex justify-center'>
                    <img src={headerimg} alt="" />
                </div>
                <h2>Journalism Without Fear or Favour</h2>
                <p>{moment().format('dddd, MMMM YY, YYYY ')}</p>
            </div>
            <div className='flex items-center'>
                <button className='btn btn-error'>Latest</button><NewsHeading></NewsHeading>
            </div>
        </div>
    );
};

export default Header;