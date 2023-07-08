import React, { FC } from 'react'
import './NoConcurrencyManagementExample.css'
import { ProcessProgressView } from '../ProcessProgress'
import { useNoConcurrencyManagement } from '../../context/NoConcurrencyManagementContext'

export const NoConcurrencyManagementExample: FC = () => {
  const { processProgressMap, updateProgress } = useNoConcurrencyManagement()
  const [isStarted, setIsStarted] = React.useState<boolean>(false)

  const handleStartStopProcessProgress = () => {
    if (!isStarted) {
      setIsStarted(true)
    } else {
      window.location.reload()
    }
  }

  React.useEffect(() => {
    setInterval(() => {
      if (isStarted) {
        Object.keys(processProgressMap).forEach((id, index) => {
          updateProgress(id, {
            progress: processProgressMap[id].progress + 2
          })
        })
      }
    }, 2000)
  }, [isStarted, processProgressMap, updateProgress])

  return <div className="Column">
    <h2>No Concurrency Management</h2>
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
        />
      })}
    </div>
  </div>
}
