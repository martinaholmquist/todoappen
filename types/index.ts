import { MouseEventHandler } from "react"

export interface CustomButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: "button" | "submit"
  textStyles?: string
  rightIcon?: string
  isDisabled?: boolean
}

export interface SearchCityProps {
  city: string
  setCity: (city: string) => void
}

export interface SearchPreferencesProps {
  preferences: string
  setPreferences: (preferences: string) => void
}

export interface UserProps {
  id: number
  timeoftask: string
  username: string
  email: string
  tasks: string[]
  role: string
}

export interface authProps {
  username: string
  email: string
  password: string
  role: string
}

export interface FilterProps {
  city: string
  preferences: string
}

export interface taskProps {
  id: number
  task: string
  dateoftask: string
  timeoftask: string
}
