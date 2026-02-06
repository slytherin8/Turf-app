import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePageScreen } from '../screens/HomePageScreen';
import { SignInScreen } from '../screens/SignInScreen';
import { SignupScreen } from '../screens/SignupScreen';
import { VerificationScreen } from '../screens/VerificationScreen';
import { LocationPermissionScreen } from '../screens/LocationPermissionScreen';
import { HomeScreen } from '../screens/HomeScreen';
import HomeScreenWithoutEnable from '../screens/HomeScreenwithoutEnable';
import { TurfDetailScreen } from '../screens/Truf page';
import { BookingScreen } from '../screens/BookingScreen';
import { ReviewPaymentScreen } from '../screens/ReviewPaymentScreen';
import { PaymentMethodScreen } from '../screens/PaymentMethodScreen';
import { PaymentSuccessScreen } from '../screens/PaymentSuccessScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { MyBookingScreen } from '../screens/MyBookingScreen';
import { AccountSettingScreen } from '../screens/AccountSettingScreen';
import { EditProfileScreen } from '../screens/EditProfileScreen';
import { LogoutScreen } from '../screens/LogoutScreen';
import { ChangeEmailScreen } from '../screens/ChangeEmailScreen';
import { ChangePasswordScreen } from '../screens/ChangePasswordScreen';
import { AccountUpdateVerificationScreen } from '../screens/AccountUpdateVerificationScreen';
import { TurfGalleryPage } from '../screens/TurfGalleryPage';
import { TurfReviewPage } from '../screens/TurfReviewPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: 'none',
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
        initialRouteName="HomePage"
      >
        <Stack.Screen name="HomePage" component={HomePageScreen} />
         <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="LocationPermission" component={LocationPermissionScreen} />
        <Stack.Screen name="HomeScreenwithoutEnable" component={HomeScreenWithoutEnable} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="TurfDetail" component={TurfDetailScreen} />
        <Stack.Screen name="TurfBooking" component={BookingScreen} />
        <Stack.Screen name="ReviewPayment" component={ReviewPaymentScreen} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />
        <Stack.Screen name="MyBooking" component={MyBookingScreen} />
        <Stack.Screen name="AccountSetting" component={AccountSettingScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Logout" component={LogoutScreen} />
        <Stack.Screen name="ChangeEmail" component={ChangeEmailScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="AccountUpdateVerification" component={AccountUpdateVerificationScreen} />
        <Stack.Screen name="TurfGalleryPage" component={TurfGalleryPage} />
        <Stack.Screen name="TurfReviewPage" component={TurfReviewPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
