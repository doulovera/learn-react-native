import { View } from 'react-native'
import StyledText from './StyledText'

const parseThousands = (num) => {
  return num >= 1000 ? `${Math.round(num / 100) / 10}k` : String(num)
}

const RepositoryStatsItem = ({ label, value }) => (
  <View style={{ alignItems: 'center', backgroundColor: '#efefef', padding: 10, borderRadius: 4, flex: 1 }}>
    <StyledText fontSize='subheading' fontWeight='bold'>{parseThousands(value)}</StyledText>
    <StyledText>{label}</StyledText>
  </View>
)

export const RepositoryStats = ({ stargazersCount, forksCount, reviewCount, ratingAverage }) => {
  return (
    <View style={{ flexDirection: 'row', gap: 6, justifyContent: 'space-between' }}>
      <RepositoryStatsItem label='Stars' value={stargazersCount} />
      <RepositoryStatsItem label='Forks' value={forksCount} />
      <RepositoryStatsItem label='Reviews' value={reviewCount} />
      <RepositoryStatsItem label='Rating' value={ratingAverage} />
    </View>
  )
}
