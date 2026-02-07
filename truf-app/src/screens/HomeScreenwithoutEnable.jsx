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
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  MapPin,
  ChevronDown,
  Search,
} from 'lucide-react-native';
import BottomNav from '../components/BottomNav';

const { width } = Dimensions.get('window');

const HomeScreenWithoutEnable = ({ navigation }) => {
  const [isFavorite, setIsFavorite] = useState(false);
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
            <Text style={styles.locationMain}>Avadi, Chennai</Text>
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

        <View style={styles.exploreRow}>
          <TouchableOpacity
            style={styles.exploreCard}
              onPress={() => navigation.navigate('TurfDetail')}
          >
            <Image
              source={require('../../assets/turf img.png')}
              style={styles.exploreImage}
            />
            <View style={styles.exploreFooter}>
              <Text style={styles.exploreText}>Football</Text>
              <View style={styles.exploreBtn}>
                <Text style={styles.exploreBtnText}>Explore</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.exploreCard}
         onPress={() => navigation.navigate('TurfDetail')}
          >
            <Image
              source={require('../../assets/turf-app 1.png')}
              style={styles.exploreImage}
            />
            <Text style={styles.exploreText}>Cricket</Text>
          </TouchableOpacity>
        </View>

        {/* RECOMMENDED */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended Turf</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <TouchableOpacity
          style={styles.recommendedCard}
          onPress={() => navigation.navigate('TurfDetail')}
        >
          <Image
            source={require('../../assets/turf img.png')}
            style={styles.recommendedImage}
          />

          <TouchableOpacity 
            style={styles.heartIcon}
            onPress={() => setIsFavorite(!isFavorite)}
          >
            <Image
              source={isFavorite 
                ? require('../../../assets/heart 2.png') 
                : require('../../../assets/heart (1).png')
              }
              style={styles.heartImage}
            />
          </TouchableOpacity>

          <View style={styles.recommendedOverlay}>
            <View>
              <Text style={styles.turfName}>Game Mini Turf</Text>
              <Text style={styles.turfLocation}>Avadi, Chennai</Text>

              <View style={styles.ratingRow}>
                <Text style={styles.rating}>★★★★★</Text>
                <Text style={styles.review}>(84 reviews)</Text>
              </View>

              <Text style={styles.price}>₹80 / hr</Text>
            </View>

            <View style={styles.offerBox}>
              <Text style={styles.offerPrice}>₹399</Text>
              <Text style={styles.offerText}>for 6 / hrs</Text>
            </View>
          </View>
        </TouchableOpacity>

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
    right: '26%',
    height: 10,
    width: 100,
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

  exploreRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 15,
  },

  exploreCard: {
    width: width * 0.45,
  },

  exploreImage: {
    width: '100%',
    height: 130,
    borderRadius: 12,
  },

  exploreFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },

  exploreText: {
    fontSize: 16,
    fontWeight: '500',
  },

  exploreBtn: {
    backgroundColor: '#111',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  exploreBtnText: {
    color: '#9AFF00',
    fontSize: 12,
  },

  recommendedCard: {
    marginHorizontal: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },

  recommendedImage: {
    width: '100%',
    height: 220,
  },

  heartIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 6,
    borderRadius: 20,
  },

  heartImage: {
    width: 18,
    height: 18,
  },

  recommendedOverlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  turfName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },

  turfLocation: {
    color: '#ddd',
    fontSize: 12,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rating: {
    color: '#FFD700',
  },

  review: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 6,
  },

  price: {
    color: '#fff',
    marginTop: 4,
  },

  offerBox: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },

  offerPrice: {
    fontSize: 18,
    fontWeight: '700',
  },

  offerText: {
    fontSize: 10,
    color: '#666',
  },


});
