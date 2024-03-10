import { useState } from 'react'
import { useUserControl } from './usersControl'
import { db } from '../lib/firebase/firebase'
import { addDoc, collection } from 'firebase/firestore'

export function useSubmitForm() {
  const [viewPassword, setViewPassword] = useState(false)
  const [userRepited, setUserRepited] = useState(false)
  const [error, setError] = useState(false)
  const [emtyCampts, setEmtyCampts] = useState(false)
  const { addUserAccount, usersRegisters, setViewModalLogged, viewModaLogged } =
    useUserControl()

  const handleSubmit = async event => {
    event.preventDefault()
    const form = event.target
    const data = new FormData(form)

    const email = data.get('email')
    const password = data.get('password')
    const username = data.get('username')
    const id = crypto.randomUUID()

    await addDoc(collection(db, 'users'), { id, email, password, username })
    console.log('as')

    if (usersRegisters.length > 0) {
      setEmtyCampts(false)

      const isAlredyUserAdded = usersRegisters.some(
        item => item.email === email
      )

      if (isAlredyUserAdded) {
        setUserRepited(isAlredyUserAdded)
        return
      }
    }

    setViewModalLogged(!viewModaLogged)
    setUserRepited(false)
    setEmtyCampts(false)
    addUserAccount({ id, username, email, password })
    form.reset()
  }

  return {
    handleSubmit,
    setUserRepited,
    setEmtyCampts,
    userRepited,
    emtyCampts,
    viewPassword,
    error,
    setError,
    setViewPassword
  }
}
