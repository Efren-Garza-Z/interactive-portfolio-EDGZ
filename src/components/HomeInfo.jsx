import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = () => {
        return (
            <div className='info-box'>

                <h1 className='sm:text-xl sm:leading-snug text-center text-white '>
                    Hi, I'm
                    <span className='font-semibold mx-2 text-white'>Efren</span>
                    👋😁🤓
                    <br />
                    A Software Engineer from Mexico
                </h1>
                <Link to='/about' className='neo-brutalism-white neo-btn'>
                    Lern more
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );

};

export default HomeInfo;