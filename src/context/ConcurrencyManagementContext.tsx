import React, { FC } from 'react'
import {
  ProcessProgress,
  processProgressManagerContextDefaultValue,
  ProcessProgressManagerContextValue,
  ProcessProgressMap,
  WithChildrenProps
} from '../commonTypes'

const ConcurrencyManagementContext = React.createContext<ProcessProgressManagerContextValue>(processProgressManagerContextDefaultValue)
export const ConcurrencyManagementProvider: FC<WithChildrenProps & {
  initialValue?: ProcessProgressMap
}> = ({ initialValue, children }) => {
  const [processProgressMap, setProcessProgressMap] = React.useState<ProcessProgressMap>(initialValue ?? {})

  const updateProgress = (id: string, updatedProcessProgress: ProcessProgress) => {
    setProcessProgressMap((previousProcessProgressMap) => ({
      ...previousProcessProgressMap,
      [id]: updatedProcessProgress,
    }))
  }

  return <ConcurrencyManagementContext.Provider value={{ processProgressMap, updateProgress }}>
    {children}
  </ConcurrencyManagementContext.Provider>
}
export const useConcurrencyManagement = () => React.useContext(ConcurrencyManagementContext)
