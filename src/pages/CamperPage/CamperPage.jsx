import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { getCamperById } from '../../redux/campers/operations.js';
import {
  selectIsError,
  selectIsLoading,
  selectOneCamper,
} from '../../redux/campers/selectors.js';
import CamperInfoBar from '../../components/CamperInfoBar/CamperInfoBar.jsx';
import BookForm from '../../components/BookForm/BookForm.jsx';
import BackButton from '../../components/buttons/BackButton/BackButton.jsx';
import Loader from '../../components/Loader/Loader.jsx';

const CamperPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const navigate = useNavigate();
  const isError = useSelector(selectIsError);
  const { id } = useParams();

  const [activeTab, setActiveTab] = useState(null);

  const { name, rating, reviews, location, price, gallery, description } =
    useSelector(selectOneCamper);

  useEffect(() => {
    if (isError) {
      navigate('*');
    }
  }, [isError, navigate]);

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [dispatch, id]);

  return (
    <div className='max-w-[1440px] relative m-auto px-[64px] py-12'>
      {isLoading ? (
        <div className='flex items-center justify-center]'>
          <Loader />
        </div>
      ) : (
        <div>
          <BackButton />
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
              <li
                className='relative'
                onClick={() => setActiveTab('features')} // Оновлюємо активну вкладку
              >
                <NavLink
                  to='features'
                  className={`transition-all text-xl font-semibold duration-300 hover:text-btn-red 'text-text-color' `}
                >
                  Features
                </NavLink>
                <span
                  className='absolute left-0 right-0 bottom-[-27px] h-[5px] transition-transform duration-300'
                  style={{
                    transform:
                      activeTab === 'features' ? 'scaleX(1)' : 'scaleX(0)',
                    backgroundColor:
                      activeTab === 'features'
                        ? 'var(--btn-red)'
                        : 'transparent',
                  }}
                />
              </li>
              <li className='relative' onClick={() => setActiveTab('reviews')}>
                <NavLink
                  to='reviews'
                  className={`transition-all text-xl font-semibold duration-300 hover:text-btn-red `}
                >
                  Reviews
                </NavLink>
                <span
                  className='absolute left-0 right-0 bottom-[-27px] h-[5px] transition-transform duration-300'
                  style={{
                    transform:
                      activeTab === 'reviews' ? 'scaleX(1)' : 'scaleX(0)',
                    backgroundColor:
                      activeTab === 'reviews'
                        ? 'var(--btn-red)'
                        : 'transparent',
                  }}
                />
              </li>
            </ul>
            <div className='flex justify-between'>
              <Outlet />
              <BookForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CamperPage;
