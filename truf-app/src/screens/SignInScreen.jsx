import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';

export const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation?.navigate('Main');
  };

  const handleGoogleSignIn = () => {
    navigation?.navigate('Main');
  };

  const handleSignUp = () => {
    navigation?.navigate('SignUp');
  };

  const handleBack = () => {
    navigation?.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.content}
      >
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
            <Text style={styles.title}>Welcome Back!</Text>
            <View style={styles.titleHighlight} />
          </View>

          {/* GOOGLE BUTTON */}
          <TouchableOpacity
            style={styles.googleButton}
            onPress={handleGoogleSignIn}
            activeOpacity={0.8}
          >
            <Image
              source={{
                uri: 'https://i.postimg.cc/8PV44f5S/Group-6795.png',
              }}
              style={styles.googleLogo}
            />
            <Text style={styles.googleText}>CONTINUE WITH GOOGLE</Text>
          </TouchableOpacity>

          {/* DIVIDER */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR LOG IN WITH EMAIL</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* EMAIL */}
          <View style={styles.inputSection}>
            <Text style={styles.label}>EMAIL</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* PASSWORD */}
          <View style={styles.inputSection}>
            <Text style={styles.label}>PASSWORD</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                activeOpacity={0.7}
              >
                {showPassword ? (
                  <EyeOff size={18} color="#8E8E93" />
                ) : (
                  <Eye size={18} color="#8E8E93" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* LOGIN BUTTON */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            activeOpacity={0.85}
          >
            <Text style={styles.loginButtonText}>LOG IN</Text>
          </TouchableOpacity>

          {/* FORGOT */}
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
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },

  /* HEADER */
  header: {
    paddingVertical: 16,
  },
  backImage: {
    width: 64,
    height: 64,
    transform: [{ rotate: '180deg' }],
  },

  /* MAIN */
  main: {
    flex: 1,
  },

  /* TITLE */
  titleWrapper: {
    alignItems: 'center',
    marginBottom: 36,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1C1C1E',
    zIndex: 2,
  },
  titleHighlight: {
    position: 'absolute',
    bottom: 4,
    right: '50%',
    height: 10,
    width: 100,
    backgroundColor: '#BFFF00',
    zIndex: 1,
  },

  /* GOOGLE */
  googleButton: {
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },
  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1C1C1E',
    letterSpacing: 0.4,
  },

  /* DIVIDER */
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5EA',
  },
  dividerText: {
    fontSize: 12,
    color: '#8E8E93',
    marginHorizontal: 14,
    letterSpacing: 1,
  },

  /* INPUTS */
  inputSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  input: {
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    paddingHorizontal: 18,
    fontSize: 15,
     outlineStyle: 'none',
  },
  passwordContainer: {
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    fontSize: 15,
    outlineStyle: 'none',
  },

  /* LOGIN */
  loginButton: {
    height: 58,
    borderRadius: 29,
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },

  forgotPassword: {
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#8E8E93',
  },

  /* FOOTER */
  footer: {
    paddingBottom: 36,
    alignItems: 'center',
  },
  signupText: {
    fontSize: 13,
    color: '#8E8E93',
  },
  signupLink: {
    color: '#000000',
    fontWeight: '600',
  },
});
