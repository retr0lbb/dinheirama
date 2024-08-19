"use client";
import { Banknote } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";

interface NoteProps{
    id: number, 
    x: number, 
    y: number, 
    speed: number, 
    rotation: number
}

export function FreeFallingBanknotes() {
    const mainDivRef = useRef<HTMLDivElement>(null);
    const [notePosition, setNotePosition] = useState<NoteProps[]>([]);
    const bankNoteSizes = 50;
    const numberOfFallingNotes = 60;
    const maxSpeed = 3
    const minSpeed = 1

    function returnValidSpawnPositionToElement(): NoteProps {
        if (mainDivRef.current) {
            const divWidth = mainDivRef.current.offsetWidth;
            const divHeight = mainDivRef.current.offsetHeight;

            const randomPositionX = Math.floor(Math.random() * (divWidth - bankNoteSizes * 2)) + bankNoteSizes;
            const randomPositionY = Math.floor(Math.random() * (divHeight * 0.2 - bankNoteSizes * 2)) + bankNoteSizes;
            const speed = Math.random() * (maxSpeed - minSpeed + 1) + minSpeed;
            const rotation = Math.floor(Math.random() * 360)

            return {id: Math.random() * 100, x: randomPositionX, y: randomPositionY, speed: speed, rotation}
        }
        return {id: 0 * 100, x: 0, y: 0, speed: 0, rotation: 0}
    }

    useEffect(() => {
        const positions = Array.from({length: numberOfFallingNotes}, () => returnValidSpawnPositionToElement())
        setNotePosition(positions)
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden " ref={mainDivRef}>
            {notePosition.map((position, index) => (
                <motion.div 
                    key={position.id}
                    className="absolute"
                    initial={{top: 0, left: `${position.x}px`, opacity: 1}}  
                    animate={{
                        rotate: position.rotation,
                        opacity: 0,
                        y: ["-100px", "100vh"],
                        transition: {
                            duration: position.speed,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop"
                        }
                    }}
                    onAnimationComplete={() => {
                        const newNote = returnValidSpawnPositionToElement()
                        position.x = newNote.x
                    }}
                >
                    <Banknote 
                        key={index} 
                        size={bankNoteSizes} 
                        className="text-green-600"
                    />
                </motion.div>
            ))}
        </div>
    );
}
