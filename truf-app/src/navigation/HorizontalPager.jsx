import React, { useRef } from 'react';
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { HomePageScreen } from '../screens/HomePageScreen';
import { SignInScreen } from '../screens/SignInScreen';
import { SignupScreen } from '../screens/SignupScreen';
import { VerificationScreen } from '../screens/VerificationScreen';
import { LocationScreen } from '../screens/LocationScreen';
import { HomeHeroScreen } from '../screens/HomeHeroScreen';
import { PagerNavigationProvider } from './PagerNavigationContext';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const HorizontalPager = () => {
    const scrollViewRef = useRef(null);

    const scrollToScreen = (screenIndex) => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({
                x: screenIndex * SCREEN_WIDTH,
                y: 0,
                animated: true,
            });
        }
    };

    const navigationValue = {
        scrollToScreen,
        screens: {
            HOME: 0,
            SIGN_IN: 1,
            SIGN_UP: 2,
            VERIFICATION: 3,
            LOCATION: 4,
            HOME_HERO: 5,
        },
    };

    return (
        <PagerNavigationProvider value={navigationValue}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                decelerationRate="fast"
                scrollEventThrottle={16}
                snapToInterval={SCREEN_WIDTH}
                snapToAlignment="center"
                style={styles.container}
            >
                <View style={styles.page}>
                    <HomePageScreen />
                </View>
                <View style={styles.page}>
                    <SignInScreen />
                </View>
                <View style={styles.page}>
                    <SignupScreen />
                </View>
                <View style={styles.page}>
                    <VerificationScreen />
                </View>
                <View style={styles.page}>
                    <LocationScreen />
                </View>
                <View style={styles.page}>
                    <HomeHeroScreen />
                </View>
            </ScrollView>
        </PagerNavigationProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page: {
        width: SCREEN_WIDTH,
    },
});
