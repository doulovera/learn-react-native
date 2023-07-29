import Constants from 'expo-constants'
import { ScrollView, StyleSheet, View } from 'react-native'
import StyledText from './StyledText'
import theme from '../theme'
import { Link, useLocation } from 'react-router-native'

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation()

  const active = pathname === to

  const textStyles = [
    styles.text,
    active && styles.active
  ]

  return (
    <Link to={to} activeOpacity={1} underlayColor='transparent'>
      <StyledText fontWeight='bold' style={textStyles}>{children}</StyledText>
    </Link>
  )
}

export const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollBar}>
        <AppBarTab to='/'>Repositories</AppBarTab>
        <AppBarTab to='/signin'>Sign in</AppBarTab>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: theme.appBar.primary
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 15
  },
  scrollBar: {
    paddingBottom: 10
  },
  active: {
    color: theme.appBar.textPrimary
  }
})
