import { TextInput, type TextInputProps } from 'react-native'
import { styles } from './styles'

export function Input({ ...rest }: TextInputProps) {
  return <TextInput style={styles.container} {...rest} />
}
