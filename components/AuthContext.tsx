"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

interface AuthContextProps {
  accessToken: string | null
  setAccessToken: (token: string | null) => void
  getAccessToken: () => string | null
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [accessToken, setAccessTokenState] = useState<string | null>(null)

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken")
    if (storedToken) {
      setAccessTokenState(storedToken)
    }
  }, [])

  const setAccessToken = (token: string | null) => {
    setAccessTokenState(token)
    if (token) {
      localStorage.setItem("accessToken", token)
    } else {
      localStorage.removeItem("accessToken")
    }
  }

  const getAccessToken = () => {
    return accessToken
  }

  return (
    <AuthContext.Provider
      value={{ accessToken, setAccessToken, getAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
