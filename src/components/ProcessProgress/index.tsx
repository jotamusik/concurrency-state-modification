import { FC } from 'react'
import { ProcessProgress } from '../../commonTypes'


interface Props {
  id: string
  value: ProcessProgress
  onUpdateProcessProgress: (id: string, updatedProcessProgress: ProcessProgress) => void
}

export const ProcessProgressView: FC<Props> = ({ id, value }) => {
  return <p>Id: {id} Progress: {value.progress}</p>
}
