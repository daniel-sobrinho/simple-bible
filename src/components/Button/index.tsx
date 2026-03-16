import { Pressable, Text, TextProps } from "react-native";
import { useSettings } from "@/src/context/SettingsContext";
import { styles } from "./styles";
import { CustomButtomProps } from "./types";

function Root({ children, ...rest }: CustomButtomProps) {
  return (
    <Pressable style={styles.container} {...rest}>
      {children}
    </Pressable>
  )
}

function ButtonText({ style, ...rest }: TextProps) {
  const { fontSize } = useSettings();
  return (
    <Text
      {...rest}
      style={[styles.text, { fontSize: fontSize * 0.9 }, style]}
    />
  )
}

export const Button = {
  Root,
  Text: ButtonText
}