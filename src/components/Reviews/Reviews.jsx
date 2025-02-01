import { useSelector } from 'react-redux';
import { selectOneCamper } from '../../redux/campers/selectors.js';
import sprite from '../../assets/sprite.svg';

const Reviews = () => {
  const { reviews } = useSelector(selectOneCamper);
  return (
    <div className='w-[630px]'>
      <ul className='flex flex-col gap-11'>
        {reviews?.map((review, i) => (
          <li key={i}>
            <div className='flex items-center gap-4 mb-4'>
              <p className='w-15 h-15 bg-gray-100 rounded-[60px] flex items-center justify-center text-2xl font-semibold text-btn-red'>
                {review.reviewer_name.charAt(0)}
              </p>
              <div>
                <p className='font-medium mb-1'>{review.reviewer_name}</p>
                <ul className='flex gap-1'>
                  {[1, 2, 3, 4, 5].map((star, i) => (
                    <li key={i}>
                      <svg
                        className={`${
                          review.reviewer_rating > i
                            ? 'fill-star-yelow'
                            : 'fill-gray-100'
                        }`}
                        width={16}
                        height={16}
                      >
                        <use href={`${sprite}#icon-star`}></use>
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className='text-text-light'>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Reviews;
