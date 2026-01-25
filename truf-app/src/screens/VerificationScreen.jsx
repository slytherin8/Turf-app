import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';



export const VerificationScreen = ({ navigation }) => {
  const handleBack = () => {
    navigation?.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
            <Image
              source={{ uri: 'https://i.postimg.cc/4x0HyzkG/btn.png' }}
              style={styles.backImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* MAIN */}
        <View style={styles.main}>

          {/* TITLE */}
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Turf Identifier System</Text>
            <View style={styles.titleHighlight} />
            <Text style={styles.subtitle}>Verification</Text>
          </View>

          {/* ICON */}
          <Image
            source={{
              uri: 'https://i.postimg.cc/m2jb2M1r/Chat-GPT-Image-Jan-4-2026-07-31-50-PM-2.png', // email + check icon
            }}
            style={styles.icon}
            resizeMode="contain"
          />

          {/* DESCRIPTION */}
          <Text style={styles.description}>
            Please verify your email to proceed{'\n'}to the dashboard
          </Text>

        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
  },

  /* HEADER */
  header: {
    paddingTop: 16,
  },

  backImage: {
    width: 64,
    height: 64,
    transform: [{ rotate: '180deg' }],
  },

  /* MAIN */
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 120,
  },

  /* TITLE */
  titleWrapper: {
    alignItems: 'center',
    
    position: 'relative',
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1C1C1E',
    zIndex: 2,
    textAlign: 'center',
  },

  titleHighlight: {
    position: 'absolute',
    bottom: 42,
    right: '38%',
    width: 160,
    height: 10,
    backgroundColor: '#BFFF00',
    zIndex: 1,
  },

  subtitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1C1C1E',
    marginTop: 6,
    textAlign: 'center',
  },

  /* ICON */
  icon: {
    width: 240,
    height: 240,
    
  },

  /* DESCRIPTION */
  description: {
    fontSize: 15,
    color: '#8E8E93',
    textAlign: 'center',
    lineHeight: 22,
  },
});
