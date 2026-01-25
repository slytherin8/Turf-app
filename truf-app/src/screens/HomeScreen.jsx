import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

export const HomeScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleNavPress = (tab, route) => {
    setActiveTab(tab);
    navigation.navigate(route);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.postimg.cc/Jh7Y7CLF/Home-screen-(1).png' }}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>

          {/* MAIN CONTENT */}
          <View style={styles.main}>
            <View style={styles.textContainer}>
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

          {/* BOTTOM NAV */}
          <View style={styles.bottomNav}>
            {/* HOME */}
            <TouchableOpacity
              style={activeTab === 'Home' ? styles.activeTab : styles.iconOnly}
              onPress={() => handleNavPress('Home', 'Home')}
              activeOpacity={0.8}
            >
              <Image
                source={{
                  uri:
                    activeTab === 'Home'
                      ? 'https://i.postimg.cc/Jz72pGqt/Home-(1).png'
                      : 'https://i.postimg.cc/x8y6R2Nb/Rectangle-2.png',
                }}
                style={styles.icon}
              />
              {activeTab === 'Home' && (
                <Text style={styles.activeLabel}>Home</Text>
              )}
            </TouchableOpacity>

            {/* EXPLORE */}
            <TouchableOpacity
              style={activeTab === 'Explore' ? styles.activeTab : styles.iconOnly}
              onPress={() => handleNavPress('Explore', 'Explore')}
              activeOpacity={0.8}
            >
              <Image
                source={{
                  uri:
                    activeTab === 'Explore'
                      ? 'https://i.postimg.cc/x1WLcZqR/manage-search-(1).png'
                      : 'https://i.postimg.cc/W4YzdF9m/Group-37017-(1).png',
                }}
                style={styles.icon}
              />
              {activeTab === 'Explore' && (
                <Text style={styles.activeLabel}>Explore</Text>
              )}
            </TouchableOpacity>

            {/* STATS */}
            <TouchableOpacity
              style={activeTab === 'Stats' ? styles.activeTab : styles.iconOnly}
              onPress={() => handleNavPress('Stats', 'Stats')}
              activeOpacity={0.8}
            >
              <Image
                source={{
                  uri:
                    activeTab === 'Stats'
                      ? 'https://i.postimg.cc/bvZ8F6RW/event-available-(2).png'
                      : 'https://i.postimg.cc/zDKDrc18/event-available-(1).png',
                }}
                style={styles.icon}
              />
              {activeTab === 'Stats' && (
                <Text style={styles.activeLabel}>Booking</Text>
              )}
            </TouchableOpacity>

            {/* PROFILE */}
            <TouchableOpacity
              style={activeTab === 'Profile' ? styles.activeTab : styles.iconOnly}
              onPress={() => handleNavPress('Profile', 'Profile')}
              activeOpacity={0.8}
            >
              <Image
                source={{
                  uri:
                    activeTab === 'Profile'
                      ? 'https://i.postimg.cc/NG3tC79L/Group-37014.png'
                      : 'https://i.postimg.cc/bvT4z1wx/Group-37014-(1).png',
                }}
                style={styles.icon}
              />
              {activeTab === 'Profile' && (
                <Text style={styles.activeLabel}>Profile</Text>
              )}
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

  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#1C1C1E',
    borderRadius: 40,
    padding: 10,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  activeTab: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#BFFF00',
    borderRadius: 30,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },

  iconOnly: {
    paddingHorizontal: 18,
    paddingVertical: 12,
  },

  icon: {
    width: 22,
    height: 22,
    marginRight: 6,
  },

  activeLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
});
