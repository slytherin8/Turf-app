import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export const LocationPermissionScreen = ({ navigation }) => {
    const handleBack = () => {
        navigation?.goBack();
    };

    const handleEnable = () => {
        navigation?.navigate('HomeScreenwithoutEnable');
    };


    const handleRemindLater = () => {
        navigation?.navigate('HomeScreenwithoutEnable');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
                        <Image
                            source={{ uri: 'https://i.postimg.cc/4x0HyzkG/btn.png' }}
                            style={styles.backImage}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.main}>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>Enable precise location</Text>
                        <View style={styles.titleHighlight} />
                    </View>

                    <View style={styles.iconContainer}>
                        <View style={styles.iconBackground}>
                            <ImageBackground
                                source={{ uri: 'https://i.postimg.cc/RqrLJJBV/image-9.png' }}
                                style={styles.fieldBackground}
                                resizeMode="cover"
                            >

                            </ImageBackground>
                        </View>
                    </View>

                    <Text style={styles.description}>
                        Your location will be used to show people near you.
                    </Text>

                    <TouchableOpacity
                        style={styles.enableButton}
                        onPress={handleEnable}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.enableButtonText}>Enable Now</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.remindLater}
                        onPress={handleRemindLater}
                    >
                        <Text style={styles.remindLaterText}>Remind me later</Text>
                    </TouchableOpacity>
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
    header: {
        paddingVertical: 16,
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
        paddingBottom: 40,
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
        right: '74%',
        height: 10,
        width: 80,
        backgroundColor: '#BFFF00',
        zIndex: 1,
    },

    iconContainer: {
        marginBottom: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconBackground: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden',
    },
    fieldBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapPinContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        fontSize: 14,
        color: '#8E8E93',
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 28,
        paddingHorizontal: 24,
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
    remindLater: {
        padding: 12,
    },
    remindLaterText: {
        fontSize: 14,
        color: '#8E8E93',
        textAlign: 'center',
    },
});
