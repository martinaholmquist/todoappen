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

export interface UserProps {
  id: number
  timeoftask: string
  username: string
  email: string
  tasks: string[]
  role: string
}

export interface AdminProps {
  id: number
  username: string
  email: string
  active: boolean
}

export interface authProps {
  username: string
  email: string
  password: string
  role: string
}

export interface taskProps {
  id: number
  task: string
  dateoftask: string
  timeoftask: string
  isPerformed: boolean
}
