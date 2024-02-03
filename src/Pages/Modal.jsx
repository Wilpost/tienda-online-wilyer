import { useUserControl } from '../Hooks/usersControl'

export function Modal() {
  const { viewModaLogged, setViewModalLogged } = useUserControl()

  const redirectLoginPage = () => {
    setViewModalLogged(!viewModaLogged)
  }

  return (
    <div className='w-full h-full grid place-content-center backdrop-contrast-75 backdrop-blur-[2px] absolute pt-12'>
      <article className='w-96 flex flex-col justify-between items-center h-[500px] bg-white rounded-lg p-7'>
        <picture className='text-center'>
          <img
            className='w-56 h-56'
            src='public/Captura.PNG'
            alt='Succes logged'
          />
          <h1 className='text-4xl font-semibold text-[#59b189]'>Welcome!</h1>
        </picture>

        <div className='w-full text-center flex flex-col p-3 gap-2 items-center'>
          <h3 className='font-normal text-md'>
            Your account has been created!
          </h3>
          <button
            onClick={() => redirectLoginPage()}
            className='w-2/3 h-10 text-lg bg-[#59b189] rounded-lg text-white'>
            Acept
          </button>
        </div>
      </article>
    </div>
  )
}
