import { useDispatch, useSelector } from 'react-redux';
import { incrementPage } from '../../../redux/campers/slice.js';
import {
  selectIsLoading,
  selectPage,
  selectTotalCampers,
} from '../../../redux/campers/selectors.js';

const LoadMoreButton = () => {
  const page = useSelector(selectPage);
  const totalCampers = useSelector(selectTotalCampers);
  const isLoading = useSelector(selectIsLoading);
  const maxPage = totalCampers / 4 >= page;

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(incrementPage());
  };

  return (
    <div className='w-full flex'>
      {maxPage && (
        <button
          className='m-auto border border-gray-light px-8 py-4 rounded-[200px] cursor-pointer'
          type='button'
          onClick={handleClick}
          disabled={isLoading}
        >
          Load More
        </button>
      )}
    </div>
  );
};
export default LoadMoreButton;
