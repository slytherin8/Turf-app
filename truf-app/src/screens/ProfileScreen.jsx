import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import {
    ChevronRight,
    Settings,
    Calendar,
    Star,
    User,
    LogOut,
    Users,
    Info,
    Edit2,
    Home,
    Search
} from 'lucide-react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';

export const ProfileScreen = ({ navigation }) => {
    const [mainNavTab, setMainNavTab] = useState('User');

    const MENU_ITEMS = [
        { id: 'booking', label: 'My Booking', icon: Calendar, route: 'MyBooking', detail: 'Check your current and past Bookings' },
        { id: 'rate', label: 'Rate the app', icon: Star, detail: 'Send love to help other Discoveries' },
        { id: 'account', label: 'My Account', icon: User, route: 'AccountSetting', detail: 'Make changes for your account' },
        { id: 'logout', label: 'Log out', icon: LogOut, route: 'Logout', detail: 'Log out from current session for safety' },
    ];

    const OTHER_SECTION = [
        { id: 'switch', label: 'Switch Account', icon: Users },
        { id: 'about', label: 'About App', icon: Info },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Profile</Text>
                </View>

                {/* USER INFO */}
                <View style={styles.userInfo}>
                    <View style={styles.avatarWrapper}>
                        <Image
                            source={{ uri: 'https://i.postimg.cc/NG3tC79L/Group-37014.png' }}
                            style={styles.avatar}
                        />
                        <TouchableOpacity
                            style={styles.editIconBadge}
                            onPress={() => navigation.navigate('EditProfile')}
                        >
                            <Edit2 size={16} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.userTextInfo}>
                        <Text style={styles.userName}>Hemalatha Abishek</Text>
                        <Text style={styles.userRole}>Turf owner</Text>
                    </View>
                </View>

                {/* MENU */}
                <View style={styles.menuContainer}>
                    {MENU_ITEMS.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.menuItem}
                            onPress={() => item.route && navigation.navigate(item.route)}
                        >
                            <View style={styles.menuItemLeft}>
                                <View style={styles.iconBox}>
                                    <item.icon size={20} color="#8E8E93" />
                                </View>
                                <View style={styles.menuTextContainer}>
                                    <Text style={styles.menuLabel}>{item.label}</Text>
                                    {item.detail && <Text style={styles.menuDetail}>{item.detail}</Text>}
                                </View>
                            </View>
                            <ChevronRight size={20} color="#8E8E93" />
                        </TouchableOpacity>
                    ))}
                </View>

                {/* OTHER SECTION */}
                <View style={styles.otherSection}>
                    <Text style={styles.otherTitle}>Other</Text>
                    {OTHER_SECTION.map((item) => (
                        <TouchableOpacity key={item.id} style={styles.otherItem}>
                            <View style={styles.otherLeft}>
                                <View style={styles.otherIconBox}>
                                    <item.icon size={20} color="#8E8E93" />
                                </View>
                                <Text style={styles.otherLabel}>{item.label}</Text>
                            </View>
                            <ChevronRight size={20} color="#8E8E93" />
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={{ height: 120 }} />
            </ScrollView>

            {/* BOTTOM NAV */}
            <View style={styles.bottomNavWrapper}>
                <View style={styles.bottomNav}>
                    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Main')}>
                        <Home size={24} color={COLORS.white} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navItem} onPress={() => { }}>
                        <Search size={22} color={COLORS.white} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navItem} onPress={() => { }}>
                        <Calendar size={24} color={COLORS.white} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.navItem, styles.activeNavItem]}
                        onPress={() => { }}
                    >
                        <User size={24} color={COLORS.text} />
                        <Text style={styles.activeNavLabel}>Profile</Text>
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
        paddingHorizontal: 20,
        paddingVertical: 20,
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
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    avatarWrapper: {
        position: 'relative',
        marginRight: 16,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#EFEFEF',
    },
    editIconBadge: {
        position: 'absolute',
        bottom: -2,
        right: -2,
        backgroundColor: '#FFF',
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#EFEFEF',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    userTextInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    userRole: {
        fontSize: 12,
        color: '#8E8E93',
        marginTop: 2,
    },
    menuContainer: {
        paddingHorizontal: 20,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F2F2F7',
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    iconBox: {
        width: 40,
        height: 40,
        backgroundColor: '#F8F8F8',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    menuTextContainer: {
        flex: 1,
    },
    menuLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    menuDetail: {
        fontSize: 10,
        color: '#8E8E93',
        marginTop: 2,
    },
    otherSection: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    otherTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#8E8E93',
        textTransform: 'uppercase',
        marginBottom: 10,
    },
    otherItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
    },
    otherLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    otherIconBox: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#EFEFEF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    otherLabel: {
        fontSize: 14,
        color: '#000',
    },
    bottomNavWrapper: {
        position: 'absolute',
        bottom: 24,
        left: 20,
        right: 20,
    },
    bottomNav: {
        flexDirection: 'row',
        backgroundColor: '#1C1C1E',
        borderRadius: 40,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    navItem: {
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    activeNavItem: {
        flexDirection: 'row',
        backgroundColor: COLORS.accent,
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 12,
        flex: 2,
    },
    activeNavLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 8,
    },
});
