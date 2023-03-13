import React from 'react'
import { Link } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import InfoItem from '../components/InfoItem/InfoItem';

export default function CharacterPage() {  
  return (
    <>
      <Link to='..' relative="path">
        <ArrowBackIcon />
        Back to homepage
      </Link>
      <img />
      <p>Information</p>
      <InfoItem/>
      <InfoItem/>
      <InfoItem/>
      <InfoItem/>
      <InfoItem/>
    </>
  )
}