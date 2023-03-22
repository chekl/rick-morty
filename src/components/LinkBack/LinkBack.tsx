import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './LinkBack.scss';

export default function LinkBack() {
  return (
    <Link className='link-back' to='..' relative='path'>
      <ArrowBackIcon />
      GO BACK
    </Link>
  );
}
