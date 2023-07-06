import React, { FC } from 'react'
import {
  ProcessProgress,
  processProgressManagerContextDefaultValue,
  ProcessProgressManagerContextValue,
  ProcessProgressMap,
  WithChildrenProps
} from '../commonTypes'

const NoConcurrencyManagementContext = React.createContext<ProcessProgressManagerContextValue>(processProgressManagerContextDefaultValue)
export const NoConcurrencyManagementProvider: FC<WithChildrenProps & {
  initialValue?: ProcessProgressMap
}> = ({ initialValue, children }) => {
  const [processProgressMap, setProcessProgressMap] = React.useState<ProcessProgressMap>(initialValue ?? {})

  const updateProgress = (id: string, updatedProcessProgress: ProcessProgress) => {
    setProcessProgressMap({
      ...processProgressMap,
      [id]: updatedProcessProgress,
    })
  }

  return <NoConcurrencyManagementContext.Provider value={{ processProgressMap, updateProgress }}>
    {children}
  </NoConcurrencyManagementContext.Provider>
}
export const useNoConcurrencyManagement = () => React.useContext(NoConcurrencyManagementContext)
