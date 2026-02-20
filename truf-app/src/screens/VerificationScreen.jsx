import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const VerificationScreen = ({ navigation, route }) => {
  const { email } = route.params || {};
  const API_URL = process.env.EXPO_PUBLIC_API_URL;

  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkVerification = async () => {
      try {
        const response = await fetch(
          `${API_URL}/auth/check-verification/${email}`
        );

        const data = await response.json();
        setVerified(data.verified);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    checkVerification();

    // Auto check every 5 seconds
    const interval = setInterval(checkVerification, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToLogin = () => {
    if (verified) {
      navigation.replace("SignIn");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>

        <Text style={styles.title}>Email Verification</Text>

        <Text style={styles.description}>
          We sent a verification link to:
          {"\n\n"}
          {email}
        </Text>

        {loading && <ActivityIndicator size="large" />}

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: verified ? "#1C1C1E" : "#CCCCCC" }
          ]}
          onPress={goToLogin}
          disabled={!verified}
        >
          <Text style={styles.buttonText}>
            {verified ? "Back to Login" : "Waiting for Verification..."}
          </Text>
        </TouchableOpacity>

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

  header: {
    paddingTop: 16,
  },

  backImage: {
    width: 64,
    height: 64,
    transform: [{ rotate: '180deg' }],
  },

  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 120,
  },

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

  icon: {
    width: 240,
    height: 240,
  },

  description: {
    fontSize: 15,
    color: '#8E8E93',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
  },

  continueBtn: {
    backgroundColor: '#1C1C1E',
    height: 56,
    borderRadius: 28,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  continueBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});