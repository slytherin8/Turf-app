import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    FlatList,
    Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
        image: 'data:image/jpeg;base64,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',
    },
    {
        id: 'rec_2',
        name: 'Hex Football Turf',
        location: 'Avadi, Chennai',
        rating: 4.2,
        reviews: 93,
        price: 140,
        image: 'data:image/jpeg;base64,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',
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
        image: 'data:image/jpeg;base64,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',
    },
    {
        id: 'near_2',
        name: 'Avadi Turf Point',
        location: 'Avadi,Chennai',
        rating: 4.1,
        reviews: 56,
        price: 90,
        image: 'https://d3mt0x61rkkfy3.cloudfront.net/venue/749a413f-9480-417c-a785-50ebff383f45/original/1733395539-image_cropper_1733395530526.jpg',
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
  <Image
    source={{ uri: 'https://i.postimg.cc/hG6gbxgk/Group-37033.png' }}
    style={styles.nextArrowImg}
    resizeMode="contain"
  />
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
                        source={{ uri: 'https://i.postimg.cc/JnDCdhKY/Ellipse-4.png' }}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <View style={styles.locationSelector}>
                        <MapPin size={24} color={COLORS.text} fill={'none'} />
                       
                                  
                        <Text style={styles.locationMain}>Avadi, Chennai</Text>
                          <View style={styles.titleHighlight} />
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
    fontWeight: '700',
    color: '#1C1C1E',
    zIndex: 2,
        
        marginHorizontal: 4,
        
        paddingHorizontal: 4,
    },
    titleHighlight: {
    position: 'absolute',
    bottom: 0,
    right: '26%',
    height: 10,
    width: 100,
    backgroundColor: '#BFFF00',
    zIndex: 1,
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
        outlineColor: 'transparent',
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
        fontWeight: '600',
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
        borderRadius: 10,
        marginRight: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
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
        fontWeight: 'regular',
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
        backgroundColor: '#192126',
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 4,
       
    },
    priceText: {
        fontSize: 16,

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
        borderRadius:6,
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
        
    },
    nearbyName: {
        fontSize: 18,
        
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
        fontWeight: 'regular',
        color: '#000',
    },
    specialPriceSubtext: {
        fontSize: 10,
        color: '#3A3A3C',
    },
    nextBtn: {
        backgroundColor: '#F8F8F8',
        height: '100%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        paddingHorizontal: 8,
    },
    
    nextArrowImg: {
  width: 8,
  height: 12,
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
