import Image from 'next/image'
import PROFILEPIC from '@/static/ralsei.jpg'

export default function ProfilePage() {
  return (
    <section className="w-full h-full flex flex-col gap-2 p-5">
      <div className="flex bg-red-500 w-full items-center justify-around">
        <div className="flex items-center justify-center">
          <Image
            alt="your profile picture"
            className="rounded-xl size-48"
            src={PROFILEPIC}
          />
          <div>
            <h1>retr0lbb</h1>
            <p>Henrique Barbosa Sampaio</p>
          </div>
        </div>
      </div>
    </section>
  )
}
