import { FlatList, Text } from 'react-native'
import { RepositoryItem } from './RepositoryItem'
import { useRepositories } from '../hooks/useRepositories'

export const RepositoryList = () => {
  const { repositories } = useRepositories()

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
