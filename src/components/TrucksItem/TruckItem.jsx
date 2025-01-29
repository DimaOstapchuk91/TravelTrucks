import sprite from '../../assets/sprite.svg';
import CommonButton from '../buttons/CommonButton/CommonButton.jsx';
import FavoriteButton from '../buttons/FavoriteButton/FavoriteButton.jsx';

const TruckItem = ({ camperInfo }) => {
  const { gallery, name, price, id, rating, reviews, location, description } =
    camperInfo;
  // console.log(gallery[0].thumb);
  const characteristic = Object.entries(camperInfo)
    .filter(([key, value]) => {
      if (key === 'transmission') {
        return value === 'automatic'; // Перевірка для transmission
      } else if (key === 'engine') {
        return value;
      }
      return value === true && key !== 'radio'; // Для інших ключів
    })
    .map(([key, value]) =>
      key === 'transmission' || key === 'engine' ? value : key
    );
  console.log(characteristic);

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
          <div className='flex gap-4 mb-6'>
            <p className='flex items-center gap-1'>
              <svg className='fill-star-yelow' width={16} height={16}>
                <use href={`${sprite}#icon-star`}></use>
              </svg>
              {`${rating}(${reviews.length} Reviews)`}
            </p>
            <p className='flex gap-1 items-center'>
              <svg className='fill-text-color' width={16} height={16}>
                <use href={`${sprite}#icon-map`}></use>
              </svg>
              {`${location.split(', ').pop()}, Ukraine`}
            </p>
          </div>
          <p className='max-w-[524px] mb-6 text-text-light overflow-hidden text-ellipsis whitespace-nowrap'>
            {description}
          </p>
          <ul className='flex flex-wrap gap-1'>
            {characteristic.map((item, i) => (
              <li
                className='flex gap-1 items-center px-[18px] py-[6px] bg-gray-100 rounded-[100px]'
                key={i}
              >
                <svg className='' width={20} height={20}>
                  <use href={`${sprite}#icon-wind`}></use>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className='max-2-[166px]'>
          <CommonButton value='Show more' redirect={`catalog/${id}`} />
        </div>
      </div>
    </div>
  );
};
export default TruckItem;
