import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getCamperById } from '../../redux/campers/operations.js';
import {
  selectIsLoading,
  selectOneCamper,
} from '../../redux/campers/selectors.js';
import CamperInfoBar from '../../components/CamperInfoBar/CamperInfoBar.jsx';

const CamperPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const { id } = useParams();

  const { name, rating, reviews, location, price, gallery, description } =
    useSelector(selectOneCamper);

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [dispatch, id]);

  console.log(id);
  return (
    <div className='max-w-[1440px] m-auto px-[64px] py-12'>
      {!isLoading && (
        <div>
          <h2 className='font-semibold text-2xl mb-2'>{name}</h2>
          <div className='mb-4'>
            <CamperInfoBar
              rating={rating}
              reviews={reviews}
              location={location}
            />
          </div>
          <p className='mb-7 text-2xl font-semibold'>&euro;{` ${price}.00 `}</p>
          <ul className='flex gap-12 mb-7'>
            {gallery?.map((item, i) => (
              <li key={i}>
                <img
                  className='max-w-[292px] h-[320px] object-cover object-center rounded-[10px]'
                  src={item.thumb}
                  alt={'camper' + i}
                />
              </li>
            ))}
          </ul>
          <p className='text-text-light mb-15'>{description}</p>
          <div>
            <ul className='flex gap-10 pb-6 border-b border-gray-light mb-11'>
              <li>
                <NavLink className='text-xl font-semibold' to='features'>
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink className='text-xl font-semibold' to='reviews'>
                  Reviews
                </NavLink>
              </li>
            </ul>
            <div>
              <div>
                <Outlet />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CamperPage;
