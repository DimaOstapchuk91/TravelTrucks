import toast from 'react-hot-toast';

export const errToast = message => {
  toast.error(`${message}`, {
    duration: 4000,
    position: 'top-right',

    style: {
      borderRadius: '12px',
      background: 'var(--inputs)',
      color: 'var(--btn-red)',
      border: '1px solid var(--btn-red)',
    },
    icon: '😥',
  });
};

export const successfullyToast = message => {
  toast.success(`${message}`, {
    duration: 4000,
    position: 'top-right',

    style: {
      borderRadius: '20px',
      background: 'var(--inputs)',
      color: 'var(--text-light)',
    },

    className: '',
    icon: '✅ ',
  });
};
