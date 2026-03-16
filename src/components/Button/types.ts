import { ReactNode } from "react"
import { PressableProps } from "react-native"

export type CustomButtomProps = PressableProps & {
  children: ReactNode
}