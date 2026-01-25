import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { ArrowLeft, MapPin } from 'lucide-react-native';

function LocationScreen({ navigation }) {

  // ENABLE / SKIP → HOME PAGE
  const handleEnable = () => {
    navigation.replace('HomePage');
  };

  // BACK → VERIFICATION
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <ArrowLeft size={24} color="#000000" />
          </TouchableOpacity>
        </View>

        {/* MAIN */}
        <View style={styles.main}>
          <Text style={styles.title}>Enable precise location</Text>

          <View style={styles.iconContainer}>
            <MapPin size={80} color="#000000" strokeWidth={1.5} />
          </View>

          <Text style={styles.description}>
            Your location will only be used for finding nearby{'\n'}
            sports facilities and matches.
          </Text>

          {/* ENABLE */}
          <TouchableOpacity style={styles.enableButton} onPress={handleEnable}>
            <Text style={styles.enableButtonText}>Enable Now</Text>
          </TouchableOpacity>

          {/* MAYBE LATER */}
          <TouchableOpacity style={styles.maybeLater} onPress={handleEnable}>
            <Text style={styles.maybeLaterText}>Maybe later</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 48,
  },
  iconContainer: {
    marginBottom: 32,
  },
  description: {
    fontSize: 14,
    color: '#8E8E93',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 48,
  },
  enableButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#1C1C1E',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  enableButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  maybeLater: {
    padding: 12,
  },
  maybeLaterText: {
    fontSize: 14,
    color: '#8E8E93',
  },
});
