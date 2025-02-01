const SubmitBtn = ({ isLoading, value }) => {
  return (
    <button
      type='submit'
      disabled={isLoading}
      className=' bg-btn-red max-w-[166px] transition-all duration-300 hover:bg-hover-btn-red rounded-[200px] text-background px-[60px] py-4 p-3 cursor-pointer'
    >
      {value}
    </button>
  );
};
export default SubmitBtn;
