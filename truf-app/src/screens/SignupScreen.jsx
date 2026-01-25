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
import { Eye, EyeOff, Check } from 'lucide-react-native';

export const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = () => navigation?.navigate('Verification');
  const handleGoogleSignIn = () => navigation?.navigate('Verification');
  const handleLogin = () => navigation?.navigate('SignIn');
  const handleBack = () => navigation?.goBack();

  const isUsernameValid = username.length > 3;
  const isEmailValid = email.includes('@') && email.includes('.');
  const isPasswordValid = password.length > 6;

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
            <Text style={styles.title}>Create your account</Text>
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
            <Text style={styles.dividerText}>OR CREATE WITH EMAIL</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* USERNAME */}
          <View style={styles.inputSection}>
            <Text style={styles.label}>USERNAME</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
              />
              {isUsernameValid && <Check size={18} color="#34C759" />}
            </View>
          </View>

          {/* EMAIL */}
          <View style={styles.inputSection}>
            <Text style={styles.label}>EMAIL</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {isEmailValid && <Check size={18} color="#34C759" />}
            </View>
          </View>

          {/* PASSWORD */}
          <View style={styles.inputSection}>
            <Text style={styles.label}>PASSWORD</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              {isPasswordValid && <Check size={18} color="#34C759" />}
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeButton}
              >
                {showPassword ? (
                  <EyeOff size={18} color="#8E8E93" />
                ) : (
                  <Eye size={18} color="#8E8E93" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* SIGN UP */}
          <TouchableOpacity
            style={styles.signupButton}
            onPress={handleSignup}
            activeOpacity={0.85}
          >
            <Text style={styles.signupButtonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.footerText}>
              ALREADY HAVE AN ACCOUNT?{' '}
              <Text style={styles.footerLink}>LOGIN</Text>
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
    position: 'relative',
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
    right: '65%',
    width: 80,
    height: 10,
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
  inputContainer: {
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
     outlineStyle: 'none',
  },
  input: {
    flex: 1,
    fontSize: 15,
     outlineStyle: 'none',
  },
  eyeButton: {
    marginLeft: 6,
  },

  /* BUTTON */
  signupButton: {
    height: 58,
    borderRadius: 29,
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    
  },
  signupButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 0.5,
    
  },

  /* FOOTER */
  footer: {
    paddingBottom: 36,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#8E8E93',
  },
  footerLink: {
    color: '#000000',
    fontWeight: '600',
  },
});
