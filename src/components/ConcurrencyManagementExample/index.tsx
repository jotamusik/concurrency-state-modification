import React, { FC } from 'react'
import './ConcurrencyManagementExample.css'
import { useConcurrencyManagement } from '../../context/ConcurrencyManagementContext'
import { ProcessProgressView } from '../ProcessProgress'
import { ProcessProgressMap } from '../../commonTypes'

export const ConcurrencyManagementExample: FC = () => {
  const { processProgressMap, updateProgress } = useConcurrencyManagement()
  const [isStarted, setIsStarted] = React.useState<boolean>(false)

  const handleStartStopProcessProgress = () => {
    if (!isStarted) {
      setIsStarted(true)
    } else {
      setIsStarted(false)
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
    <h2>Concurrency Management</h2>
    <button onClick={handleStartStopProcessProgress}>
      {isStarted ? "Stop" : "Start"}
    </button>
    <ProcessProgressList processProgressMap={processProgressMap}/>
  </div>
}

const ProcessProgressList: FC<{ processProgressMap: ProcessProgressMap }> = ({ processProgressMap }) => {
  const keys = React.useMemo(() => Object.keys(processProgressMap), [processProgressMap])
  return (
    <div>
      {keys.map(id => {
        const processProgress = processProgressMap[id]
        return <ProcessProgressView
          key={id}
          id={id}
          value={processProgress}
        />
      })}
    </div>
  )
}
