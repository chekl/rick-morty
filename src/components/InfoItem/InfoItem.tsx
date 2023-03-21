import React from 'react'
import './InfoItem.scss'

type Props= {
  option: string,
  value: string,
}

export default function InfoItem({option, value}: Props) {
  return (
    <div>
      <p className='character-info-h'>{option}</p>
      <p className='character-info-descr'>{value}</p>
      <hr className='divider'/>
    </div>
  )
}
