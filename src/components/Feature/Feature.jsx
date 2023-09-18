import PropTypes from 'prop-types';
import { IoMdCheckmarkCircle } from "react-icons/io";
const Feature = ({feature}) => {
    return (
        <div>
            <h2 className='flex gap-3'><IoMdCheckmarkCircle className='text-2xl text-pink-800'></IoMdCheckmarkCircle> {feature}</h2>
        </div>
    );
};
Feature.propTypes ={
    feature: PropTypes.string
}
export default Feature;