import { useSelector } from 'react-redux';
import { selectOneCamper } from '../../redux/campers/selectors.js';
import CamperFeature from '../CamperFeature/CamperFeature.jsx';

const Features = () => {
  const camperInfo = useSelector(selectOneCamper);
  const featureClass = true;
  const { form, length, width, height, tank, consumption } = camperInfo;

  return (
    <div className='max-w-[630px] px-13 py-11 bg-inputs rounded-[10px]'>
      <div className='h-[204px]'>
        <CamperFeature camperInfo={camperInfo} featureClass={featureClass} />
      </div>
      <div>
        <h3 className='font-semibold text-[20px] pb-6 mb-6 border-b border-gray-light'>
          Vehicle details
        </h3>
        <ul className='flex flex-col gap-4'>
          <li className='flex justify-between font-medium'>
            <p>Form</p>
            <p>{form}</p>
          </li>
          <li className='flex justify-between font-medium'>
            <p>Length</p>
            <p>{length}</p>
          </li>
          <li className='flex justify-between font-medium'>
            <p>Width</p>
            <p>{width}</p>
          </li>
          <li className='flex justify-between font-medium'>
            <p>Height</p>
            <p>{height}</p>
          </li>
          <li className='flex justify-between font-medium'>
            <p>Tank</p>
            <p>{tank}</p>
          </li>
          <li className='flex justify-between font-medium'>
            <p>Consumption</p>
            <p>{consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Features;
