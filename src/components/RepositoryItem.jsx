import { View, StyleSheet, Image, Button, Linking } from 'react-native'
import { RepositoryStats } from './RepositoryStats'

import StyledText from './StyledText'
import theme from '../theme'

const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => (
  <View style={{ flexDirection: 'row', gap: 10 }}>
    <View style={{ flex: 0 }}>
      <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
    </View>
    <View style={{ flex: 1 }}>
      <StyledText fontWeight='bold'>{fullName}</StyledText>
      <StyledText color='secondary'>{description}</StyledText>
      <StyledText style={styles.language}>{language}</StyledText>
    </View>
  </View>
)

export const RepositoryItem = ({ repo }) => {
  const handlePress = () => {
    Linking.canOpenURL(`https://github.com/${repo.fullName}`)
  }

  return (
    <View key={repo.id} style={styles.container}>
      <RepositoryItemHeader {...repo} />
      <RepositoryStats {...repo} />
      <View style={{ marginTop: 20 }}>
        <Button title='View on GitHub' color='#444' onPress={handlePress} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    marginTop: 4,
    marginBottom: 5,
    fontSize: theme.fontSizes.small,
    borderRadius: 4,
    overflow: 'hidden'
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  }
})
