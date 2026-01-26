import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    FlatList,
    Dimensions,
} from 'react-native';
import { Search, MapPin, ChevronDown, Heart, Calendar, User, Home, Star } from 'lucide-react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';

const { width } = Dimensions.get('window');

const RECOMMENDED_TURFS = [
    {
        id: 'rec_1',
        name: 'Galaxy turf',
        location: 'Avadi, Chennai',
        rating: 4.5,
        reviews: 84,
        price: 120,
        image: 'https://i.postimg.cc/85z1zQnK/galaxy-turf.jpg',
    },
    {
        id: 'rec_2',
        name: 'Hex Football Turf',
        location: 'Avadi, Chennai',
        rating: 4.2,
        reviews: 93,
        price: 140,
        image: 'https://i.postimg.cc/G3xV2W1n/hex-turf.jpg',
    },
];

const NEARBY_TURFS = [
    {
        id: 'near_1',
        name: 'Game Mini Turf',
        location: 'Avadi,Chenai',
        rating: 4.5,
        reviews: 84,
        price: 80,
        specialPrice: '₹ 399 for 6 / hrs',
        image: 'https://i.postimg.cc/mD8zQZ7y/game-mini-turf.jpg',
    },
    {
        id: 'near_2',
        name: 'Avadi Turf Point',
        location: 'Avadi,Chennai',
        rating: 4.1,
        reviews: 56,
        price: 90,
        image: 'https://i.postimg.cc/7Z9QDn5B/turf-bg.jpg',
    }
];

export const HomeScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Search');

    const renderRecommendedCard = ({ item }) => (
        <TouchableOpacity
            style={styles.recommendedCard}
            onPress={() => navigation.navigate('TurfDetail', { turf: item })}
        >
            <Image source={{ uri: item.image }} style={styles.recommendedImage} />
            <TouchableOpacity style={styles.wishlistBtn}>
                <Heart size={20} color={COLORS.accent} />
            </TouchableOpacity>
            <View style={styles.cardInfo}>
                <Text style={styles.turfName}>{item.name}</Text>
                <View style={styles.locationRow}>
                    <MapPin size={12} color={COLORS.secondary} />
                    <Text style={styles.locationText}>{item.location}</Text>
                </View>
                <View style={styles.ratingRow}>
                    {[1, 2, 3, 4].map((i) => (
                        <Star key={i} size={12} color="#FFD700" fill="#FFD700" />
                    ))}
                    <Star size={12} color="#D1D1D1" fill="#D1D1D1" />
                    <Text style={styles.reviewText}>({item.reviews}) reviews</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>₹{item.price}<Text style={styles.perHr}>/hr</Text></Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    const renderNearbyCard = ({ item }) => (
        <TouchableOpacity
            style={styles.nearbyCard}
            onPress={() => navigation.navigate('TurfDetail', { turf: item })}
        >
            <Image source={{ uri: item.image }} style={styles.nearbyImage} />
            <TouchableOpacity style={styles.wishlistBtnNearby}>
                <Heart size={20} color={COLORS.accent} />
            </TouchableOpacity>

            <View style={styles.nearbyInfoOverlay}>
                <View>
                    <Text style={styles.nearbyName}>{item.name}</Text>
                    <Text style={styles.nearbyLocation}>{item.location}</Text>
                    <Text style={styles.nearbyPriceSub}>₹{item.price} / hr</Text>
                    <View style={styles.nearbyRatingRow}>
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} size={12} color="#FFD700" fill="#FFD700" />
                        ))}
                        <Text style={styles.nearbyReviewText}>({item.reviews}) reviews</Text>
                    </View>
                </View>

                {item.specialPrice && (
                    <View style={styles.specialPriceBadge}>
                        <View style={styles.specialPriceContent}>
                            <Text style={styles.specialPriceText}>{item.specialPrice.split('for')[0]}</Text>
                            <Text style={styles.specialPriceSubtext}>for{item.specialPrice.split('for')[1]}</Text>
                        </View>
                        <TouchableOpacity style={styles.nextBtn}>
                            <Text style={styles.nextArrow}>{' > '}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* HEADER */}
                <View style={styles.header}>
                    <Image
                        source={{ uri: 'https://i.postimg.cc/qvvY8Z7N/logo-turf.png' }}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <View style={styles.locationSelector}>
                        <MapPin size={24} color={COLORS.text} fill={COLORS.text} />
                        <Text style={styles.locationMain}>Avadi, Chennai</Text>
                        <ChevronDown size={20} color="#5856D6" />
                    </View>
                    <View style={{ width: 40 }} /> {/* Spacer */}
                </View>

                {/* SEARCH BAR */}
                <View style={styles.searchContainer}>
                    <View style={styles.searchBar}>
                        <Search size={20} color="#D1D1D6" />
                        <TextInput
                            placeholder="Search Your location/Desired Turf"
                            style={styles.searchInput}
                            placeholderTextColor="#C7C7CC"
                        />
                    </View>
                </View>

                {/* RECOMMENDED SECTION */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Recommended Turf</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAll}>See all</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={RECOMMENDED_TURFS}
                    renderItem={renderRecommendedCard}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.recommendedList}
                />

                {/* NEARBY SECTION */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Nearby Avadi,Chennai</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAll}>See all</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.nearbyList}>
                    {NEARBY_TURFS.map(item => (
                        <View key={item.id}>
                            {renderNearbyCard({ item })}
                        </View>
                    ))}
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>

            {/* BOTTOM NAV */}
            <View style={styles.bottomNavWrapper}>
                <View style={styles.bottomNav}>
                    <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Home')}>
                        <Home size={24} color={activeTab === 'Home' ? COLORS.white : COLORS.white} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.navItem, styles.activeNavItem]}
                        onPress={() => setActiveTab('Search')}
                    >
                        <Search size={22} color={COLORS.text} />
                        <Text style={styles.activeNavLabel}>Search</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Calendar')}>
                        <Calendar size={24} color={COLORS.white} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.navItem}
                        onPress={() => navigation.navigate('Main', { screen: 'Profile' })}
                    >
                        <User size={24} color={COLORS.white} />
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
        paddingHorizontal: 16,
        paddingTop: 10,
        marginBottom: 20,
    },
    logo: {
        width: 60,
        height: 60,
    },
    locationSelector: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationMain: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 4,
        color: '#000',
        backgroundColor: COLORS.accent,
        paddingHorizontal: 4,
    },
    searchContainer: {
        paddingHorizontal: 20,
        marginBottom: 24,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 25,
        paddingHorizontal: 16,
        height: 50,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 14,
        color: '#000',
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    seeAll: {
        fontSize: 14,
        color: '#3A3A3C',
    },
    recommendedList: {
        paddingLeft: 20,
        paddingBottom: 20,
    },
    recommendedCard: {
        width: width * 0.5,
        backgroundColor: COLORS.white,
        borderRadius: 15,
        marginRight: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#EFEFEF',
    },
    recommendedImage: {
        width: '100%',
        height: 120,
        borderRadius: 12,
        marginTop: 8,
        marginHorizontal: 8,
        width: (width * 0.5) - 16,
    },
    wishlistBtn: {
        position: 'absolute',
        top: 15,
        right: 15,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
        padding: 5,
    },
    cardInfo: {
        padding: 12,
    },
    turfName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 4,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    locationText: {
        fontSize: 12,
        color: COLORS.secondary,
        marginLeft: 4,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    reviewText: {
        fontSize: 12,
        color: '#8E8E93',
        marginLeft: 8,
    },
    priceContainer: {
        backgroundColor: '#0A4A29',
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    priceText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.accent,
    },
    perHr: {
        fontSize: 10,
        color: COLORS.white,
    },
    nearbyList: {
        paddingHorizontal: 20,
    },
    nearbyCard: {
        width: '100%',
        height: 200,
        borderRadius: 15,
        marginBottom: 16,
        overflow: 'hidden',
    },
    nearbyImage: {
        width: '100%',
        height: '100%',
    },
    wishlistBtnNearby: {
        position: 'absolute',
        top: 15,
        right: 15,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
        padding: 5,
        zIndex: 1,
    },
    nearbyInfoOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    nearbyName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    nearbyLocation: {
        fontSize: 12,
        color: COLORS.white,
        opacity: 0.8,
    },
    nearbyPriceSub: {
        fontSize: 14,
        color: COLORS.white,
        marginTop: 4,
    },
    nearbyRatingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    nearbyReviewText: {
        fontSize: 12,
        color: COLORS.white,
        marginLeft: 8,
    },
    specialPriceBadge: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        paddingLeft: 12,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
    },
    specialPriceContent: {
        marginRight: 8,
    },
    specialPriceText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    specialPriceSubtext: {
        fontSize: 10,
        color: '#3A3A3C',
    },
    nextBtn: {
        backgroundColor: '#F2F2F7',
        height: '100%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        paddingHorizontal: 8,
    },
    nextArrow: {
        fontSize: 18,
        color: '#8E8E93',
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
        marginBottom: 24,
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
