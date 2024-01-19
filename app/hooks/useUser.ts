import { useEffect, useState } from "react"
import { apiClient } from '../services/api-client'
import { CanceledError } from "axios"

type User = {
  _id: string,
  name: string,
  email: string,
  accountType: string,
  balance: number
}

const useUser = (token: string) => {
  const [user, setUser] = useState<User>({} as User)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    const controller = new AbortController()
    setIsLoading(false)
    apiClient.get<User>('/users/me', {
      signal: controller.signal, headers: {
        'x-auth-token': token
      }
    }).then(data => {
      setUser(data.data)
      setIsLoading(false)
    }).catch(err => {
      if (err instanceof CanceledError) return
      setError(err.message)
      setIsLoading(false)
    })

    return () => controller.abort()
  }, [])

  return { user, error, isLoading }
}

export default useUser
