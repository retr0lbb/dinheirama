import Image, { StaticImageData } from 'next/image'
import { tv, VariantProps } from 'tailwind-variants'

const AvatarVariants = tv({
  base: 'overflow-hidden rounded-full bg-yellow-500 flex items-center justify-center outline outline-offset-1 outline-apple_green',

  variants: {
    sizes: {
      sm: 'size-10',
      md: 'size-14',
      lg: 'size-16',
    },
  },

  defaultVariants: {
    sizes: 'sm',
  },
})

interface AvatarProps extends VariantProps<typeof AvatarVariants> {
  href?: StaticImageData
  fallback: string
  className?: string
}

export function Avatar({ sizes, className, fallback, href }: AvatarProps) {
  return (
    <div className={AvatarVariants({ sizes, className })}>
      {href && (
        <Image
          src={href}
          alt="Imagem de avatar do usuario, imagem pequena em formato circular"
        />
      )}

      {!href && <p>{fallback}</p>}
    </div>
  )
}
