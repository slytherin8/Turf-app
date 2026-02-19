import React, { useState, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, ChevronRight, Mail, Lock } from 'lucide-react-native';
import { COLORS } from '../constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export const AccountSettingScreen = ({ navigation }) => {

    const [user, setUser] = useState(null);
    const API_URL = process.env.EXPO_PUBLIC_API_URL;

    const fetchProfile = async () => {
        try {
            const token = await AsyncStorage.getItem("token");

            const res = await fetch(`${API_URL}/auth/me`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();

            if (res.ok) {
                setUser(data);
            } else {
                console.log("Profile fetch error:", data.message);
            }

        } catch (err) {
            console.log("Profile fetch failed", err);
        }
    };

    // 🔥 This runs EVERY TIME screen is focused
    useFocusEffect(
        useCallback(() => {
            fetchProfile();
        }, [])
    );

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backBtn}
                >
                    <ArrowLeft size={24} color="#BFFF00" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Account Setting</Text>
                <View style={{ width: 32 }} />
            </View>

            <View style={styles.profileCard}>
                <View style={styles.profileLeft}>
                    <Image
                        source={{
                            uri: 'https://i.postimg.cc/XvRCNScR/User-image-(1).png',
                        }}
                        style={styles.avatar}
                    />
                    <View>
                        <Text style={styles.name}>
                            {user?.username || "Loading..."}
                        </Text>

                        <Text style={styles.id}>
                            {user?.email || ""}
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.options}>

                <TouchableOpacity
                    style={styles.optionItem}
                    onPress={() => navigation.navigate('ChangeEmail')}
                >
                    <View style={styles.optionLeft}>
                        <View style={styles.iconBox}>
                            <Mail size={20} color="#8E8E93" />
                        </View>
                        <Text style={styles.optionLabel}>Change Email</Text>
                    </View>
                    <ChevronRight size={20} color="#8E8E93" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.optionItem}
                    onPress={() => navigation.navigate('ChangePassword')}
                >
                    <View style={styles.optionLeft}>
                        <View style={styles.iconBox}>
                            <Lock size={20} color="#8E8E93" />
                        </View>
                        <Text style={styles.optionLabel}>Change Password</Text>
                    </View>
                    <ChevronRight size={20} color="#8E8E93" />
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
        marginRight: 12
    },
    name: {
        fontSize: 16,
        fontWeight: '700'
    },
    id: {
        color: '#BDBDBD',
        marginTop: 4
    },
    options: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    optionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F2F2F7',
    },
    optionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBox: {
        width: 40,
        height: 40,
        backgroundColor: '#F8F8F8',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    optionLabel: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    }
});
