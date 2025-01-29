import { NavLink } from 'react-router-dom';

const CommonButton = ({ value, redirect }) => {
  return (
    <NavLink
      className='bg-btn-red inline-block text-gray-100 px-[48px] py-[16px] rounded-[200px]'
      to={`/${redirect}`}
    >
      {value}
    </NavLink>
  );
};
export default CommonButton;
