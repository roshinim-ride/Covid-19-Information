import React, { createContext, useState } from "react"

export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false)
  const [adminName, setAdminName] = useState("")

  const login = (password) => {
    if (password === "1234admin") {
      setIsAdmin(true)
      setAdminName("Admin")
      return true
    }
    return false
  }

  const logout = () => {
    setIsAdmin(false)
    setAdminName("")
  }

  return (
    <AdminContext.Provider value={{ isAdmin, adminName, login, logout }}>
      {children}
    </AdminContext.Provider>
  )
}
