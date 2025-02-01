import { Field, Form, Formik } from 'formik';
import sprite from '../../assets/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import SubmitBtn from '../buttons/SubmitBtn/SubmitBtn.jsx';
import {
  resetState,
  setFilters,
  setParams,
} from '../../redux/campers/slice.js';
import {
  selectIsLoading,
  selectUserFilter,
} from '../../redux/campers/selectors.js';
import { getCampers } from '../../redux/campers/operations.js';
import ResetButton from '../buttons/ResetButton/ResetButton.jsx';

const Filters = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const userFilter = useSelector(selectUserFilter);

  const locations = [
    'Kyiv, Ukraine',
    'Poltava, Ukraine',
    'Dnipro, Ukraine',
    'Odesa, Ukraine',
    'Kharkiv, Ukraine',
    'Sumy, Ukraine',
    'Lviv, Ukraine',
  ];

  const handleSubmit = values => {
    const params = new URLSearchParams();

    if (values.vehicleEquipment.length) {
      values.vehicleEquipment.map(item => {
        if (item === 'automatic') {
          params.append('transmission', item);
        } else {
          params.append(item, true);
        }
      });
    }

    if (values.vehicleType) {
      params.append('form', values.vehicleType);
    }

    if (values.location) {
      params.append('location', values.location.split(', ')[0]);
    }

    const queryString = params.toString();

    dispatch(setParams(queryString));
    dispatch(setFilters(values));
    dispatch(getCampers({ params, page: 1 }));
  };

  const handleReset = resetFormik => {
    dispatch(resetState());
    resetFormik();
  };
  return (
    <Formik
      initialValues={userFilter}
      enableReinitialize={true}
      onSubmit={handleSubmit}
    >
      {({ values, resetForm }) => (
        <Form className='max-w-[360px]'>
          <div className='mb-10'>
            <label className=''>
              <p className='text-gray font-normal mb-2'>Location</p>
              <div className='relative'>
                <Field
                  as='select'
                  name='location'
                  className='border-none bg-inputs py-[18px] pl-12 outline-none p-2 rounded-[12px] w-full cursor-pointer appearance-none font-normal'
                >
                  <option value=''>All Locations</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </Field>
                <svg
                  className='absolute left-5 top-[20px]'
                  width={20}
                  height={20}
                >
                  <use href={`${sprite}#icon-map`}></use>
                </svg>
              </div>
            </label>
          </div>
          <div className='mb-8'>
            <p className='text-text-light mb-8 font-medium'>Filters</p>
            <h3 className='font-semibold text-[20px] pb-6 mb-6 border-b border-b-gray-light'>
              Vehicle equipment
            </h3>
            <ul className='max-w-[360px] flex flex-wrap gap-y-2 gap-x-3'>
              <li>
                <label
                  className={`block px-[12px] py-[16px] w-[112px] border rounded-[12px] cursor-pointer mix-blend-multiply transition-border-colors duration-300 ${
                    values.vehicleEquipment.includes('AC')
                      ? 'border-btn-red'
                      : 'border-gray-light'
                  }`}
                >
                  <Field
                    type='checkbox'
                    name='vehicleEquipment'
                    value='AC'
                    className='hidden'
                  />
                  <svg className='m-auto mb-1' width={32} height={32}>
                    <use href={`${sprite}#AC`}></use>
                  </svg>
                  <p className='text-center'>AC</p>
                </label>
              </li>
              <li>
                <label
                  className={`block px-[12px] py-[16px] w-[112px] border rounded-[12px] cursor-pointer mix-blend-multiply transition-border-colors duration-300 ${
                    values.vehicleEquipment.includes('automatic')
                      ? 'border-btn-red'
                      : 'border-gray-light'
                  }`}
                >
                  <Field
                    type='checkbox'
                    name='vehicleEquipment'
                    value='automatic'
                    className='hidden'
                  />
                  <svg className='m-auto mb-1' width={32} height={32}>
                    <use href={`${sprite}#automatic`}></use>
                  </svg>
                  <p className='text-center'>Automatic</p>
                </label>
              </li>
              <li>
                <label
                  className={`block px-[12px] py-[16px] w-[112px] border rounded-[12px] cursor-pointer mix-blend-multiply transition-border-colors duration-300 ${
                    values.vehicleEquipment.includes('kitchen')
                      ? 'border-btn-red'
                      : 'border-gray-light'
                  }`}
                >
                  <Field
                    type='checkbox'
                    name='vehicleEquipment'
                    value='kitchen'
                    className='hidden'
                  />
                  <svg className='m-auto mb-1' width={32} height={32}>
                    <use href={`${sprite}#kitchen`}></use>
                  </svg>
                  <p className='text-center'>Kitchen</p>
                </label>
              </li>
              <li>
                <label
                  className={`block px-[12px] py-[16px] w-[112px] border rounded-[12px] cursor-pointer mix-blend-multiply transition-border-colors duration-300 ${
                    values.vehicleEquipment.includes('TV')
                      ? 'border-btn-red'
                      : 'border-gray-light'
                  }`}
                >
                  <Field
                    type='checkbox'
                    name='vehicleEquipment'
                    value='TV'
                    className='hidden'
                  />
                  <svg className='m-auto mb-1' width={32} height={32}>
                    <use href={`${sprite}#TV`}></use>
                  </svg>
                  <p className='text-center'>TV</p>
                </label>
              </li>
              <li>
                <label
                  className={`block px-[12px] py-[16px] w-[112px] border rounded-[12px] cursor-pointer mix-blend-multiply transition-border-colors duration-300 ${
                    values.vehicleEquipment.includes('bathroom')
                      ? 'border-btn-red'
                      : 'border-gray-light'
                  }`}
                >
                  <Field
                    type='checkbox'
                    name='vehicleEquipment'
                    value='bathroom'
                    className='hidden'
                  />
                  <svg className='m-auto mb-1' width={32} height={32}>
                    <use href={`${sprite}#bathroom`}></use>
                  </svg>
                  <p className='text-center'>Bathroom</p>
                </label>
              </li>
            </ul>
          </div>
          <div className='mb-10'>
            <p className='font-semibold text-[20px] pb-6 mb-6 border-b border-b-gray-light'>
              Vehicle type
            </p>
            <ul className='flex gap-4'>
              <li>
                <label
                  className={`block px-[12px] py-[16px] w-[112px] border rounded-[12px] cursor-pointer mix-blend-multiply transition-border-colors duration-300 ${
                    values.vehicleType === 'panelTruck'
                      ? 'border-btn-red'
                      : 'border-gray-light'
                  }`}
                >
                  <Field
                    type='radio'
                    name='vehicleType'
                    value='panelTruck'
                    className='sr-only'
                  />
                  <svg className='m-auto mb-1' width={32} height={32}>
                    <use href={`${sprite}#icon-bi-grid`}></use>
                  </svg>
                  <p className='text-center'>Van</p>
                </label>
              </li>
              <li>
                <label
                  className={`block px-[12px] py-[16px] w-[112px] border rounded-[12px] cursor-pointer mix-blend-multiply transition-border-colors duration-300 ${
                    values.vehicleType === 'fullyIntegrated'
                      ? 'border-btn-red'
                      : 'border-gray-light'
                  }`}
                >
                  <Field
                    type='radio'
                    name='vehicleType'
                    value='fullyIntegrated'
                    className='sr-only'
                  />
                  <svg className='m-auto mb-1' width={32} height={32}>
                    <use href={`${sprite}#icon-bi-grid-4`}></use>
                  </svg>
                  <p className='text-center'>Integrated</p>
                </label>
              </li>
              <li>
                <label
                  className={`block px-[12px] py-[16px] w-[112px] border rounded-[12px] cursor-pointer mix-blend-multiply transition-border-colors duration-300 ${
                    values.vehicleType === 'alcove'
                      ? 'border-btn-red'
                      : 'border-gray-light'
                  }`}
                >
                  <Field
                    type='radio'
                    name='vehicleType'
                    value='alcove'
                    className='sr-only'
                  />
                  <svg className='m-auto mb-1' width={32} height={32}>
                    <use href={`${sprite}#icon-bi-grid-9`}></use>
                  </svg>
                  <p className='text-center'>Alcove</p>
                </label>
              </li>
            </ul>
          </div>
          <div className='flex justify-between'>
            <SubmitBtn isLoading={isLoading} value='Search' />
            <ResetButton handleReset={() => handleReset(resetForm)} />
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default Filters;
