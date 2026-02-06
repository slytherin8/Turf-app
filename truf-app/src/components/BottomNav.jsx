import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Home, Search, Calendar, User } from 'lucide-react-native';
import { COLORS } from '../constants/theme';

const BottomNav = ({ navigation, activeTab }) => {
    const navItems = [
        { id: 'Home', icon: Home, route: 'HomeScreenwithoutEnable', label: 'Home' },
        { id: 'Search', icon: Search, route: 'Main', screen: 'Home', label: 'Search' },
        { id: 'Calendar', icon: Calendar, route: 'MyBooking', label: 'Booking' },
        { id: 'Profile', icon: User, route: 'Main', screen: 'Profile', label: 'Profile' },
    ];

    return (
        <View style={styles.bottomNavWrapper}>
            <View style={styles.bottomNav}>
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                        <TouchableOpacity
                            key={item.id}
                            style={[styles.navItem, isActive && styles.activeNavItem]}
                            onPress={() => {
                                if (item.screen) {
                                    navigation.navigate(item.route, { screen: item.screen });
                                } else {
                                    navigation.navigate(item.route);
                                }
                            }}
                            activeOpacity={0.8}
                        >
                            <Icon size={24} color={isActive ? '#000' : '#FFF'} />
                            {isActive && (
                                <Text style={styles.activeNavLabel}>{item.label}</Text>
                            )}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
        backgroundColor: COLORS?.accent || '#BFFF00',
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

export default BottomNav;
