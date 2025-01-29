import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors.js';
import TruckItem from '../TrucksItem/TruckItem.jsx';

const TrucksList = () => {
  const campers = useSelector(selectCampers);
  return (
    <div>
      <ul className='max-w-[888px] flex flex-col gap-8'>
        {campers.map(camper => (
          <li key={camper.id}>
            <TruckItem camperInfo={camper} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TrucksList;
