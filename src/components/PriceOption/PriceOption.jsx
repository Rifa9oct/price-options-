import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name,price,features} = option;
    return (
        <div className="bg-purple-600 rounded-lg flex flex-col p-4 text-white">
           <h2 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-3xl font-bold">/tk</span>
           </h2>
           <h4 className="text-3xl text-center my-8">{name}</h4>

           <div className='pl-12 flex-grow'>
                {
                        features.map((feature,idx) => 
                        <Feature 
                        key={idx} 
                        feature={feature}></Feature>)
                }
           </div>
           <button className='w-full p-2 bg-pink-500 hover:bg-pink-800 my-5 rounded-lg'>Buy now</button>
        </div>
    );
};

PriceOption.propTypes ={
    option: PropTypes.object
}

export default PriceOption;