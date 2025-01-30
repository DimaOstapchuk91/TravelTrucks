import CommonButton from '../buttons/CommonButton/CommonButton.jsx';
import FavoriteButton from '../buttons/FavoriteButton/FavoriteButton.jsx';
import CamperFeature from '../CamperFeature/CamperFeature.jsx';
import CamperInfoBar from '../CamperInfoBar/CamperInfoBar.jsx';

const TruckItem = ({ camperInfo }) => {
  const { gallery, name, price, id, rating, reviews, location, description } =
    camperInfo;

  return (
    <div className='w-[888px] flex gap-6 p-6 border border-gray-light rounded-[20px]'>
      <img
        className='max-w-[292px] h-[320px] object-cover object-center rounded-[10px]'
        src={gallery[0].thumb}
        alt={name}
      />
      <div className='w-full flex flex-col justify-between'>
        <div>
          <div className='flex justify-between items-center mb-2'>
            <h2 className='text-2xl max-w-[350px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap'>
              {name}
            </h2>{' '}
            <div className='flex items-center'>
              <p className='mr-3 text-2xl font-semibold'>
                &euro;{` ${price}.00 `}
              </p>
              <FavoriteButton id={id} />
            </div>
          </div>
          <div className='mb-6'>
            <CamperInfoBar
              rating={rating}
              reviews={reviews}
              location={location}
            />
          </div>
          <p className='max-w-[524px] mb-6 text-text-light overflow-hidden text-ellipsis whitespace-nowrap'>
            {description}
          </p>
          <CamperFeature camperInfo={camperInfo} />
        </div>
        <div className='max-2-[166px]'>
          <CommonButton value='Show more' redirect={`catalog/${id}`} />
        </div>
      </div>
    </div>
  );
};
export default TruckItem;
