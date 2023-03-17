import React from 'react'

type Props= {
  option: string,
  value: string,
}

export default function InfoItem({option, value}: Props) {
  return (
    <div>
      <p>{option}</p>
      <p>{value}</p>
      <hr/>
    </div>
  )
}
