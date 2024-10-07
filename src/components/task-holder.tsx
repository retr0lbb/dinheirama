import type React from 'react'
import type { IconType } from 'react-icons'
import { ParticionedSliderProgress } from './slider-shown'
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa'
import { Button } from './button'

export interface TasksProps {
  title: string
  Icon: IconType
  children: React.ReactNode
}

function Tasks(props: TasksProps) {
  return (
    <div className="flex flex-col flex-1 items-center h-full justify-center gap-3 mt-16">
      <div className="flex items-center justify-center gap-2 text-3xl">
        <props.Icon className="text-snow-600 text-2xl" />
        <h1 className="font-bold text-3xl text-snow-400">{props.title}</h1>
      </div>
      <div className="w-full h-px bg-snow-800" />
      <div className="flex w-full h-full flex-col gap-4 overflow-y-hidden pt-2 pb-10">
        {props.children}
      </div>
    </div>
  )
}

interface TaskProps {
  title: string
  description: string
  frequency: number
  numberOfCompletions?: number
  isComplete?: boolean
}

function Task(props: TaskProps) {
  return (
    <div
      className="w-full flex-shrink-0 flex flex-col px-4 py-2 bg-snow-800 border 
    cursor-pointer hover:border-ofice_green group hover:shadow-inner shadow-apple_green 
    transition-all border-snow-600/40 rounded-lg overflow-hidden gap-4"
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          {props.isComplete ? (
            <FaRegCheckCircle className="text-xl text-ofice_green" />
          ) : (
            <FaRegCircle className="text-xl text-snow-600" />
          )}
          <h2
            className={`text-snow-600 group-hover:text-snow-400 group-hover:text-lg transition-all text-md ${props.isComplete && 'line-through'}`}
          >
            {props.title}
          </h2>
        </div>
      </div>

      <div className="group-hover:flex flex-1 flex-col h-full flex-grow w-full hidden gap-3">
        <div>
          <p className="text-snow-600 text-sm">{props.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[#050702] bg-apple_green/40 text-sm font-bold rounded-md px-2 py-0.5">
            100xp
          </div>
          <div>
            <Button variant="secondary" sizes="sm">
              Concluido
            </Button>
          </div>
        </div>
      </div>

      <ParticionedSliderProgress
        numberOfDivisions={props.frequency}
        numberOfCompletions={props.numberOfCompletions ?? 0}
      />
    </div>
  )
}

Tasks.Task = Task

export default Tasks
