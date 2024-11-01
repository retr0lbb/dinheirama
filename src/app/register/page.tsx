'use client'
import { Button } from '@/components/button'
import { FaApple, FaGoogle } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { useForm } from 'react-hook-form'
import { ProgressMap } from '@/components/progress-map'
import { useState } from 'react'
import {
  PersonalInfoForm,
  type RegisterLoginForm,
} from '@/components/forms/personal-info-form'
import {
  BankInfoForm,
  type BankRegister,
} from '@/components/forms/bank-info-form'
import {
  IaPreferencesForm,
  type IaPreferencesRegisterForm,
} from '@/components/forms/ia-preferences-form'
import {
  ProfileInfoForm,
  type ProfileInfoFormProps,
} from '@/components/forms/profile-info-form'

enum PROGRESS_STEPS_ENUM {
  NONE = 0,
  PERSONAL_INFO = 1,
  BANK_DATA = 2,
  IA_DATA = 3,
  PROFILE = 4,
}

export default function Register() {
  const { reset } = useForm()

  async function handleRegisterPersonalSubmit(data: RegisterLoginForm) {
    console.log(data)
    reset()
    handleProgressiveProgress()
  }
  async function handleRegisterBankInfo(data: BankRegister) {
    console.log(data)
    reset()
    handleProgressiveProgress()
  }
  async function handleRegisterIaPreferences(data: IaPreferencesRegisterForm) {
    console.log(data)
    reset()
    handleProgressiveProgress()
  }
  async function handleRegisterProfile(data: ProfileInfoFormProps) {
    console.log(data)
    reset()
    handleProgressiveProgress()
  }

  const [progressStep, setProgressStep] = useState(
    PROGRESS_STEPS_ENUM.PERSONAL_INFO
  )

  function handleProgressiveProgress() {
    if (progressStep <= PROGRESS_STEPS_ENUM.PROFILE) {
      setProgressStep(prev => prev + 1)
    }
    console.log(progressStep)
  }
  return (
    <main className="h-screen bg-black flex items-center justify-center antialiased overflow-y-hidden">
      <div className="flex flex-col gap-8">
        <header className="flex items-center justify-center flex-col gap-2">
          <h1 className="text-2xl lg:text-5xl text-snow-400 font-bold">
            Quer começar a economizar?
          </h1>
          <p className="lg:text-xl text-snow-600">
            Crie sua conta hoje mesmo de forma gratuita
          </p>
        </header>

        <div className="w-full p-0 lg:p-4">
          <ProgressMap>
            <ProgressMap.ProgressNode
              passNumber={1}
              onClick={() => setProgressStep(PROGRESS_STEPS_ENUM.PERSONAL_INFO)}
              completion={
                progressStep === PROGRESS_STEPS_ENUM.PERSONAL_INFO
                  ? 'actual'
                  : progressStep > PROGRESS_STEPS_ENUM.PERSONAL_INFO
                    ? 'completed'
                    : 'upToCome'
              }
              nodeName="informações pessoais"
            />
            <ProgressMap.ProgressLinkBar
              completion={
                progressStep === PROGRESS_STEPS_ENUM.BANK_DATA
                  ? 'actual'
                  : progressStep > PROGRESS_STEPS_ENUM.BANK_DATA
                    ? 'completed'
                    : 'upToCome'
              }
            />
            <ProgressMap.ProgressNode
              onClick={() => setProgressStep(PROGRESS_STEPS_ENUM.BANK_DATA)}
              completion={
                progressStep === PROGRESS_STEPS_ENUM.BANK_DATA
                  ? 'actual'
                  : progressStep > PROGRESS_STEPS_ENUM.BANK_DATA
                    ? 'completed'
                    : 'upToCome'
              }
              nodeName="dados bancarios"
              passNumber={2}
            />
            <ProgressMap.ProgressLinkBar
              completion={
                progressStep === PROGRESS_STEPS_ENUM.IA_DATA
                  ? 'actual'
                  : progressStep > PROGRESS_STEPS_ENUM.IA_DATA
                    ? 'completed'
                    : 'upToCome'
              }
            />
            <ProgressMap.ProgressNode
              onClick={() => setProgressStep(PROGRESS_STEPS_ENUM.IA_DATA)}
              completion={
                progressStep === PROGRESS_STEPS_ENUM.IA_DATA
                  ? 'actual'
                  : progressStep > PROGRESS_STEPS_ENUM.IA_DATA
                    ? 'completed'
                    : 'upToCome'
              }
              passNumber={3}
              nodeName="Preferencias de IA"
            />

            <ProgressMap.ProgressLinkBar
              completion={
                progressStep === PROGRESS_STEPS_ENUM.PROFILE
                  ? 'actual'
                  : progressStep > PROGRESS_STEPS_ENUM.PROFILE
                    ? 'completed'
                    : 'upToCome'
              }
            />
            <ProgressMap.ProgressNode
              onClick={() => setProgressStep(PROGRESS_STEPS_ENUM.PROFILE)}
              completion={
                progressStep === PROGRESS_STEPS_ENUM.PROFILE
                  ? 'actual'
                  : progressStep > PROGRESS_STEPS_ENUM.PROFILE
                    ? 'completed'
                    : 'upToCome'
              }
              passNumber={4}
              nodeName="Personalização de perfil"
            />
          </ProgressMap>
        </div>

        <div className="flex flex-col gap-2">
          {progressStep === PROGRESS_STEPS_ENUM.PERSONAL_INFO && (
            <PersonalInfoForm handleSubmitForm={handleRegisterPersonalSubmit} />
          )}
          {progressStep === PROGRESS_STEPS_ENUM.BANK_DATA && (
            <BankInfoForm handleSubmitForm={handleRegisterBankInfo} />
          )}
          {progressStep === PROGRESS_STEPS_ENUM.IA_DATA && (
            <IaPreferencesForm handleSubmitForm={handleRegisterIaPreferences} />
          )}
          {progressStep === PROGRESS_STEPS_ENUM.PROFILE && (
            <ProfileInfoForm handleSubmitForm={handleRegisterProfile} />
          )}
          {progressStep > PROGRESS_STEPS_ENUM.PROFILE && (
            <div className="flex flex-col gap-2 items-center justify-center py-28 px-4">
              <h1 className="text-snow-400 text-2xl lg:text-4xl">
                Cadastro concluido parabens! 😉
              </h1>
              <p className="text-snow-600 lg:text-lg">
                Enviamos um link para a confirmação de email
              </p>
            </div>
          )}
          <div className="w-full flex items-center justify-center text-snow-600 text-xs px-14">
            <div className="bg-snow-600 w-full h-px rounded" />
            <p className="mx-5">OU</p>
            <div className="bg-snow-600 w-full h-px rounded" />
          </div>

          <div className="flex items-center justify-around gap-2 text-lg">
            <Button
              variant="secondary"
              sizes="sm"
              className="flex flex-row h-14 md:h-10 aspect-square md:aspect-auto text-2xl md:text-lg rounded-full md:rounded-lg flex-grow-0 flex-shrink-0 w-auto"
            >
              <div className="flex items-center justify-center gap-2">
                <FaGoogle className="text-snow-400" />
                <p className="hidden md:block text-snow-600">
                  Entre com o Google.
                </p>
              </div>
            </Button>

            <Button
              variant="secondary"
              sizes="sm"
              className="flex flex-row h-14 md:h-10 aspect-square md:aspect-auto text-2xl md:text-lg rounded-full md:rounded-lg flex-grow-0 flex-shrink-0 w-auto"
            >
              <div className="flex items-center justify-center gap-2">
                <FaXTwitter className="text-snow-400" />
                <p className="text-snow-600 hidden md:block">
                  Entre com Twitter.
                </p>
              </div>
            </Button>

            <Button
              variant="secondary"
              sizes="sm"
              className="flex flex-row h-14 md:h-10 aspect-square md:aspect-auto text-2xl md:text-lg rounded-full md:rounded-lg flex-grow-0 flex-shrink-0 w-auto"
            >
              <div className="flex items-center justify-center gap-2">
                <FaApple className="text-snow-400" />
                <p className="text-snow-600 hidden md:block">
                  Entre com Apple.
                </p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
