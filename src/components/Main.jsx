import { View } from 'react-native'
import { Route, Routes } from 'react-router-native'
import { RepositoryList } from './RepositoryList'
import { AppBar } from './AppBar'
import { LogIn } from '../pages/LogIn'

export const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' exact element={<RepositoryList />} />
        <Route path='/signin' exact element={<LogIn />} />
      </Routes>
    </View>
  )
}
