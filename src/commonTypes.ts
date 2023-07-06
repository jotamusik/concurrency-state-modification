import React from 'react'

export interface WithChildrenProps {
  children: React.JSX.Element
}

export type ProcessProgressMap = Record<string, ProcessProgress>

export interface ProcessProgress {
  progress: number
}

interface ProcessProgressMapExposer {
  processProgressMap: ProcessProgressMap
}

interface ProcessProgressModifier {
  updateProgress: (id: string, updatedProcessProgress: ProcessProgress) => void
}

export type ProcessProgressManagerContextValue = ProcessProgressModifier & ProcessProgressMapExposer

export const processProgressManagerContextDefaultValue: ProcessProgressManagerContextValue = {
  processProgressMap: {},
  updateProgress: () => {
  },
}
