import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';

export const ChangePasswordScreen = ({ navigation }) => {
    const [passwords, setPasswords] = useState({
        current: '',
        new: '',
    });

    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backBtn}
                >
                    <ArrowLeft size={24} color="#BFFF00" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Change Email</Text>
                {/* Title intentionally kept as-is */}
                <View style={{ width: 32 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* PROFILE CARD */}
                <View style={styles.profileCard}>
                    <View style={styles.profileLeft}>
                        <Image
                            source={{
                                uri: 'https://i.postimg.cc/XvRCNScR/User-image-(1).png',
                            }}
                            style={styles.avatar}
                        />
                        <View>
                            <Text style={styles.name}>Itunuoluwa Abidoye</Text>
                            <Text style={styles.id}>TURFID34345</Text>
                        </View>
                    </View>
                </View>

                {/* FORM */}
                <View style={styles.form}>
                    {/* CURRENT PASSWORD */}
                    <View style={styles.inputSection}>
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.passwordWrapper}>
                            <TextInput
                                style={styles.input}
                                value={passwords.current}
                                onChangeText={(text) =>
                                    setPasswords({ ...passwords, current: text })
                                }
                                secureTextEntry={!showCurrent}
                                autoCapitalize="none"
                            />
                            <TouchableOpacity
                                style={styles.eyeBtn}
                                onPress={() => setShowCurrent(!showCurrent)}
                            >
                                {showCurrent ? (
                                    <EyeOff size={20} color="#8E8E93" />
                                ) : (
                                    <Eye size={20} color="#8E8E93" />
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* NEW PASSWORD */}
                    <View style={styles.inputSection}>
                        <Text style={styles.label}>New Password</Text>
                        <View style={styles.passwordWrapper}>
                            <TextInput
                                style={styles.input}
                                value={passwords.new}
                                onChangeText={(text) =>
                                    setPasswords({ ...passwords, new: text })
                                }
                                secureTextEntry={!showNew}
                                autoCapitalize="none"
                            />
                            <TouchableOpacity
                                style={styles.eyeBtn}
                                onPress={() => setShowNew(!showNew)}
                            >
                                {showNew ? (
                                    <EyeOff size={20} color="#8E8E93" />
                                ) : (
                                    <Eye size={20} color="#8E8E93" />
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.verifyBtn}
                        onPress={() =>
                            navigation.navigate('AccountUpdateVerification', {
                                type: 'Password',
                            })
                        }
                    >
                        <Text style={styles.verifyBtnText}>Verify</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 26,
    },

    backBtn: {
        backgroundColor: '#000',
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },

    profileCard: {
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 5,
    },

    profileLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 12,
    },

    name: {
        fontSize: 16,
        fontWeight: '700',
    },

    id: {
        color: '#BDBDBD',
        marginTop: 4,
    },

    form: {
        paddingHorizontal: 20,
        marginTop: 20,
    },

    inputSection: {
        marginBottom: 20,
    },

    label: {
        fontSize: 16,
        color: '#8E8E93',
        marginBottom: 8,
        letterSpacing: 0.5,
    },

    passwordWrapper: {
        position: 'relative',
    },

    input: {
        height: 52,
        borderRadius: 26,
        borderWidth: 1,
        borderColor: '#E5E5EA',
        paddingHorizontal: 18,
        paddingRight: 50,
        fontSize: 15,
        outlineStyle: 'none',
    },

    eyeBtn: {
        position: 'absolute',
        right: 18,
        top: 16,
    },

    verifyBtn: {
        height: 58,
        borderRadius: 29,
        backgroundColor: '#1C1C1E',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 16,
    },

    verifyBtnText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
        letterSpacing: 0.5,
    },
});
