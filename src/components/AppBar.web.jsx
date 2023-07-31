import Constants from 'expo-constants'
import { ScrollView, StyleSheet, View } from 'react-native'
import theme from '../theme'

export const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollBar}>
        Esta es la versión Web
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
