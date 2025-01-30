import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectIsError,
  selectIsLoading,
  selectPage,
  selectParams,
} from '../../redux/campers/selectors.js';
import TruckItem from '../TrucksItem/TruckItem.jsx';
import LoadMoreButton from '../buttons/LoadMoreButton/LoadMoreButton.jsx';
import { useEffect } from 'react';
import { getCampers } from '../../redux/campers/operations.js';

const TrucksList = () => {
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const page = useSelector(selectPage);
  const params = useSelector(selectParams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampers({ params, page }));
  }, [dispatch, page, params]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul className='max-w-[888px] flex flex-col gap-8 mb-10'>
            {campers.map(camper => (
              <li key={camper.id}>
                <TruckItem camperInfo={camper} />
              </li>
            ))}
          </ul>
          {!isError ? <LoadMoreButton /> : <p>Sorry, nothing found</p>}
        </div>
      )}
    </div>
  );
};
export default TrucksList;
