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
import { login } from '../lib/firebase/firebase'
import { useValidUser } from '../Hooks/useValidUser'

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
    <section
      style={{ backgroundPositionX: '-34px' }}
      className='w-full h-screen flex items-center bg-contain pt-36 p-20 gap-12 justify-center bg-loginBackground'
    >
      <div className='hidden bg-buttonColor w-[420px] max-w-[420px] ml-24 rounded-full h-96 blur-3xl opacity-30' />

      <aside className='relative overflow-hidden shadow-shadowForm bg-neutral-800 rounded-lg w-[500px] max-w-[500px] gap-12 flex flex-col items-start justify-center p-7'>
        <h2 className='font-normal z-50 text-white text-3xl w-full text-center h-full'>
          Welcome to Shopi
        </h2>

        <img
          className='w-[242px] absolute top-[-89px] right-[-54px] rotate-[80deg]'
          src='public/NicePng_dashed-line-png_1012356.png'
          alt=''
        />

        <img
          className='w-[118px] absolute top-[9px] right-[-76px] rotate-[122deg]'
          src='public/pngegg.png'
          alt=''
        />

        <div className='w-[100px] h-[200px] z-40 absolute blur-[100px] opacity-[0.4] bg-[#815eadd9] right-[-51px] top-[-84px]' />
        <div className='w-[100px] h-[200px] z-40 absolute blur-[100px] opacity-[0.4] bg-[#815eadd9] left-[-51px] bottom-[-84px]' />

        <form
          onSubmit={e => handleClick(e)}
          className='h-full w-full flex justify-center flex-col z-50 gap-5 -mb-6 relative overflow-hidden'
        >
          <div className='w-full'>
            <label className='peer flex flex-col text-[#828282]' id='email'>
              Username
            </label>
            <input
              ref={inputUsername}
              className='bg-dark w-full outline-none p-2 rounded-lg text-textColor placeholder:text-textColor'
              type='text'
              name='username'
              placeholder='Username'
            />
          </div>

          <div className='w-full'>
            <label
              className={`${userRepited ? 'text-red-600' : ''}
              peer flex flex-col text-[#828282]`}
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
              }  bg-dark w-full outline-none p-2 rounded-lg text-textColor placeholder:text-textColor`}
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
            <label className='peer flex flex-col text-[#828282]' id='password'>
              Password
            </label>
            <input
              ref={inputPassword}
              type={viewPassword ? 'text' : 'password'}
              name='password'
              className={`${
                userRepited ? STYLE_INPUT_ERROR : ''
              }bg-dark w-full outline-none text-textColor p-2 rounded-lg placeholder:text-textColor`}
              placeholder='password'
            />

            <figure
              onClick={() => {
                setViewPassword(!viewPassword)
              }}
              title='view password'
              className='contrast-[0.3] absolute right-2 cursor-pointer top-[200px]'
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
  const { addUserLogged, usersRegisters } = useUserControl()
  const { loginValidate } = useValidUser()

  const loginWithGoogle = async () => {
    const user = await login()
    addUserLogged({ email: user.email })
    window.location.replace('http://localhost:5173/')
    loginValidate()
  }

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
        window.location.replace('http://localhost:5173/')
        loginValidate()
      }
    } else {
      setUserNotExist(true)
      setError(true)
    }
  }

  return (
    <section
      style={{ backgroundPositionX: '-34px' }}
      className='w-full h-screen flex bg-contain bg-loginBackground items-center pt-36 p-20 gap-12 justify-center'
    >
      <div className='hidden bg-buttonColor  w-[420px] ml-24 rounded-full h-96 blur-3xl opacity-30' />

      <aside className='relative overflow-hidden shadow-shadowForm bg-neutral-800 rounded-lg w-[500px] max-w-[500px] gap-12 flex flex-col items-start justify-center p-7'>
        <div className='h-full  flex flex-col w-full justify-center gap-4'>
          <h2 className='font-normal text-textColor text-3xl w-full text-center h-full'>
            Login
          </h2>
        </div>

        <div className='w-[100px] h-[200px] absolute blur-[100px] opacity-[0.4] bg-[#815eadd9] right-[-51px] top-[-84px]' />
        <div className='w-[100px] h-[200px] absolute blur-[100px] opacity-[0.4] bg-[#815eadd9] left-[-51px] bottom-[-84px]' />

        <img
          className='w-[242px] absolute top-[-96px] right-[-54px] rotate-[80deg]'
          src='public/NicePng_dashed-line-png_1012356.png'
          alt=''
        />

        <img
          className='w-[119px] absolute top-[2px] right-[-76px] rotate-[122deg]'
          src='public/pngegg.png'
          alt=''
        />

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
              } bg-dark w-full outline-none p-2 text-textColor rounded-lg placeholder:text-textColor`}
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
              } bg-dark w-full outline-none peer text-textColor p-2 rounded-lg placeholder:text-textColor`}
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
              className='contrast-[0.3] absolute right-2 cursor-pointer top-[34px]'
            >
              {viewPassword && <NotViewPassword errorColor={error} />}
              {!viewPassword && <ViewPassword errorColor={error} />}
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
            type='button'
            onClick={() => loginWithGoogle()}
            className='bg-[#333] border-[#313131] border-[1px] justify-center hover:bg-[#434343] transition p-2 flex gap-4 items-center rounded-lg text-white'
          >
            Continue with Google{' '}
            <img
              src='public/google.svg'
              className='w-5 h-5'
              alt='Hero google icon'
            />
          </button>
          <button
            type='submit'
            className='bg-buttonColor hover:bg-[#7242ad] transition p-2 rounded-lg text-white'
          >
            Login with email
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
