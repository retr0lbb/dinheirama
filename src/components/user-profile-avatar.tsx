import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Link from 'next/link'

interface UserProfileAvatarProps {
  user: string
  imageSrc: StaticImport
  realName?: string
}

export function UserProfileAvatar({
  user,
  imageSrc,
  realName,
}: UserProfileAvatarProps) {
  return (
    <div className="w-full px-4 hidden md:block">
      <Link
        href={`/user/${user}/profile`}
        className="hidden md:flex items-center border border-transparent 
        cursor-pointer flex-shrink-0 w-full flex-nowrap hover:border-snow-600 transition-all gap-3 p-2 rounded-lg"
      >
        <Image
          src={imageSrc}
          alt="my profile picture"
          className="size-14 p-1 aspect-square rounded-full"
        />
        <div className="h-full w-full flex flex-col gap-1 py-1 px-0.5">
          <div className="w-full flex items-center justify-between gap-4">
            <h1 className="text-xl font-bold text-snow-400">{user}</h1>{' '}
            <p className="text-xs text-apple_green whitespace-nowrap flex items-center justify-center">
              lv 48
            </p>
          </div>
          <p className="text-xs whitespace-nowrap text-snow-600">{realName}</p>
        </div>
      </Link>
    </div>
  )
}

/**
 *
 */
