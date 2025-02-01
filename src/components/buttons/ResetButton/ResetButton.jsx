const ResetButton = ({ handleReset }) => {
  return (
    <button
      className='border border-gray-light transition-all duration-300 hover:border-hover-btn-red  px-15 py-4 rounded-[200px] cursor-pointer'
      type='button'
      onClick={handleReset}
    >
      Reset
    </button>
  );
};
export default ResetButton;
