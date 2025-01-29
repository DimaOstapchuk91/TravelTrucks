import Filters from '../../components/Filters/Filters.jsx';
import TrucksList from '../../components/TrucksList/TrucksList.jsx';

const CatalogPage = () => {
  return (
    <div className='max-w-[1440px] m-auto px-16 py-12 flex gap-16'>
      <Filters />
      <TrucksList />
    </div>
  );
};
export default CatalogPage;
