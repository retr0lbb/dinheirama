import { Button } from '../button'
import { Input } from '../input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const ProfileInfoSchema = z.object({
  nickname: z.string().max(255),
  biography: z.string().nullable(),
  profilePic: z.unknown().nullable(),
  profileBanner: z.unknown().nullable(),
})

export interface ProfileInfoFormProps
  extends z.infer<typeof ProfileInfoSchema> {}
interface PersonalInfoFormProps {
  handleSubmitForm: (data: ProfileInfoFormProps) => void
}

export function ProfileInfoForm({ handleSubmitForm }: PersonalInfoFormProps) {
  const { register, formState, handleSubmit, reset } =
    useForm<ProfileInfoFormProps>({
      resolver: zodResolver(ProfileInfoSchema),
    })
  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="px-12 flex flex-col gap-4 overflow-x-auto flex-1 w-full max-h-[500px]"
    >
      <div className="flex flex-col gap-2">
        <Input Title="Apelido de usuario" id="nickname">
          <Input.Field
            type="text"
            id="nickname"
            placeholder="nome_legal255"
            {...register('nickname')}
          />
          {formState.errors.nickname && (
            <p className="text-sm text-danger_red">
              {formState.errors.nickname.message}
            </p>
          )}
        </Input>

        <Input Title="Biografia" id="biography">
          <Input.Field
            type="text"
            id="biography"
            placeholder="sou fulano e tenho tantos anos"
            {...register('biography')}
          />
          {formState.errors.biography && (
            <p className="text-sm text-danger_red">
              {formState.errors.biography.message}
            </p>
          )}
        </Input>

        <Input Title="Imagem de perfil" id="profilePic">
          <Input.Field
            type="file"
            id="profilePic"
            placeholder="Imagem de prerfil"
            {...register('profilePic')}
          />
          {formState.errors.profilePic && (
            <p className="text-sm text-danger_red">
              {formState.errors.profilePic.message}
            </p>
          )}
        </Input>

        <Input Title="Banner de perfil" id="profileBanner">
          <Input.Field
            type="file"
            id="profileBanner"
            placeholder="Imagem de banner"
            {...register('profileBanner')}
          />
          {formState.errors.profilePic && (
            <p className="text-sm text-danger_red">
              {formState.errors.profilePic.message}
            </p>
          )}
        </Input>
      </div>

      <div className="grid place-items-center px-4 gap-4">
        <Button type="submit" sizes="md" className="">
          Registar
        </Button>
      </div>
    </form>
  )
}
