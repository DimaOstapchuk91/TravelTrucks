import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectIsError,
  selectIsLoading,
  selectPage,
  selectParams,
  selectTotalCampers,
} from '../../redux/campers/selectors.js';
import TruckItem from '../TrucksItem/TruckItem.jsx';
import LoadMoreButton from '../buttons/LoadMoreButton/LoadMoreButton.jsx';
import { useEffect } from 'react';
import { getCampers } from '../../redux/campers/operations.js';
import Loader from '../Loader/Loader.jsx';

const TrucksList = () => {
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const totalCampers = useSelector(selectTotalCampers);
  const isError = useSelector(selectIsError);
  const page = useSelector(selectPage);
  const params = useSelector(selectParams);
  const dispatch = useDispatch();

  useEffect(() => {
    if (campers.length >= page * 4) {
      return;
    }

    if (campers.length > 0 && campers.length === totalCampers) return;

    if (isError) return;

    dispatch(getCampers({ params, page }));
  }, [dispatch, page, params, campers.length, totalCampers, isError]);

  return (
    <div>
      <div>
        <ul className='max-w-[888px] flex flex-col gap-8 mb-10'>
          {campers.map(camper => (
            <li key={camper.id}>
              <TruckItem camperInfo={camper} />
            </li>
          ))}
          {isLoading && <Loader />}
        </ul>
        {!isError ? <LoadMoreButton /> : <p>Sorry, nothing found</p>}
      </div>
    </div>
  );
};
export default TrucksList;
