import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

export const HomePageScreen = ({ navigation }) => {
  const handlePlayPress = () => {
    navigation?.navigate('SignIn');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.postimg.cc/Jh7Y7CLF/Home-screen-(1).png' }}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.main}>
            <View style={styles.textContainer}>

              {/* TITLE + HIGHLIGHT */}
              <View style={styles.titleWrapper}>
                <Text style={styles.title}>
                  Wherever You Play,{'\n'}Your Health Defines Your Game.
                </Text>
                <View style={styles.titleHighlight} />
              </View>

              <Text style={styles.subtitle}>
                Every match counts toward a healthier life.
              </Text>

            </View>
          </View>

          {/* PLAY BUTTON */}
          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={handlePlayPress} activeOpacity={0.8}>
              <Image
                source={{ uri: 'https://i.postimg.cc/4x0HyzkG/btn.png' }}
                style={styles.playButton}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },

  main: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  textContainer: {
    padding: 20,
    alignItems: 'center',
  },

  /* TITLE */
  titleWrapper: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 8,
  },

  title: {
    fontSize: 22,
    fontWeight: '900',
    fontFamily: 'LatoBold',
    textAlign: 'center',
    zIndex: 2,
    position: 'relative',
  },

  titleHighlight: {
    position: 'absolute',
    bottom: 26,
    height: 10,
    width: 64,
    right: '53%',
    backgroundColor: '#BFFF00',
    zIndex: 1,
  },

  subtitle: {
    fontSize: 13,
    color: '#192126',
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 6,
  },

  bottomContainer: {
    alignItems: 'center',
    paddingBottom: 52,
  },

  playButton: {
    width: 76,
    height: 76,
    marginBottom: 12,
  },
});
