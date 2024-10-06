import type React from 'react'
import type { IconType } from 'react-icons'
import { HiDotsVertical } from 'react-icons/hi'
import { ParticionedSliderProgress } from './slider-shown'
import { CircularProgressWithText } from './circular-progress-with-text'

export interface TasksProps {
  title: string
  Icon: IconType
  children: React.ReactNode
}

function Tasks(props: TasksProps) {
  return (
    <div className="flex flex-col flex-1 items-center h-full justify-center gap-3">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-center gap-2 text-3xl">
          <props.Icon className="text-snow-200 text-2xl" />
          <h1 className="font-bold text-3xl text-snow-200">{props.title}</h1>
        </div>

        <CircularProgressWithText
          sizes="xs"
          numberOfCompletions={1}
          totalNumber={3}
        />
      </div>
      <div className="flex flex-1 w-full max-h-full flex-col gap-3 overflow-y-auto">
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
  Icon: IconType
}

function Task(props: TaskProps) {
  return (
    <div className="w-full flex-shrink-0 flex flex-col px-4 py-2 bg-snow-800 border border-snow-600/40 rounded-lg overflow-hidden gap-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <props.Icon className="text-xl text-ofice_green" />
            <h2 className="text-snow-400 font-bold text-xl">{props.title}</h2>
          </div>
          <p className="text-sm text-snow-600">{props.description}</p>
        </div>

        <div className="p-1 flex items-center justify-center text-snow-600 cursor-pointer transition-all hover:text-snow-400">
          <HiDotsVertical className="text-2xl" />
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
