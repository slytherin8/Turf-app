import React, { useState , useEffect } from 'react';
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
} from 'lucide-react-native';
import BottomNav from '../components/BottomNav';
import { COLORS, SPACING, SIZES } from '../constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage'

export const MyBookingScreen = ({ navigation }) => {
        const [user, setUser] = useState(null)
        const API_URL = process.env.EXPO_PUBLIC_API_URL;
        const [mainNavTab, setMainNavTab] = useState('User');

         useEffect(() => {
          const fetchProfile = async () => {
            const token = await AsyncStorage.getItem("token");
        
            try {
              const res = await fetch(`${API_URL}/auth/me`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
        
          },
        });
        
              const data = await res.json();
              setUser(data);
            } catch (err) {
              console.log("Profile fetch failed", err);
            }
          };
        
          fetchProfile();
        }, []);
        
    const CURRENT_BOOKINGS = [
        {
            id: 'c1',
            name: 'Game Mini Turf',
            location: 'Avadi,Chennai',
            image: 'data:image/jpeg;base64,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',
        },
    ];

    const PAST_BOOKINGS = [
        {
            id: 'p1',
            name: 'Game Mini Turf',
            location: 'Avadi,Chennai',
            image: 'https://d3mt0x61rkkfy3.cloudfront.net/venue/749a413f-9480-417c-a785-50ebff383f45/original/1733395539-image_cropper_1733395530526.jpg',
        },
        {
            id: 'p2',
            name: 'Game Mini Turf',
            location: 'Avadi,Chennai',
            image: 'data:image/jpeg;base64,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',

        },
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
            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backBtn}
                >
                    <ArrowLeft size={24} color="#BFFF00" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>My Booking</Text>
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
                            <Text style={styles.name}>
                            {user?.username || "Loading..."}
                            </Text>

                            <Text style={styles.id}>
                            {user?.email}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* CURRENT BOOKINGS */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Current bookings</Text>
                    {CURRENT_BOOKINGS.map(renderBookingCard)}
                </View>

                {/* PAST BOOKINGS */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Past bookings</Text>
                    {PAST_BOOKINGS.map(renderBookingCard)}
                </View>

                <View style={{ height: 120 }} />
            </ScrollView>

            <BottomNav navigation={navigation} activeTab="Calendar" />
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
        backgroundColor: '#2C2C2E',
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1C1C1E',
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
        borderRadius: 5,
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
        fontWeight: '600',
        color: '#000',
    },

    turfLocation: {
        fontSize: 12,
        color: '#8E8E93',
        marginTop: 4,
    },


});
