'use client'
import { LuBanknote } from 'react-icons/lu'
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface NoteProps {
  id: number
  x: number
  y: number
  speed: number
  rotation: number
}

interface freeFalingBankNotesProps {
  isPlaying: boolean
}

export function FreeFallingBanknotes({ isPlaying }: freeFalingBankNotesProps) {
  const mainDivRef = useRef<HTMLDivElement>(null)
  const [notePosition, setNotePosition] = useState<NoteProps[]>([])
  const bankNoteSizes = 50
  const numberOfFallingNotes = 50
  const maxSpeed = 4
  const minSpeed = 1

  function returnValidSpawnPositionToElement(): NoteProps {
    if (mainDivRef.current) {
      const divWidth = mainDivRef.current.offsetWidth
      const divHeight = mainDivRef.current.offsetHeight

      const randomPositionX =
        Math.floor(Math.random() * (divWidth - bankNoteSizes * 2)) +
        bankNoteSizes / 2
      const randomPositionY =
        Math.floor(Math.random() * (divHeight * 0.2 - bankNoteSizes * 2)) +
        bankNoteSizes
      const speed = Math.random() * (maxSpeed - minSpeed + 1) + minSpeed
      const rotation = Math.floor(Math.random() * 360)

      return {
        id: Math.random() * 100,
        x: randomPositionX,
        y: randomPositionY,
        speed: speed,
        rotation,
      }
    }
    return { id: 0 * 100, x: 0, y: 0, speed: 0, rotation: 0 }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const positions = Array.from({ length: numberOfFallingNotes }, () =>
      returnValidSpawnPositionToElement()
    )
    setNotePosition(positions)
  }, [])

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden bg-zinc-950 -z-50"
      ref={mainDivRef}
    >
      {notePosition.map((position, index) => (
        <motion.div
          key={position.id}
          className="absolute"
          initial={{
            top: 0,
            left: `${position.x}px`,
            opacity: 1,
            rotate: -position.rotation,
          }}
          animate={
            isPlaying
              ? {
                  rotate: position.rotation,
                  opacity: 0,
                  scale: 0.5,
                  y: ['-100%', '100vh'],
                  transition: {
                    duration: position.speed,
                    ease: 'linear',
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: 'loop',
                  },
                }
              : {}
          }
          onAnimationComplete={() => {
            setNotePosition(prevNotes =>
              prevNotes.map(note =>
                note.id === position.id
                  ? returnValidSpawnPositionToElement()
                  : note
              )
            )
          }}
        >
          <LuBanknote
            rotate={position.rotation}
            key={index}
            size={bankNoteSizes}
            className="text-ofice_green"
          />
        </motion.div>
      ))}
    </div>
  )
}
