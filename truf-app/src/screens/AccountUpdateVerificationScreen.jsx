import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { Mail, CheckCircle2 } from 'lucide-react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';

const { width } = Dimensions.get('window');

export const AccountUpdateVerificationScreen = ({ navigation, route }) => {
    const { type } = route.params || { type: 'Email' };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.successBox}>
                    <Text style={styles.successTitle}>
                        <Text style={styles.highlightText}>{type} Update</Text> {"\n"}Verification
                    </Text>

                    <View style={styles.illustration}>
                        <View style={styles.envelopeOutline}>
                            <Mail size={80} color="#000" strokeWidth={1.5} />
                            <View style={styles.checkBadge}>
                                <CheckCircle2 size={32} color="#000" fill="#BFFF00" />
                            </View>
                        </View>
                    </View>

                    <Text style={styles.message}>
                        Please verify your email to proceed {"\n"}to the dashboard.
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.dashboardBtn}
                    onPress={() => navigation.navigate('Main')}
                >
                    <Text style={styles.dashboardBtnText}>Back to Dashboard</Text>
                </TouchableOpacity>
            </View>
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
        justifyContent: 'center',
        paddingHorizontal: 40,
    },
    successBox: {
        alignItems: 'center',
        marginBottom: 60,
    },
    successTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 60,
        textAlign: 'center',
    },
    highlightText: {
        color: '#000',
        backgroundColor: '#BFFF00',
        paddingHorizontal: 4,
    },
    illustration: {
        width: 140,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 60,
    },
    envelopeOutline: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkBadge: {
        position: 'absolute',
        bottom: -5,
        right: -5,
        backgroundColor: '#FFF',
        borderRadius: 16,
    },
    message: {
        fontSize: 14,
        color: '#8E8E93',
        textAlign: 'center',
        lineHeight: 20,
        marginTop: 20,
    },
    dashboardBtn: {
        backgroundColor: '#1C1C1E',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    dashboardBtnText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
