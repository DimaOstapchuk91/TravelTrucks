import * as Yup from 'yup';

const emailValid = Yup.string()
  .email('Invalid email format')
  .min(3, 'Minimum 3 characters')
  .max(50, 'Maximum 50 characters')
  .required('Email is required')
  .test('dot-after-at', 'Email must have a dot after "@"', value => {
    return value && value.includes('@') && value.split('@')[1].includes('.');
  });

const nameValid = Yup.string()
  .min(3, 'Minimum 3 characters')
  .max(50, 'Maximum 50 characters')
  .required('Name is required');

const dateValid = Yup.date()
  .required('Date is required')
  .min(new Date(), 'Date cannot be in the past')
  .typeError('Invalid date format');

const commentValid = Yup.string().max(
  200,
  'Comment cannot be more than 200 characters'
);

export const orderSchemaBook = Yup.object({
  name: nameValid,
  email: emailValid,
  date: dateValid,
  comment: commentValid,
});
