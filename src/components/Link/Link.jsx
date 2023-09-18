import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div>
            <li className='text-xl mr-10 hover:bg-yellow-500 p-2 rounded '>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object
};

export default Link;