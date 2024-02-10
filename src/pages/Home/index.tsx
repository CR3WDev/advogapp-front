import { useEffect, useState } from 'react'
import { HomeLogged } from './HomeLogged'
import HomeNotLogged from './HomeNotLogged'

export const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [logoutIsClicked, setLogoutIsClicked] = useState(false)

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [logoutIsClicked])

  return (
    <> {isLoggedIn ? <HomeLogged setLogoutIsClicked={setLogoutIsClicked} /> : <HomeNotLogged />}</>
  )
}
