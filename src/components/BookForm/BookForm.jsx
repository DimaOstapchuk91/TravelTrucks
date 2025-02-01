import { Formik, Form, Field, ErrorMessage } from 'formik';
import SubmitBtn from '../buttons/SubmitBtn/SubmitBtn.jsx';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/campers/selectors.js';
import DatePicker from 'react-datepicker';
import { orderSchemaBook } from '../../utils/validations.js';
import 'react-datepicker/dist/react-datepicker.css';
import { successfullyToast } from '../../utils/toast.js';

const BookForm = () => {
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (e, options) => {
    successfullyToast('Successfully booked');
    options.resetForm();
  };

  return (
    <div className='p-11 border border-gray-light rounded-[10px] w-[640px]'>
      <Formik
        initialValues={{ name: '', email: '', date: '', comment: '' }}
        validationSchema={orderSchemaBook}
        onSubmit={handleSubmit}
      >
        <Form>
          <h3 className='text-[20px] font-semibold mb-2'>
            Book your campervan now
          </h3>
          <p className='text-gray mb-6'>
            Stay connected! We are always ready to help you.
          </p>
          <ul className='flex flex-col mb-6 gap-[14px]'>
            <li>
              <label className='relative'>
                <Field
                  className='p-[18px] outline-none w-full bg-inputs rounded-[12px]'
                  type='text'
                  name='name'
                  placeholder='Name*'
                />
                <ErrorMessage
                  className='text-btn-red absolute top-[-20px] right-[10px]'
                  name='name'
                  component='p'
                />
              </label>
            </li>
            <li>
              <label className='relative'>
                <Field
                  className='p-[18px] outline-none w-full bg-inputs rounded-[12px]'
                  type='email'
                  name='email'
                  placeholder='Email*'
                />
                <ErrorMessage
                  className='text-btn-red absolute top-[-20px] right-[10px]'
                  name='email'
                  component='p'
                />
              </label>
            </li>
            <li>
              <label className='relative'>
                <Field name='date'>
                  {({ field, form }) => (
                    <DatePicker
                      {...field}
                      selected={field.value ? new Date(field.value) : null}
                      onChange={date => form.setFieldValue('date', date)}
                      placeholderText='Booking date*'
                      minDate={new Date()}
                      shouldCloseOnSelect={true}
                    />
                  )}
                </Field>
                <ErrorMessage
                  className='text-btn-red absolute top-[-20px] right-[10px]'
                  name='date'
                  component='p'
                />
              </label>
            </li>
            <li>
              <label className='relative'>
                <Field
                  className='p-[18px] outline-none resize-none h-[118px] w-full bg-inputs rounded-[12px]'
                  as='textarea'
                  name='comment'
                  placeholder='Comment'
                />
                <ErrorMessage
                  className='text-btn-red absolute top-[-20px] right-[10px]'
                  name='comment'
                  component='p'
                />
              </label>
            </li>
          </ul>
          <div className='w-full'>
            <div className='m-auto w-[166px]'>
              <SubmitBtn isLoading={isLoading} value='Send' />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default BookForm;
