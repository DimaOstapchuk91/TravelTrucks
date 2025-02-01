import CommonButton from '../../components/buttons/CommonButton/CommonButton.jsx';

const NotFoundPage = () => {
  return (
    <div className="bg-[url('/assets/img/truck_bg.jpg')]  bg-cover bg-center bg-no-repeat px-[64px] py-[260px] m-auto max-w-[1440px] h-[696px] bg-retina">
      <div className='h-[176px] flex flex-col gap-10 items-center'>
        <h1 className='text-gray-100 text-[100px] text-center font-bold leading-[32px]'>
          Not Found
        </h1>
        <p className='text-gray-100 text-center  text-[24px] leading-[32px] font-semibold '>
          Sorry, but no such page exists
        </p>
        <CommonButton value={'Go Catalog'} redirect={'catalog'} />
      </div>
    </div>
  );
};
export default NotFoundPage;
