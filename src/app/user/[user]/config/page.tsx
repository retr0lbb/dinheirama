'use client'
import { Tabs } from '@/components/Tabs'
import { Input } from '@/components/input'
import Image from 'next/image'
import { useState } from 'react'
import RALSEI from '@/static/ralsei.jpg'
import { FaPlus } from 'react-icons/fa6'
import { SiNubank, SiMastercard } from 'react-icons/si'
import { Button } from '@/components/button'
import { RiVisaLine } from 'react-icons/ri'
import { BankAccountCard } from '@/components/bank-account-card'
import { RadioButton } from '@/components/radio-button'
import something from '@/static/bg-image.webp'
import { Modal } from '@/components/modal'

enum MODALOPEN {
  NONE = 0,
  DELET_ACCOUNT = 1,
  CHANGE_EMAIL = 2,
  CONNECT_ACCOUNTS = 3,
}

export default function ConfigurationPage() {
  const [selectedTab, setSelectedTab] = useState('user')
  const [modalOpen, setModalOpen] = useState(MODALOPEN.NONE)

  return (
    <section className="w-full h-full flex flex-col gap-2 p-5">
      <Tabs>
        <div className="flex">
          <Tabs.Buttons>
            <Tabs.Button
              tabId="user"
              tabName="Usuario"
              value={'user'}
              onChange={e => setSelectedTab(e.target.value)}
              isSelected={selectedTab === 'user'}
            />
            <Tabs.Button
              tabId="accounts"
              value={'accounts'}
              tabName="Contas conectadas"
              onChange={e => setSelectedTab(e.target.value)}
              isSelected={selectedTab === 'accounts'}
            />

            <Tabs.Button
              tabId="preferences"
              value={'preferences'}
              tabName="Preferencias"
              onChange={e => setSelectedTab(e.target.value)}
              isSelected={selectedTab === 'preferences'}
            />
          </Tabs.Buttons>
        </div>

        {selectedTab === 'user' && (
          <Tabs.Tab tabName="Usuario">
            <div className="w-full flex flex-col gap-8 items-center justify-center flex-shrink-0">
              <div className="text-center">
                <h1 className="text-5xl text-snow-400">
                  Configurações de usuario
                </h1>
                <p className="text-lg text-snow-600">
                  Mude o estilo do seu perfil mudando sua foto, banner e até o
                  nickname
                </p>
              </div>
              <form
                onSubmit={e => e.preventDefault()}
                action=""
                className="m-auto min-w-[1000px] h-full flex flex-col gap-4"
              >
                <div className="flex flex-col gap-2">
                  <label className="text-snow-600 px-4">foto de perfil</label>
                  <div className="px-4">
                    <Image
                      id="profileImage"
                      className="size-40 rounded-lg cursor-pointer"
                      alt="your profile picture"
                      src={RALSEI}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-snow-600 px-4">
                    Banner de usuario
                  </label>
                  <div className="px-4">
                    <Image
                      id="bannerImage"
                      className="h-40 w-full rounded-lg cursor-pointer object-cover"
                      alt="your profile picture"
                      src={something}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Input
                    variant="undelined"
                    border="none"
                    Title="Nickname"
                    id="nickname"
                  >
                    <Input.Field id="nickname" defaultValue={'retr0lbb'} />
                  </Input>
                </div>

                <div className="flex flex-col gap-2">
                  <Input
                    variant="undelined"
                    border="none"
                    Title="Nome completo"
                    id="fullname"
                  >
                    <Input.Field
                      type="text"
                      id="fullname"
                      defaultValue={'Henrique Barbosa Sampaio'}
                    />
                  </Input>
                </div>

                <div className="flex flex-col gap-2">
                  <Input
                    variant="undelined"
                    border="none"
                    id="birthdate"
                    Title="Data de nascimento"
                  >
                    <Input.Field id="birthdate" type="date" />
                  </Input>
                </div>

                <div className="flex flex-col gap-2">
                  <Input variant="undelined" border="none" id="cpf" Title="CPF">
                    <Input.Field
                      type="text"
                      id="cpf"
                      defaultValue={'173.269.297-18'}
                    />
                  </Input>
                </div>

                <div className="flex flex-col gap-2">
                  <Input
                    variant="undelined"
                    id="bio"
                    border="none"
                    Title="Biografia"
                  >
                    <Input.Field
                      id="bio"
                      type="text"
                      defaultValue={
                        'Sou o Lucas, tenho 18 anos e moro no Brasil. Amo videogames e sou parte da comunidade furry. Curto criar personagens e explorar mundos virtuais, além de me conectar com outras pessoas que compartilham desses hobbies.'
                      }
                    />
                  </Input>
                </div>

                <div className="flex flex-col gap-2 border mt-4 border-danger_red rounded-xl p-2">
                  <div className="text-danger_red mx-2">
                    <p>Zona perigosa</p>
                  </div>
                  <div className="w-full flex items-center justify-start gap-2">
                    <div>
                      <Button
                        onClick={() => setModalOpen(MODALOPEN.DELET_ACCOUNT)}
                        variant="danger"
                      >
                        Excluir conta
                      </Button>
                    </div>
                    <div>
                      <Button
                        onClick={() => setModalOpen(MODALOPEN.CHANGE_EMAIL)}
                        variant="danger"
                      >
                        Mudar endereço de email
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Tabs.Tab>
        )}

        {selectedTab === 'accounts' && (
          <Tabs.Tab tabName="Usuario">
            <div className="w-full h-full flex-col gap-8 flex items-center justify-center flex-shrink-0">
              <div className="text-center">
                <h1 className="text-5xl text-snow-400">Contas conectadas</h1>
                <p className="text-lg text-snow-600">
                  Conecte sua conta bancaria para que possamos acessar o
                  extrato, nenhuma informação como senhas ou outros dados
                  pessoais serão divulgados
                </p>
              </div>
              <div className="flex min-w-[1000px] flex-col p-2 gap-5 h-full">
                <div className="flex flex-col gap-4">
                  <div className="flex w-full items-center gap-2 justify-between">
                    <h2 className="text-xl flex flex-1 w-full text-snow-600 font-bold">
                      Contas bancarias
                    </h2>
                    <div>
                      <Button
                        onClick={() => setModalOpen(MODALOPEN.CONNECT_ACCOUNTS)}
                      >
                        <FaPlus />
                        Adicionar Nova
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-1 items-center w-full gap-3 flex-col">
                    <BankAccountCard
                      accountNumber="1292-0"
                      accountOwner="Henrique Barbosa Sampaio"
                      accountType="Poupança"
                      balance={127891.76}
                      BankLogo={<SiNubank />}
                      ConectedCardLogo={
                        <SiMastercard className="text-3xl text-snow-400 cursor-pointer" />
                      }
                    />

                    <BankAccountCard
                      accountNumber="4600-X"
                      accountOwner="Henrique Barbosa Sampaio"
                      accountType="Corrente"
                      balance={623.81}
                      BankLogo={<SiNubank />}
                      ConectedCardLogo={
                        <RiVisaLine className="text-3xl text-snow-400 cursor-pointer" />
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Tab>
        )}

        {selectedTab === 'preferences' && (
          <Tabs.Tab tabName="Preferencias">
            <div className="w-full flex flex-col gap-8 items-center justify-center flex-shrink-0">
              <div className="text-center">
                <h1 className="text-5xl text-snow-400">Preferencias</h1>
                <p className="text-lg text-snow-600">
                  conte-nos sua realidade de vida o no que você acha que pode
                  melhorar esses dados são enviados a inteligencia artificial
                  que gera as missões semanais pra você
                </p>
              </div>
              <form
                action=""
                className="m-auto min-w-[1000px] h-full flex flex-col gap-4"
              >
                <div className="flex flex-col gap-2">
                  <Input
                    variant="undelined"
                    border="none"
                    Title="Em qual area você deseja economizar mais?"
                  >
                    <Input.Field
                      value={
                        'Eu posso economizar no transporte e na alimentação ja que eu moro com os meus pais'
                      }
                    />
                  </Input>
                </div>

                <div className="flex flex-col gap-2">
                  <Input
                    variant="undelined"
                    border="none"
                    Title="Descreva sua principal fonte de renda"
                  >
                    <Input.Field
                      type="text"
                      value={'Trabalho no mc donalds e ganho por volta de 1200'}
                    />
                  </Input>
                </div>

                <div className="flex flex-col gap-2">
                  <Input
                    variant="undelined"
                    border="none"
                    Title="Descreva o que você acha ser o seu maior gasto"
                  >
                    <Input.Field
                      type="text"
                      value={
                        'Gasto muito com bebidas adoro beber refrigerante e não consigo ficar sem ele por 1 dia'
                      }
                    />
                  </Input>
                </div>

                <div className="flex flex-col gap-2">
                  <Input
                    variant="undelined"
                    border="none"
                    Title="descreva todos os seus gastos mensais"
                  >
                    <Input.Field
                      type="text"
                      value={
                        'eu pago netflix e crunchroll, gasto mais ou menos 400 reais de uber no mês e gasto por volta de 600 reais com a faculdade de TI o que sobra eu uso para comprar chocolate'
                      }
                    />
                  </Input>
                </div>

                <div className="flex flex-col gap-2">
                  <Input
                    variant="undelined"
                    border="none"
                    Title="Objetivo pessoal"
                  >
                    <Input.Field
                      type="text"
                      value={
                        'Meu objetivo é comprar um Subaru Impreza porque sempre admirei carros que combinam desempenho e estilo. O Impreza tem uma ótima reputação por sua durabilidade e tração nas quatro rodas, além de ser perfeito para dar aquela sensação de dirigir algo único.'
                      }
                    />
                  </Input>
                </div>

                <div className="flex flex-col gap-2">
                  <Input
                    variant="undelined"
                    border="none"
                    Title="Quantas horas do seu dia você tem livre para seus hobbies?"
                  >
                    <Input.Field type="number" value={5} />
                  </Input>
                </div>

                <div className="flex flex-col gap-2 px-4">
                  <h1 className="text-snow-600">
                    De 0 a 5 o quanto flexivel você pode ser com os gastos
                  </h1>
                  <div className="flex gap-2">
                    <RadioButton
                      sizes="lg"
                      Label="0"
                      name="percentege"
                      id="10button"
                      value={0}
                    />
                    <RadioButton
                      sizes="lg"
                      Label="1"
                      name="percentege"
                      id="10button"
                      value={1}
                    />
                    <RadioButton
                      sizes="lg"
                      Label="2"
                      name="percentege"
                      id="10button"
                      value={2}
                    />
                    <RadioButton
                      sizes="lg"
                      Label="3"
                      name="percentege"
                      id="10button"
                      value={3}
                    />
                    <RadioButton
                      sizes="lg"
                      Label="4"
                      name="percentege"
                      id="10button"
                      value={4}
                    />
                    <RadioButton
                      sizes="lg"
                      Label="5"
                      name="percentege"
                      id="10button"
                      value={5}
                    />
                  </div>
                </div>
              </form>
            </div>
          </Tabs.Tab>
        )}
      </Tabs>

      <Modal visible={modalOpen === MODALOPEN.DELET_ACCOUNT}>
        <Modal.Title
          title="Deletar Conta"
          onCloseButtonClick={() => setModalOpen(MODALOPEN.NONE)}
        />
        <Modal.Body>
          <div className="w-full h-full flex flex-col gap-10">
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <h1 className="text-3xl font-bold text-snow-400">
                Tem certeza que deseja{' '}
                <strong className="text-danger_red">deletar</strong> a sua
                conta?
              </h1>
              <p className="text-snow-600">
                Irei ficar muito triste sem você aqui!
              </p>
            </div>
            <div className="flex items-center justify-center gap-7">
              <Button className="" variant="secondary">
                Cancelar
              </Button>
              <Button variant="danger">Excluir</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal sizes="minimum" visible={modalOpen === MODALOPEN.CHANGE_EMAIL}>
        <Modal.Title
          title="Mudar email"
          onCloseButtonClick={() => setModalOpen(MODALOPEN.NONE)}
        />
        <Modal.Body>
          <div className="w-full h-full flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Input
                variant="bordered"
                border="grayColored"
                className="bg-snow-900"
                Title="Novo email"
              >
                <Input.Field type="email" />
              </Input>

              <Input
                variant="bordered"
                border="grayColored"
                className="bg-snow-900"
                Title="Repita novo email"
              >
                <Input.Field type="email" />
              </Input>
            </div>
            <div className="flex items-center justify-center gap-7">
              <Button className="" variant="secondary">
                Cancelar
              </Button>
              <Button variant="primary">Confirmar</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal sizes="minimum" visible={modalOpen === MODALOPEN.CONNECT_ACCOUNTS}>
        <Modal.Title
          title="Conectar conta bancaria"
          onCloseButtonClick={() => setModalOpen(MODALOPEN.NONE)}
        />
        <Modal.Body>
          <div className="w-full h-full flex flex-col gap-5">
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-3xl text-snow-400 font-bold">
                Conecte uma conta de banco para o dinheirama
              </h1>
              <p className="text-snow-600">
                conectar sua conta pessoal do banco ajuda a nossa inteligencia
                artificial classificar melhor suas compras e entender o seu
                estilo de investidor
              </p>
            </div>
            <form className="flex flex-col gap-2 px-4 py-5 bg-snow-900">
              <Input
                variant="bordered"
                border="grayColored"
                className="bg-snow-900"
                Title="Nome completo"
              >
                <Input.Field type="text" />
              </Input>

              <Input
                variant="bordered"
                border="grayColored"
                className="bg-snow-900"
                Title="Numero de conta"
              >
                <Input.Field type="number" />
              </Input>

              <Input
                variant="bordered"
                border="grayColored"
                className="bg-snow-900"
                Title="Entidade Bancaria"
              >
                <Input.Field type="text" />
              </Input>

              <Input
                variant="bordered"
                border="grayColored"
                className="bg-snow-900"
                Title="Numero da agencia"
              >
                <Input.Field type="number" />
              </Input>

              <Input
                variant="bordered"
                border="grayColored"
                className="bg-snow-900"
                Title="Cpf"
              >
                <Input.Field type="number" />
              </Input>

              <Input
                variant="bordered"
                border="grayColored"
                className="bg-snow-900"
                Title="Email para confirmação"
              >
                <Input.Field type="email" />
              </Input>
            </form>
            <div className="flex items-center justify-center gap-7">
              <Button className="" variant="secondary">
                Cancelar
              </Button>
              <Button variant="primary">Conectar</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  )
}
