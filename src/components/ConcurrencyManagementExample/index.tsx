import React, { FC } from 'react'
import './ConcurrencyManagementExample.css'
import { useConcurrencyManagement } from '../../context/ConcurrencyManagementContext'
import { ProcessProgressView } from '../ProcessProgress'

export const ConcurrencyManagementExample: FC = () => {
  const { processProgressMap, updateProgress } = useConcurrencyManagement()

  const [isStarted, setIsStarted] = React.useState<boolean>(false)
  const handleStartStopProcessProgress = () => {
    if (!isStarted) {
      Object.keys(processProgressMap).forEach(id => {
        setInterval(() => {
          updateProgress(id, { progress: processProgressMap[id].progress + 2 })
        }, 2000)
      })
      setIsStarted(true)
    } else {
      setIsStarted(false)
    }
  }

  return <div className="Column">
    <h2>Concurrency Management</h2>
    <button onClick={handleStartStopProcessProgress}>
      {isStarted ? "Stop" : "Start"}
    </button>
    <div>
      {Object.keys(processProgressMap).map(id => {
        const processProgress = processProgressMap[id]
        return <ProcessProgressView
          key={id}
          id={id}
          value={processProgress}
          onUpdateProcessProgress={updateProgress}
        />
      })}
    </div>
  </div>
}
