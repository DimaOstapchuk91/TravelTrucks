import sprite from '../../assets/sprite.svg';

const CamperInfoBar = ({ rating, reviews, location }) => {
  return (
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
  );
};
export default CamperInfoBar;
