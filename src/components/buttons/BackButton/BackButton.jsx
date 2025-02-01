import { NavLink } from 'react-router-dom';
import sprite from '../../../assets/sprite.svg';

const BackButton = () => {
  return (
    <div className='absolute top-2 left-0'>
      <NavLink
        className='flex items-center border border-gray-light rounded-[200px] px-4 py-1 transition-all duration-300 hover:border-btn-red'
        to='/catalog'
      >
        <svg className='mr-1' width={20} height={20}>
          <use href={`${sprite}#icon-arrow-back`}></use>
        </svg>
        <p>Back</p>
      </NavLink>
    </div>
  );
};
export default BackButton;
