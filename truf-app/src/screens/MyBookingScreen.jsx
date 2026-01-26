import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    ArrowLeft,
    ChevronRight,
    Home,
    Search,
    Calendar,
    User
} from 'lucide-react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';

export const MyBookingScreen = ({ navigation }) => {
    const [mainNavTab, setMainNavTab] = useState('User');

    const CURRENT_BOOKINGS = [
        { id: 'c1', name: 'Game Mini Turf', location: 'Avadi,Chennai', image: 'https://i.postimg.cc/mD8zQZ7y/game-mini-turf.jpg' }
    ];

    const PAST_BOOKINGS = [
        { id: 'p1', name: 'Game Mini Turf', location: 'Avadi,Chennai', image: 'https://i.postimg.cc/7Z9QDn5B/turf-bg.jpg' },
        { id: 'p2', name: 'Game Mini Turf', location: 'Avadi,Chennai', image: 'https://i.postimg.cc/mD8zQZ7y/game-mini-turf.jpg' }
    ];

    const renderBookingCard = (item) => (
        <TouchableOpacity key={item.id} style={styles.bookingCard}>
            <View style={styles.cardLeft}>
                <Image source={{ uri: item.image }} style={styles.turfImage} />
                <View style={styles.turfInfo}>
                    <Text style={styles.turfName}>{item.name}</Text>
                    <Text style={styles.turfLocation}>{item.location}</Text>
                </View>
            </View>
            <ChevronRight size={20} color="#8E8E93" />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <ArrowLeft size={24} color="#BFFF00" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>My Booking</Text>
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

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Current bookings</Text>
                    {CURRENT_BOOKINGS.map(renderBookingCard)}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Past bookings</Text>
                    {PAST_BOOKINGS.map(renderBookingCard)}
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
        marginBottom: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
        borderRadius: 15,
        marginHorizontal: 20,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    userTextInfo: {
        flex: 1,
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
    section: {
        paddingHorizontal: 20,
        marginTop: 24,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 16,
    },
    bookingCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#F2F2F7',
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
    },
    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    turfImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
    },
    turfInfo: {
        marginLeft: 12,
    },
    turfName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    turfLocation: {
        fontSize: 12,
        color: '#8E8E93',
        marginTop: 4,
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
