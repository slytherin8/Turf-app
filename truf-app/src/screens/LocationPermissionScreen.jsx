import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { X, MapPin } from 'lucide-react-native';

export const LocationPermissionScreen = ({ navigation }) => {
    const handleBack = () => {
        navigation?.goBack();
    };

    const handleEnable = () => {
        navigation?.navigate('Main');
    };

    const handleRemindLater = () => {
        navigation?.navigate('Main');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity 
                        style={styles.backButton} 
                        onPress={handleBack}
                        activeOpacity={0.7}
                    >
                        <View style={styles.backButtonInner}>
                            <X size={20} color="#FFFFFF" strokeWidth={2.5} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.main}>
                    <Text style={styles.title}>
                        <Text style={styles.titleAccent}>Enable precise location</Text>
                    </Text>

                    <View style={styles.iconContainer}>
                        <View style={styles.iconBackground}>
                            <ImageBackground
                                source={{ uri: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&q=80' }}
                                style={styles.fieldBackground}
                                resizeMode="cover"
                            >
                                <View style={styles.mapPinContainer}>
                                    <MapPin size={48} color="#000000" strokeWidth={2} fill="none" />
                                </View>
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
        paddingTop: 16,
        paddingBottom: 16,
    },
    backButton: {
        width: 44,
        height: 44,
    },
    backButtonInner: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
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
        fontWeight: '700',
        color: '#000000',
        textAlign: 'center',
        marginBottom: 48,
        lineHeight: 32,
    },
    titleAccent: {
        color: '#BFFF00',
        fontWeight: '700',
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
        marginBottom: 48,
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
