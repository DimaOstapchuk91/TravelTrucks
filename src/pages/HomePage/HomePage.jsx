import CommonButton from '../../components/buttons/CommonButton/CommonButton.jsx';

const HomePage = () => {
  return (
    <div className="bg-[url('/assets/img/truck_bg.jpg')]  bg-cover bg-center bg-no-repeat px-[64px] py-[260px] m-auto max-w-[1440px] h-[696px] bg-retina">
      <div className='h-[176px]'>
        <h1 className='text-gray-100 text-[48px] font-semibold leading-[32px] mb-4'>
          Campers of your dreams
        </h1>
        <p className='text-gray-100  text-[24px] leading-[32px] font-semibold mb-[40px]'>
          You can find everything you want in our catalog
        </p>
        <CommonButton value={'View Now'} redirect={'catalog'} />
      </div>
    </div>
  );
};
export default HomePage;
