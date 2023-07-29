import { FlatList, Text } from 'react-native'
import repositories from '../data/repositories'
import { RepositoryItem } from './RepositoryItem'

export const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text style={{ height: 30 }} />}
      renderItem={({ item: repo }) => (
        <RepositoryItem repo={repo} />
      )}
    />
  )
}
