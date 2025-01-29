const SubmitBtn = ({ value }) => {
  return (
    <button
      type='submit'
      className=' bg-btn-red max-w-[166px] rounded-[200px] text-background px-[60px] py-4 p-3 '
    >
      {value}
    </button>
  );
};
export default SubmitBtn;
