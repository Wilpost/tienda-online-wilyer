import { Link } from 'react-router-dom'
import { useSubmitForm } from '../Hooks/useSubmitForm'
import { useRef, useState } from 'react'
import { useUserControl } from '../Hooks/usersControl'
import { STYLE_INPUT_ERROR } from '../Constants/consts'
import {
  IcontError,
  NotViewPassword,
  ViewPassword
} from '../Components/icons/Icons'

export function SignUp() {
  const {
    userRepited,
    emtyCampts,
    error,
    viewPassword,
    handleSubmit,
    setViewPassword,
    setError,
    setUserRepited,
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
        setError(true)
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
        setError(false)
      }

      if (inputUsername.current.value.length === 0) {
        inputUsername.current.classList.add(
          'placeholder:text-red-600',
          'peer:text-red-600',
          'border-[1px]',
          'border-red-600'
        )
        setError(true)
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
        setError(false)
      }

      if (inputPassword.current.value.length === 0) {
        inputPassword.current.classList.add(
          'placeholder:text-red-600',
          'border-[1px]',
          'peer:text-red-600',
          'border-red-600'
        )
        setError(true)
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
        setError(false)
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
      <div className='hidden bg-buttonColor w-[420px] ml-24 rounded-full h-96 blur-3xl opacity-30' />

      <aside className='shadow-xl rounded-lg w-[500px] gap-12 bg-white flex flex-col items-start justify-center p-7'>
        <h2 className='font-bold text-3xl w-full text-center h-full'>
          Welcome to Shopi
        </h2>

        <form
          onSubmit={e => handleClick(e)}
          className='h-[370px] w-full flex justify-center flex-col gap-5 -mb-6 relative overflow-hidden'
        >
          <div className='w-full'>
            <label className='peer flex flex-col text-zinc-500' id='email'>
              Username
            </label>
            <input
              ref={inputUsername}
              className='bg-zinc-100 w-full outline-none p-2 rounded-lg placeholder:text-buttonColor'
              type='text'
              name='username'
              placeholder='Username'
            />
          </div>

          <div className='w-full'>
            <label
              className={`${userRepited ? 'text-red-600' : ''}
              peer flex flex-col text-zinc-500`}
              id='email'
            >
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
              type={viewPassword ? 'text' : 'password'}
              name='password'
              className={`${
                userRepited ? STYLE_INPUT_ERROR : ''
              }bg-zinc-100 w-full outline-none p-2 rounded-lg placeholder:text-buttonColor`}
              placeholder='password'
            />

            <figure
              onClick={() => {
                setViewPassword(!viewPassword)
              }}
              title='view password'
              className='absolute right-2 cursor-pointer top-[210px]'
            >
              {viewPassword ? (
                <NotViewPassword errorColor={error} />
              ) : (
                <ViewPassword errorColor={error} />
              )}
            </figure>
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
  const { error, setError, viewPassword, setViewPassword } = useSubmitForm()
  const [userDoNotExist, setUserNotExist] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const { isLoggedTheUser, addUserLogged, usersRegisters } = useUserControl()

  const handleSubmitUserLogged = e => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const userData = Object.fromEntries(data)

    const user = usersRegisters.find(item => item.email === userData.email)

    if (user !== undefined) {
      if (userData.password !== user.password) {
        setValidPassword(true)
      } else {
        addUserLogged(user)
        isLoggedTheUser(true)
        window.location.replace('http://localhost:5173/')
      }
    } else {
      setUserNotExist(true)
      setError(true)
    }
  }

  return (
    <section className='w-full h-screen flex items-center pt-36 p-20 gap-12 justify-center bg-loginBackground'>
      <div className='hidden bg-buttonColor w-[420px] ml-24 rounded-full h-96 blur-3xl opacity-30' />

      <aside className='shadow-xl rounded-lg w-[500px] gap-12 bg-white flex flex-col items-start justify-center p-7'>
        <div className='h-full  flex flex-col w-full justify-center gap-4'>
          <h2 className='font-bold text-3xl w-full text-center h-full'>
            Login
          </h2>
        </div>

        <form
          onSubmit={e => handleSubmitUserLogged(e)}
          className='w-full h-full flex justify-center flex-col gap-5 relative overflow-hidden'
        >
          <div className='w-full'>
            <label
              className={`
              peer flex flex-col text-zinc-500`}
              id='email'
            >
              Email
            </label>
            <input
              className={`${
                error ? STYLE_INPUT_ERROR : ''
              } bg-zinc-100 w-full outline-none p-2 rounded-lg placeholder:text-buttonColor`}
              onFocus={() => {
                setUserNotExist(false)
                setError(false)
              }}
              name='email'
              placeholder='Email'
            />
          </div>

          <div className='w-full'>
            <label className='flex flex-col text-zinc-500' id='password'>
              Password
            </label>
            <input
              type={viewPassword ? 'text' : 'password'}
              name='password'
              onFocus={() => {
                setUserNotExist(false)
                setError(false)
              }}
              className={`${validPassword ? STYLE_INPUT_ERROR : ''} ${
                error ? STYLE_INPUT_ERROR : ''
              } bg-zinc-100 w-full outline-none peer p-2 rounded-lg placeholder:text-buttonColor`}
              placeholder='password'
            />

            {validPassword && (
              <div className='w-full h-full flex items-center gap-1'>
                <IcontError />
                <span
                  className={`${
                    userDoNotExist ? '' : 'p-2'
                  } text-red-600 text-sm mt-[5px]`}
                >
                  La contraseña no es correcta
                </span>
              </div>
            )}

            <figure
              onClick={() => {
                setViewPassword(!viewPassword)
              }}
              title='view password'
              className='absolute right-2 cursor-pointer top-[117px]'
            >
              {viewPassword ? (
                <NotViewPassword errorColor={error} />
              ) : (
                <ViewPassword errorColor={error} />
              )}
            </figure>
          </div>

          {userDoNotExist && (
            <div className='w-full h-full flex items-center gap-1'>
              <IcontError />
              <span
                className={`${
                  userDoNotExist ? '' : 'p-2'
                } text-red-600 text-sm mt-[5px]`}
              >
                El usuario no existe
              </span>
            </div>
          )}

          <button
            type='submit'
            className='bg-buttonColor p-2 rounded-lg text-white'
          >
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
