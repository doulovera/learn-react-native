import { Platform } from 'react-native'

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    white: '#fefefe'
  },
  fontSizes: {
    small: 12,
    body: 16,
    subheading: 18
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700'
  },

  appBar: {
    primary: '#24292e',
    textPrimary: '#fefefe',
    textSecondary: '#999'
  }
}

export default theme
