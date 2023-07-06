import React from 'react'
import './App.css'
import { NoConcurrencyManagementProvider } from './context/NoConcurrencyManagementContext'
import { ConcurrencyManagementProvider } from './context/ConcurrencyManagementContext'
import { ConcurrencyManagementExample } from './components/ConcurrencyManagementExample'
import { NoConcurrencyManagementExample } from './components/NoConcurrencyManagementExample'
import { ProcessProgressMap } from './commonTypes'

export const initialConcurrencyManagementProcessProgressMap: ProcessProgressMap = {
  '1': { progress: 1 },
  '2': { progress: 3 },
  '3': { progress: 5 },
}

export const initialNoConcurrencyManagementProcessProgressMap: ProcessProgressMap = {
  '1': { progress: 0 },
  '2': { progress: 2 },
  '3': { progress: 4 },
}

export const App = () => {
  return (
    <div className="App">
      <NoConcurrencyManagementProvider initialValue={initialNoConcurrencyManagementProcessProgressMap}>
        <NoConcurrencyManagementExample/>
      </NoConcurrencyManagementProvider>
      <ConcurrencyManagementProvider initialValue={initialConcurrencyManagementProcessProgressMap}>
        <ConcurrencyManagementExample/>
      </ConcurrencyManagementProvider>
    </div>
  )
}
