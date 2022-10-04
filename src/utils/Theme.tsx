import React from 'react';

import { CheckIcon, CloseIcon, StarIcon } from '../components/icons/Icons';

export const subscribeToast = {
  duration: 5000,
  className: '',
  style: {
    padding: 'var(--space-4)',
    backgroundColor: 'var(--black100)',
    color: 'var(--white100)',
    borderRadius: 'var(--radii-4)',
    display: 'flex',
    gap: 'var(--space-1)',
    width: '300px'
  },
  icon: <StarIcon width={'24px'} height={'24px'} />
};

export const successToast = {
  duration: 5000,
  className: '',
  style: {
    padding: 'var(--space-4)',
    backgroundColor: 'var(--black100)',
    color: 'var(--white100)',
    borderRadius: 'var(--radii-4)',
    display: 'flex',
    gap: 'var(--space-1)',
    width: '300px'
  },
  icon: <CheckIcon width={'24px'} height={'24px'} />
};

export const errorToast = {
  duration: 5000,
  className: '',
  style: {
    padding: 'var(--space-4)',
    backgroundColor: 'var(--black100)',
    color: 'var(--white100)',
    borderRadius: 'var(--radii-4)',
    display: 'flex',
    gap: 'var(--space-1)',
    width: '300px'
  },
  icon: <CloseIcon width={'24px'} height={'24px'} />
};

export const loadingToast = {
  className: '',
  style: {
    padding: 'var(--space-4)',
    backgroundColor: 'var(--black100)',
    color: 'var(--white100)',
    borderRadius: 'var(--radii-4)',
    display: 'flex',
    gap: 'var(--space-1)',
    width: '300px',
    justifyContent: 'flex-start !important'
  }
};
