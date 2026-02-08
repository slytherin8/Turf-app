import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  MapPin,
  ChevronDown,
  Search,
  Heart,
  Star,
} from 'lucide-react-native';
import BottomNav from '../components/BottomNav';

const { width } = Dimensions.get('window');

const EXPLORE_TURFS = [
  {
    id: 'explore_1',
    name: 'Football',
    image: require('../../assets/turf_img.png'),
  },
  {
    id: 'explore_2', 
    name: 'Cricket',
    image: require('../../assets/turf_app_1.png'),
  },
  {
    id: 'explore_3',
    name: 'Basketball',
    image: require('../../assets/turf_img.png'),
  },
  {
    id: 'explore_4',
    name: 'Tennis',
    image: require('../../assets/turf_app_1.png'),
  },
];

const NEARBY_TURFS = [
  {
    id: 'near_1',
    name: 'Game Mini Turf',
    location: 'Avadi,Chennai',
    rating: 4.5,
    reviews: 84,
    price: 80,
    specialPrice: '₹ 399 for 6 / hrs',
    image: require('../../assets/turf_img.png'),
  },
  {
    id: 'near_2',
    name: 'Avadi Turf Point',
    location: 'Avadi,Chennai',
    rating: 4.1,
    reviews: 56,
    price: 90,
     specialPrice: '₹ 399 for 6 / hrs',
    image: require('../../assets/turf_app_1.png'),
  }
];

const RECOMMENDED_TURFS = [
  {
    id: 'rec_1',
    name: 'Game Mini Turf',
    location: 'Avadi,Chennai',
    rating: 4.5,
    reviews: 84,
    price: 80,
    specialPrice: '₹ 399 for 6 / hrs',
    image: require('../../assets/turf_img.png'),
  },
  {
    id: 'rec_2',
    name: 'Avadi Turf Point',
    location: 'Avadi,Chennai',
    rating: 4.1,
    reviews: 56,
    price: 90,
    specialPrice: '₹ 450 for 5 / hrs',
    image: require('../../assets/turf_app_1.png'),
  }
];

const HomeScreenWithoutEnable = ({ navigation }) => {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (itemId) => {
    setFavorites(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const renderExploreCard = ({ item }) => (
    <TouchableOpacity
      style={styles.exploreCard}
      onPress={() => navigation.navigate('TurfDetail')}
    >
      <Image source={item.image} style={styles.exploreImage} />
      <View style={styles.exploreOverlay}>
        <Text style={styles.exploreText}>{item.name}</Text>
        <View style={styles.exploreBtn}>
          <Text style={styles.exploreBtnText}>Explore</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderNearbyCard = ({ item }) => (
    <TouchableOpacity
      style={styles.nearbyCard}
      onPress={() => navigation.navigate('TurfDetail')}
    >
      <Image source={item.image} style={styles.nearbyImage} />
      <TouchableOpacity 
        style={styles.wishlistBtnNearby}
        onPress={() => toggleFavorite(item.id)}
      >
        <Heart 
          size={20} 
          color={favorites[item.id] ? '#FF6B6B' : '#BFFF00'} 
          fill={favorites[item.id] ? '#FF6B6B' : 'none'}
        />
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
            <MapPin size={24} color="#1C1C1E" fill="none" />
            <Text style={styles.locationMain}>Choose Your Location</Text>
            <View style={styles.titleHighlight} /> 
            <ChevronDown size={20} color="#5856D6" />
          </View>
          <View style={{ width: 40 }} />
        </View>

        {/* SEARCH */}
        <View style={styles.searchBox}>
          <Search size={18} color="#999" />
          <TextInput
            placeholder="Search Your location / Desired Turf"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>

        {/* EXPLORE */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Explore Turf</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <FlatList
          data={EXPLORE_TURFS}
          renderItem={renderExploreCard}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.exploreList}
        />

        {/* RECOMMENDED */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended Turf</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <View style={styles.nearbyList}>
          {RECOMMENDED_TURFS.map(item => (
            <View key={item.id}>
              {renderNearbyCard({ item })}
            </View>
          ))}
        </View>

  

        <View style={{ height: 120 }} />
      </ScrollView>

      <BottomNav navigation={navigation} activeTab="Home" />
    </SafeAreaView>
  );
};

export default HomeScreenWithoutEnable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    right: '59%',
    height: 9,
    width: 65,
    backgroundColor: '#BFFF00',
    zIndex: 1,
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 25,
    marginHorizontal: 20,
    paddingHorizontal: 15,
    height: 50,
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },

  seeAll: {
    color: '#777',
  },

  exploreList: {
    paddingLeft: 20,
    paddingBottom: 20,
  },

  exploreCard: {
    width: width * 0.45,
    backgroundColor: '#fff',
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

  exploreImage: {
    width: '100%',
    height: 120,
  },

  exploreOverlay: {
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

  exploreText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },

  exploreBtn: {
    backgroundColor: '#9AFF00',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  exploreBtnText: {
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
    borderRadius: 12,
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
    fontWeight: '600',
    color: '#fff',
  },
  nearbyLocation: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.8,
  },
  nearbyPriceSub: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
  nearbyRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  nearbyReviewText: {
    fontSize: 12,
    color: '#fff',
    marginLeft: 8,
  },
  specialPriceBadge: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  specialPriceContent: {
    alignItems: 'center',
  },
  specialPriceText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  specialPriceSubtext: {
    fontSize: 10,
    color: '#666',
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
