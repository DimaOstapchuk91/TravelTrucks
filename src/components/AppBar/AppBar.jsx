import { Link, NavLink } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';

const AppBar = () => {
  return (
    <div className='relative  px-16 py-6 bg-gray-100 max-w-[1440px] m-auto'>
      <div className='items-start absolute top-7 left-16'>
        <Link to='/'>
          <svg className='' width={136} height={16}>
            <use href={`${sprite}#icon-logo`}></use>
          </svg>
        </Link>
      </div>
      <nav className=''>
        <ul className='flex justify-center items-center  gap-8'>
          <li>
            <NavLink
              className={({ isActive }) =>
                ` transition-all duration-300 hover:text-btn-red font-bold ${
                  isActive ? 'text-btn-red' : 'text-text-color'
                }`
              }
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `transition-all duration-300 hover:text-btn-red font-bold ${
                  isActive ? 'text-btn-red' : 'text-text-color'
                }`
              }
              to='/catalog'
              end
            >
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default AppBar;
