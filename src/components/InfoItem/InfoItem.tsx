import React from 'react';
import './InfoItem.scss';
import { InfoItemInterface } from '../../interfaces/interfaces';

export default function InfoItem({ option, value }: InfoItemInterface) {
  return (
    <div>
      <p className='character-info-h'>{option}</p>
      <p className='character-info-descr'>{value}</p>
      <hr className='divider' />
    </div>
  );
}
