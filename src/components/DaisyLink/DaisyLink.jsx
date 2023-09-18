import PropTypes from 'prop-types';

const DaisyLink = ({route}) => {
    return (
        <div>
            <li className='mr-10 hover:bg-gray-300 px-2 py-1 rounded '>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};
 DaisyLink.propTypes = {
    route: PropTypes.object
};

export default DaisyLink;