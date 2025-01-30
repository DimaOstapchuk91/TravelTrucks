import sprite from '../../assets/sprite.svg';

const CamperFeature = ({ camperInfo, featureClass }) => {
  const feature = Object.entries(camperInfo)
    .filter(([key, value]) => {
      if (key === 'transmission') {
        return value === 'automatic';
      } else if (key === 'engine') {
        return value;
      }
      return value === true;
    })
    .map(([key, value]) =>
      key === 'transmission' || key === 'engine' ? value : key
    );

  return (
    <ul className='flex flex-wrap gap-1'>
      {feature.map((item, i) => (
        <li
          className={`flex  items-center gap-2 px-[18px]  font-medium rounded-[100px] ${
            featureClass ? 'py-[12px] bg-gray-light' : 'py-[6px] bg-gray-100'
          }`}
          key={i}
        >
          <svg
            className={`${
              item === 'microwave' || item === 'gas' || item === 'water'
                ? 'fill-transparent stroke-black'
                : ''
            }`}
            width={20}
            height={20}
          >
            <use
              href={`${sprite}#${
                item === 'petrol' || item === 'hybrid' || item === 'diesel'
                  ? 'engine'
                  : item
              }`}
            ></use>
          </svg>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </li>
      ))}
    </ul>
  );
};
export default CamperFeature;
