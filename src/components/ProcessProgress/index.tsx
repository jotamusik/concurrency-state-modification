import { FC } from 'react'
import { ProcessProgress } from '../../commonTypes'


interface Props {
  id: string
  value: ProcessProgress
}

export const ProcessProgressView: FC<Props> = ({ id, value }) => {
  return <p>Id: {id} Progress: {value.progress}</p>
}
