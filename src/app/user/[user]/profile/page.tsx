import Image from 'next/image'
import PROFILEPIC from '@/static/ralsei.jpg'
import BGIMAGE from '@/static/bg-image.webp'
import TabSwitch from '@/components/tabs-switch/index'

export default function ProfilePage() {
  return (
    <section className="w-full h-full flex flex-col gap-2 p-5">
      <div className="flex w-full items-center justify-around relative">
        <Image
          src={BGIMAGE}
          alt="your wallpaper"
          className="absolute inset-0 w-full h-full object-cover "
        />
        <div className="flex w-full items-center justify-center gap-4 z-10 bg-snow-900/60 p-2">
          <Image
            alt="your profile picture"
            className="rounded-xl size-48"
            src={PROFILEPIC}
          />
          <div className="flex flex-col text-snow-400 w-full">
            <h1 className="text-7xl font-bold leading-none">retr0lbb</h1>
            <p className="text-sm text-snow-600">Henrique Barbosa Sampaio</p>
            <p className="text-md text-snow-600">
              lvl <span className="text-ofice_green font-bold text-md">48</span>
            </p>
          </div>
        </div>
      </div>

      <TabSwitch.root />
    </section>
  )
}
