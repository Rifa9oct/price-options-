import PropTypes from 'prop-types';

const NavLink = ({route}) => {
    return (
        <div>
            <li className='text-xl mr-10 hover:bg-yellow-500 p-2 rounded '>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

NavLink.propTypes = {
    route: PropTypes.object
};

export default NavLink;