import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { Share2, CreditCard, ChevronDown, Check } from 'lucide-react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';

const { width } = Dimensions.get('window');

export const PaymentSuccessScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.successBox}>
                    <Text style={styles.successTitle}>
                        <Text style={styles.paymentText}>Payment</Text> successful
                    </Text>

                    <View style={styles.illustration}>
                        <View style={styles.cardOutline}>
                            <View style={styles.cardStrip} />
                            <View style={styles.checkCircle}>
                                <Check size={24} color="#000" strokeWidth={3} />
                            </View>
                        </View>
                    </View>

                    <Text style={styles.message}>
                        Kindly reach out to the respective turf venue for further clarification.
                    </Text>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.homeBtn}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.homeBtnText}>Redirect to home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareBtn}>
                        <Share2 size={24} color={COLORS.accent} />
                    </TouchableOpacity>
                </View>
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
        marginBottom: 40,
        textAlign: 'center',
    },
    paymentText: {
        color: '#BFFF00',
        backgroundColor: '#0A4A29',
        paddingHorizontal: 4,
    },
    illustration: {
        width: 140,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    cardOutline: {
        width: 100,
        height: 70,
        borderWidth: 3,
        borderColor: '#000',
        borderRadius: 8,
        position: 'relative',
        justifyContent: 'center',
    },
    cardStrip: {
        height: 10,
        backgroundColor: '#000',
        width: '100%',
        position: 'absolute',
        top: 10,
    },
    checkCircle: {
        position: 'absolute',
        bottom: -15,
        right: -15,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#BFFF00',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FFF',
    },
    message: {
        fontSize: 12,
        color: '#8E8E93',
        textAlign: 'center',
        lineHeight: 18,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    homeBtn: {
        flex: 1,
        backgroundColor: '#1C1C1E',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    homeBtnText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    shareBtn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#1C1C1E',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
