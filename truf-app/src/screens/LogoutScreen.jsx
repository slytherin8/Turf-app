import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { ArrowLeft, AlertTriangle, LogOut } from 'lucide-react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';

export const LogoutScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <ArrowLeft size={24} color="#BFFF00" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Logout</Text>
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

            <View style={styles.content}>
                <View style={styles.logoutCard}>
                    <View style={styles.warningIconBox}>
                        <AlertTriangle size={50} color="#FF3B30" fill="#FFEBEB" />
                    </View>
                    <Text style={styles.question}>Are you sure you want to log out of your account?</Text>

                    <TouchableOpacity
                        style={styles.logoutBtn}
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text style={styles.logoutBtnText}>Logout </Text>
                        <LogOut size={16} color="#FFF" />
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 10,
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
        marginVertical: 10,
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
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    logoutCard: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#F2F2F7',
    },
    warningIconBox: {
        marginBottom: 20,
    },
    question: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
        marginBottom: 24,
        lineHeight: 22,
    },
    logoutBtn: {
        backgroundColor: '#FF3B30',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 25,
        paddingHorizontal: 30,
    },
    logoutBtnText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8,
    }
});
