import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, FlatList, Dimensions, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, MapPin, ChevronDown, Heart, Star } from 'lucide-react-native';
import { COLORS, SPACING, SIZES, COMMON_STYLES } from '../constants/theme';
import BottomNav from '../components/BottomNav';

const { width } = Dimensions.get('window');
const API_URL = process.env.EXPO_PUBLIC_API_URL_TURF;

export const HomeScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Search');
    const [turfs, setTurfs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nearbyTurfs, setNearbyTurfs] = useState([]);

    const fetchTurfs = async () => {
            try {
                const response = await fetch(
                    `${API_URL}/recommended`
                );
                const data = await response.json();
                setTurfs(data);
            } catch (error) {
                console.error("Failed to fetch turfs", error);
            } finally {
                setLoading(false);
            }
        };

        const fetchNearbyTurfs = async () => {
            try {
                const response = await fetch(
                    `${API_URL}/nearby?location=Avadi`
                );
                const data = await response.json();
                console.log("Nearby API Data:", data);
                setNearbyTurfs(data);
            } catch (error) {
                console.error("Failed to fetch nearby turfs", error);
            }
        };

        useEffect(() => {
            fetchTurfs();
            fetchNearbyTurfs();
            }, []);

    const renderRecommendedCard = ({ item }) => (
        <TouchableOpacity
            style={styles.recommendedCard}
            onPress={() => navigation.navigate('TurfDetail', { turf: item })}
        >
            <Image source={{ uri: item.image     }} style={styles.recommendedImage} />
            <View style={styles.recommendedOverlay}>
                <Text style={styles.recommendedText}>{item.name}</Text>
                <View style={styles.recommendedBtn}>
                    <Text style={styles.recommendedBtnText}>Explore</Text>
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

                {item.specialPrice && item.specialPrice.includes('for') && (
                <View style={styles.specialPriceBadge}>
                    <View style={styles.specialPriceContent}>
                    <Text style={styles.specialPriceText}>
                        {item.specialPrice.split('for')[0]}
                    </Text>
                    <Text style={styles.specialPriceSubtext}>
                        {"for " + item.specialPrice.split('for')[1]}
                    </Text>
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
                    data={turfs}
                    keyExtractor={(item) => item._id?.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderRecommendedCard}
                />

                {/* NEARBY SECTION */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Nearby Avadi,Chennai</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAll}>See all</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={nearbyTurfs}
                    keyExtractor={(item) => item._id?.toString()}
                    renderItem={renderNearbyCard}
                    scrollEnabled={false}
                    />
                    
                <View style={{ height: 100 }} />
            </ScrollView>

            <BottomNav navigation={navigation} activeTab="Search" />
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
        width: width * 0.45,
        backgroundColor: COLORS.white,
        borderRadius: 12,
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
    },
    recommendedOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 12,
        backgroundColor: 'rgba(0,0,0,0.6)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    recommendedText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    recommendedBtn: {
        backgroundColor: '#9AFF00',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    recommendedBtnText: {
        color: '#000',
        fontSize: 12,
        fontWeight: '600',
    },
    nearbyList: {
        paddingHorizontal: 20,
    },
    nearbyCard: {
        width: '100%',
        height: 200,
        borderRadius: 6,
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


});
