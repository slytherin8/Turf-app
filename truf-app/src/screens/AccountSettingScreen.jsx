import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { ArrowLeft, ChevronRight, Mail, Lock } from 'lucide-react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';

export const AccountSettingScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <ArrowLeft size={24} color="#BFFF00" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Account Setting</Text>
                <View style={{ width: 32 }} />
            </View>

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
