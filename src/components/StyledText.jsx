import { Text, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body
  },
  colorPrimary: {
    color: theme.colors.textPrimary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
  subheading: {
    fontSize: theme.fontSizes.subheading
  },
  small: {
    fontSize: theme.fontSizes.small
  }
})

export default function StyledText ({ color, fontSize, fontWeight, children, style, ...restOfProps }) {
  const textStyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontSize === 'small' && styles.small,
    fontWeight === 'bold' && styles.bold,
    style
  ]

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  )
}
