import { useEffect, useState } from 'react'
import { HomeLogged } from './HomeLogged'
import HomeNotLogged from './HomeNotLogged'
import './index.scss'

export const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  return <> {isLoggedIn ? <HomeLogged /> : <HomeNotLogged />}</>
}
