import { Link } from 'react-router-dom'
import { useSubmitForm } from '../Hooks/useSubmitForm'
import { useRef } from 'react'
import { useUserControl } from '../Hooks/usersControl'

export function SignUp() {
  const {
    handleSubmit,
    userRepited,
    setUserRepited,
    emtyCampts,
    setEmtyCampts
  } = useSubmitForm()
  const inputEmail = useRef()
  const inputUsername = useRef()
  const inputPassword = useRef()

  const handleClick = e => {
    e.preventDefault()

    if (
      inputEmail.current.value.length === 0 ||
      inputUsername.current.value.length === 0 ||
      inputPassword.current.value.length === 0
    ) {
      if (inputEmail.current.value.length === 0) {
        inputEmail.current.classList.add(
          'placeholder:text-red-600',
          'peer:text-red-600',
          'border-[1px]',
          'border-red-600'
        )
      } else {
        inputEmail.current.classList.add(
          'bg-zinc-100',
          'w-full',
          'outline-none',
          'p-2',
          'rounded-lg',
          'placeholder:text-buttonColor',
          'border-none'
        )
      }

      if (inputUsername.current.value.length === 0) {
        inputUsername.current.classList.add(
          'placeholder:text-red-600',
          'peer:text-red-600',
          'border-[1px]',
          'border-red-600'
        )
      } else {
        inputUsername.current.classList.add(
          'bg-zinc-100',
          'w-full',
          'outline-none',
          'p-2',
          'rounded-lg',
          'placeholder:text-buttonColor',
          'border-none'
        )
      }

      if (inputPassword.current.value.length === 0) {
        inputPassword.current.classList.add(
          'placeholder:text-red-600',
          'border-[1px]',
          'peer:text-red-600',
          'border-red-600'
        )
      } else {
        inputPassword.current.classList.add(
          'bg-zinc-100',
          'w-full',
          'outline-none',
          'p-2',
          'rounded-lg',
          'placeholder:text-buttonColor',
          'border-none'
        )
      }

      setEmtyCampts(true)

      return
    }

    handleSubmit(e)
  }

  const handleInputFocus = () => {
    setUserRepited(false)
  }

  return (
    <section className='w-full h-screen flex items-center pt-36 p-20 gap-12 justify-center bg-loginBackground'>
      <div className='hidden bg-buttonColor w-[420px] ml-24 rounded-full h-96 blur-3xl opacity-30'></div>

      <aside className='shadow-xl rounded-lg w-[500px] gap-12 bg-white flex flex-col items-start justify-center p-7'>
        <h2 className='font-bold text-3xl w-full text-center h-full'>
          Welcome to Shopi
        </h2>

        <form
          onSubmit={e => handleClick(e)}
          className='h-[370px] w-full flex justify-center flex-col gap-5 -mb-6'>
          <div className='w-full'>
            <label className='peer flex flex-col text-zinc-500' id='email'>
              Username
            </label>
            <input
              ref={inputUsername}
              className={
                'bg-zinc-100 w-full outline-none p-2 rounded-lg placeholder:text-buttonColor'
              }
              type='text'
              name='username'
              placeholder='Username'
            />
          </div>

          <div className='w-full'>
            <label
              className={`${userRepited ? 'text-red-600' : ''}
              peer flex flex-col text-zinc-500`}
              id='email'>
              Email
            </label>
            <input
              ref={inputEmail}
              className={` ${
                userRepited
                  ? 'border-[1px] border-red-600 shadow-errorInput'
                  : ''
              }  bg-zinc-100 w-full outline-none p-2 rounded-lg placeholder:text-buttonColor`}
              type='email'
              name='email'
              onFocus={() => handleInputFocus()}
              placeholder='Email'
            />

            {userRepited ? (
              <span className='text-red-600 text-sm mt-2 ml-2'>
                Este email ya existe
              </span>
            ) : null}
          </div>

          <div className='w-full'>
            <label className='peer flex flex-col text-zinc-500' id='password'>
              Password
            </label>
            <input
              ref={inputPassword}
              type='password'
              name='password'
              className={`${
                userRepited
                  ? 'border-[1px] border-red-600 shadow-errorInput'
                  : ''
              }bg-zinc-100 w-full outline-none p-2 rounded-lg placeholder:text-buttonColor`}
              placeholder='password'
            />
          </div>

          {emtyCampts ? (
            <span className='text-red-600 text-sm'>
              Completa todos los campos
            </span>
          ) : null}

          <button className='bg-buttonColor p-2 rounded-lg text-white'>
            Sign up
          </button>

          <span className='text-zinc-500 w-full text-center m-2 flex gap-2 justify-center'>
            You do not have an account?
            <Link to='/login' className='text-buttonColor'>
              Login
            </Link>
          </span>
        </form>
      </aside>
    </section>
  )
}

export function Login() {
  const { userLogged, isLoggedTheUser, addUserLogged, usersRegisters } =
    useUserControl()
  const handleSubmitUserLogged = e => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const { password } = Object.fromEntries(data)

    const user = usersRegisters.find(item => item.email === email)

    addUserLogged(user)
    isLoggedTheUser(true)
    window.location.replace('http://localhost:5173/')
  }

  return (
    <section className='w-full h-screen flex items-center pt-36 p-20 gap-12 justify-center bg-loginBackground'>
      <div className='hidden bg-buttonColor w-[420px] ml-24 rounded-full h-96 blur-3xl opacity-30'></div>

      <aside className='shadow-xl rounded-lg w-[500px] gap-12 bg-white flex flex-col items-start justify-center p-7'>
        <div className='h-full  flex flex-col w-full justify-center gap-4'>
          <h2 className='font-bold text-3xl w-full text-center h-full'>
            Login
          </h2>
        </div>

        <form
          onSubmit={e => handleSubmitUserLogged(e)}
          className='h-[270px] w-full flex justify-center flex-col gap-5'>
          <div className='w-full'>
            <label
              className={`
              peer flex flex-col text-zinc-500`}
              id='email'>
              Email
            </label>
            <input
              className={
                ' bg-zinc-100 w-full outline-none p-2 rounded-lg placeholder:text-buttonColor'
              }
              type='email'
              name='email'
              placeholder='Email'
            />

            {/* {userRepited ? (
              <span className='text-red-600 text-sm mt-2 ml-2'>
                El email no existe
              </span>
            ) : null} */}
          </div>

          <div className='w-full'>
            <label className='peer flex flex-col text-zinc-500' id='password'>
              Password
            </label>
            <input
              type='password'
              name='password'
              className={
                'bg-zinc-100 w-full outline-none p-2 rounded-lg placeholder:text-buttonColor'
              }
              placeholder='password'
            />
          </div>

          {/* {emtyCampts ? (
            <span className='text-red-600 text-sm'>
              Completa todos los campos
            </span>
          ) : null} */}

          <button className='bg-buttonColor p-2 rounded-lg text-white'>
            Login
          </button>

          <span className='text-zinc-500 w-full text-center flex gap-2 justify-center'>
            You do not have an account?
            <Link to='/sign-up' className='text-buttonColor'>
              Sign Up
            </Link>
          </span>
        </form>
      </aside>
    </section>
  )
}
