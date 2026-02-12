import { useState, useEffect } from 'react';
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
import { Search, MapPin, ChevronDown, Heart, Star } from 'lucide-react-native';
import { COLORS, SPACING, SIZES, COMMON_STYLES } from '../constants/theme';
import BottomNav from '../components/BottomNav';

const { width } = Dimensions.get('window');

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
    const [turfs, setTurfs] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchTurfs = async () => {
            try {
                const response = await fetch(
                    "http://10.172.12.84:5000/api/turfs/recommended" // Android emulator
                );
                const data = await response.json();
                setTurfs(data);
            } catch (error) {
                console.error("Failed to fetch turfs", error);
            } finally {
                setLoading(false);
            }
        };
        useEffect(() => {
            fetchTurfs();
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

                <View style={styles.nearbyList}>
                    {NEARBY_TURFS.map(item => (
                        <View key={item.id}>
                            {renderNearbyCard({ item })}
                        </View>
                    ))}
                </View>

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
