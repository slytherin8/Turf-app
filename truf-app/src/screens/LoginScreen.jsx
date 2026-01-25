import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';

import { CustomButton } from '../components/CustomButton';
import { CustomInput } from '../components/CustomInput';
import { BackButton } from '../components/BackButton';
import { COLORS, SPACING, SIZES } from '../constants/theme';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // LOGIN → VERIFICATION
  const handleLogin = () => {
    navigation.navigate('Verification');
  };

  // GOOGLE LOGIN → VERIFICATION
  const handleGoogleSignIn = () => {
    navigation.navigate('Verification');
  };

  // SIGN UP → SIGNUP SCREEN
  const handleSignUp = () => {
    navigation.navigate('Signup');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.content}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>

        {/* MAIN CONTENT */}
        <View style={styles.main}>
          <Text style={styles.title}>Welcome!</Text>

          <CustomButton
            title="CONTINUE WIT GOOGLE"
            onPress={handleGoogleSignIn}
            variant="google"
            style={styles.googleButton}
          />

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR LOG IN WITH EMAIL</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.inputSection}>
            <CustomInput
              label="EMAIL"
              placeholder=""
              value={email}
              onChangeText={setEmail}
            />
            <CustomInput
              label="PASSWORD"
              placeholder=""
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <CustomButton
            title="LOG IN"
            onPress={handleLogin}
            style={styles.loginButton}
          />

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signupText}>
              CREATE NEW ACCOUNT{' '}
              <Text style={styles.signupLink}>SIGN UP</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.xxl,
  },
  header: {
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.lg,
  },
  main: {
    flex: 1,
  },
  title: {
    fontSize: SIZES.h1,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.xxxl,
    textAlign: 'center',
  },
  googleButton: {
    marginBottom: SPACING.xxl,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xxl,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
  },
  dividerText: {
    fontSize: SIZES.tiny,
    color: COLORS.secondary,
    marginHorizontal: SPACING.lg,
    letterSpacing: 0.5,
  },
  inputSection: {
    marginBottom: SPACING.xxl,
  },
  loginButton: {
    marginBottom: SPACING.lg,
  },
  forgotPassword: {
    alignItems: 'center',
    padding: SPACING.md,
  },
  forgotPasswordText: {
    fontSize: SIZES.small,
    color: COLORS.secondary,
  },
  footer: {
    paddingBottom: SPACING.xxxl,
    alignItems: 'center',
  },
  signupText: {
    fontSize: SIZES.small,
    color: COLORS.secondary,
    letterSpacing: 0.5,
  },
  signupLink: {
    color: COLORS.text,
    fontWeight: '600',
  },
  
});
