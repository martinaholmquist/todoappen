"use client"

import React, { createContext, useContext, useState } from "react"

interface AuthContextProps {
  accessToken: string | null
  setAccessToken: (token: string | null) => void
  getAccessToken: () => string | null
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [accessToken, setAccessToken] = useState<string | null>(null)

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
