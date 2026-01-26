import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
} from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';

export const ChangePasswordScreen = ({ navigation }) => {
    const [passwords, setPasswords] = useState({ current: '', new: '' });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <ArrowLeft size={24} color="#BFFF00" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Change Email</Text>
                {/* Image shows "Change Email" title even for password screen, likely a design oversight, I will follow image exactly */}
                <View style={{ width: 32 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* USER INFO HEADER */}
                <View style={styles.userInfo}>
                    <Image
                        source={{ uri: 'https://i.postimg.cc/NG3tC79L/Group-37014.png' }}
                        style={styles.avatar}
                    />
                    <View style={styles.userTextInfo}>
                        <Text style={styles.userName}>Hemalatha Abishek</Text>
                        <Text style={styles.userRole}>Turf owner</Text>
                    </View>
                </View>

                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Current Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter current password"
                            secureTextEntry
                            value={passwords.current}
                            onChangeText={(val) => setPasswords({ ...passwords, current: val })}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>New Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter new password"
                            secureTextEntry
                            value={passwords.new}
                            onChangeText={(val) => setPasswords({ ...passwords, new: val })}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.verifyBtn}
                        onPress={() => navigation.navigate('AccountUpdateVerification', { type: 'Password' })}
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
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        marginVertical: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        marginHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    userRole: {
        fontSize: 12,
        color: '#8E8E93',
    },
    form: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    inputGroup: {
        marginBottom: 24,
    },
    label: {
        fontSize: 14,
        color: '#8E8E93',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#E5E5EA',
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 16,
        fontSize: 14,
        color: '#000',
    },
    verifyBtn: {
        backgroundColor: '#1C1C1E',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    verifyBtnText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
