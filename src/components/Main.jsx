import { View } from 'react-native'
import { RepositoryList } from './RepositoryList'
import { AppBar } from './AppBar'

export const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <RepositoryList />
    </View>
  )
}
