import { NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
    <div className='text-black bg-inputs text-4xl'>
      <NavLink
        to='/'
        className='text-text-light hover:text-btn-red font-bold text-2xl mr-2'
      >
        HomePage
      </NavLink>
      <NavLink
        to='/catalog'
        className='text-text-light hover:text-btn-red font-bold text-2xl'
      >
        Catalog
      </NavLink>
    </div>
  );
};
export default AppBar;
