import React from 'react';
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
  Heart,
  Home,
  Calendar,
  User,
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

const HomeScreenWithoutEnable = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://i.postimg.cc/JnDCdhKY/Ellipse-4.png' }}
            style={styles.logo}
          />

          <View style={styles.locationRow}>
            <MapPin size={20} color="#000" />
            <Text style={styles.locationText}>Choose your location</Text>
            <ChevronDown size={18} color="#000" />
          </View>
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
          <TouchableOpacity style={styles.exploreCard}>
            <Image
              source={{ uri: 'https://i.postimg.cc/8c8kPz8Z/football.jpg' }}
              style={styles.exploreImage}
            />
            <View style={styles.exploreFooter}>
              <Text style={styles.exploreText}>Football</Text>
              <View style={styles.exploreBtn}>
                <Text style={styles.exploreBtnText}>Explore</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.exploreCard}>
            <Image
              source={{ uri: 'https://i.postimg.cc/6qM5Xy0T/cricket.jpg' }}
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

        <View style={styles.recommendedCard}>
          <Image
            source={{ uri: 'https://i.postimg.cc/Gp1JxX7b/turf.jpg' }}
            style={styles.recommendedImage}
          />

          <TouchableOpacity style={styles.heartIcon}>
            <Heart size={18} color="#9AFF00" />
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
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        <Home size={22} color="#fff" />
        <View style={styles.activeTab}>
          <Search size={18} color="#000" />
          <Text style={styles.activeText}>Search</Text>
        </View>
        <Calendar size={22} color="#fff" />
        <User size={22} color="#fff" />
      </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },

  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  locationText: {
    fontSize: 16,
    fontWeight: '600',
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

  bottomNav: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    backgroundColor: '#111',
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    alignItems: 'center',
  },

  activeTab: {
    flexDirection: 'row',
    backgroundColor: '#9AFF00',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 25,
    alignItems: 'center',
    gap: 6,
  },

  activeText: {
    fontWeight: '600',
  },
});
