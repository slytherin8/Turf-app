import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import {
  ArrowLeft,
  Heart,
  Star,
  Share2,
  Square,
  Bath,
  Shirt,
  Car,
  Flag,
  ArrowRight,
  Home,
  Search,
  Calendar,
  User,
  Image as ImageIcon,
  Edit,
  CloudUpload,
} from 'lucide-react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';

const { width } = Dimensions.get('window');

const GALLERY_IMAGES = [
  'https://i.postimg.cc/85z1zQnK/galaxy-turf.jpg',
  'https://i.postimg.cc/7Z9QDn5B/turf-bg.jpg',
  'https://i.postimg.cc/mD8zQZ7y/game-mini-turf.jpg',
  'https://i.postimg.cc/G3xV2W1n/hex-turf.jpg',
  'https://i.postimg.cc/85z1zQnK/galaxy-turf.jpg',
  'https://i.postimg.cc/G3xV2W1n/hex-turf.jpg',
  'https://i.postimg.cc/7Z9QDn5B/turf-bg.jpg',
  'https://i.postimg.cc/mD8zQZ7y/game-mini-turf.jpg',
];

const REVIEWS = [
  {
    id: '1',
    name: 'John Delrey',
    date: '10 month ago',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    avatar: 'https://i.postimg.cc/NG3tC79L/Group-37014.png',
  },
];

export const TurfDetailScreen = ({ navigation, route }) => {
  const [activeTab, setActiveTab] = useState('About');
  const [mainNavTab, setMainNavTab] = useState('Search');

  const renderAbout = () => (
    <View style={styles.venueInfo}>
      <Text style={styles.sectionTitle}>Venue info</Text>
      <Text style={styles.venueDesc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Book premium sports turfs near you with seamless scheduling, flexible time slots, and world-class playing surfaces designed for performance and comfort.
      </Text>

      <View style={styles.courtSizes}>
        <View style={styles.sizeBadge}>
          <Text style={styles.sizeBadgeText}>5 vs 5</Text>
        </View>
        <Text style={styles.sizeCount}>• 2 Courts</Text>
        <View style={[styles.sizeBadge, { marginLeft: 16 }]}>
          <Text style={styles.sizeBadgeText}>7 vs 7</Text>
        </View>
        <Text style={styles.sizeCount}>• 1 Court</Text>
      </View>

      <View style={styles.amenities}>
        <View style={styles.amenityRow}>
          <View style={styles.amenityItem}>
            <Square size={24} color="#333" />
            <View style={styles.amenityBadge}>
              <Text style={styles.amenityText}>2000 sqft</Text>
            </View>
          </View>
          <View style={styles.amenityItem}>
            <Bath size={24} color="#333" />
            <View style={styles.amenityBadge}>
              <Text style={styles.amenityText}>Washroom</Text>
            </View>
          </View>
        </View>

        <View style={styles.amenityRow}>
          <View style={styles.amenityItem}>
            <Shirt size={24} color="#333" />
            <View style={styles.amenityBadge}>
              <Text style={styles.amenityText}>Changing Rooms</Text>
            </View>
          </View>
          <View style={styles.amenityItem}>
            <Car size={24} color="#333" />
            <View style={styles.amenityBadge}>
              <Text style={styles.amenityText}>Car Parking</Text>
            </View>
          </View>
        </View>

        <View style={styles.amenityRow}>
          <View style={styles.amenityItem}>
            <Flag size={24} color="#333" />
            <View style={styles.amenityBadge}>
              <Text style={styles.amenityText}>No rebound walls</Text>
            </View>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Address</Text>
      <Text style={styles.addressText}>
        17-5, Anbalagan Nagar St. Kennedy Square, Perambur, Chennai, Tamil Nadu
      </Text>
      <TouchableOpacity style={styles.getDirectionBtn}>
        <Text style={styles.getDirectionText}>Get Direction</Text>
      </TouchableOpacity>
    </View>
  );

  const renderGallery = () => (
    <View style={styles.tabContentPadding}>
      <View style={styles.tabHeaderRow}>
        <Text style={styles.tabTitle}>Gallery<Text style={styles.tabCount}>(400)</Text></Text>
        <TouchableOpacity style={styles.addBtn}>
          <ImageIcon size={20} color={COLORS.white} />
          <Text style={styles.addBtnText}>Add photo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.galleryGrid}>
        {GALLERY_IMAGES.map((img, index) => (
          <Image key={index} source={{ uri: img }} style={styles.galleryItem} />
        ))}
      </View>

      {/* UPLOAD PLACEHOLDER */}
      <View style={styles.uploadContainer}>
        <View style={styles.uploadDashedBox}>
          <CloudUpload size={40} color="#8E8E93" />
        </View>
        <View style={styles.uploadLabelBox}>
          <Text style={styles.uploadLabelText}>Upload</Text>
        </View>
      </View>
    </View>
  );

  const renderReviews = () => (
    <View style={styles.tabContentPadding}>
      <View style={styles.tabHeaderRow}>
        <Text style={styles.tabTitle}>Reviews</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Edit size={20} color={COLORS.white} />
          <Text style={styles.addBtnText}>add review</Text>
        </TouchableOpacity>
      </View>
      {REVIEWS.map((review) => (
        <View key={review.id} style={styles.reviewCard}>
          <View style={styles.reviewHeader}>
            <Image source={{ uri: review.avatar }} style={styles.reviewerAvatar} />
            <View style={styles.reviewerInfo}>
              <Text style={styles.reviewerName}>{review.name}</Text>
              <Text style={styles.reviewDate}>{review.date}</Text>
            </View>
          </View>
          <Text style={styles.reviewComment}>{review.comment}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HERO SECTION */}
        <View style={styles.heroContainer}>
          <Image
            source={{ uri: 'https://i.postimg.cc/mD8zQZ7y/game-mini-turf.jpg' }}
            style={styles.heroImage}
          />
          <View style={styles.heroHeader}>
            <TouchableOpacity
              style={styles.headerIcon}
              onPress={() => navigation.goBack()}
            >
              <ArrowLeft size={24} color={COLORS.accent} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIcon}>
              <Heart size={24} color={COLORS.accent} />
            </TouchableOpacity>
          </View>

          {/* GALLERY THUMBNAILS */}
          <View style={styles.thumbnailContainer}>
            {GALLERY_IMAGES.slice(0, 6).map((img, index) => (
              <View
                key={index}
                style={[
                  styles.thumbnailWrapper,
                  index === 0 && styles.activeThumbnail
                ]}
              >
                <Image source={{ uri: img }} style={styles.thumbnail} />
              </View>
            ))}
          </View>
        </View>

        {/* TURF INFO */}
        <View style={styles.infoSection}>
          <View style={styles.titleRow}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>trending</Text>
            </View>
            <View style={styles.ratingBox}>
              <View style={styles.stars}>
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} size={16} color="#FFD700" fill="#FFD700" />
                ))}
                <Star size={16} color="#D1D1D1" fill="#D1D1D1" />
              </View>
              <Text style={styles.reviewCount}>(84) reviews</Text>
            </View>
          </View>

          <Text style={styles.turfName}>Game Mini Turf</Text>
          <Text style={styles.locationText}>Avadi,Chennai</Text>

          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={styles.bookNowBtn}
              onPress={() => navigation.navigate('TurfBooking', { turfName: 'Game Mini Turf' })}
            >
              <Text style={styles.bookNowText}>Book Now</Text>
              <View style={styles.nextIconBox}>
                <ArrowRight size={20} color={COLORS.accent} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <Share2 size={24} color="#BFFF00" />
            </TouchableOpacity>
          </View>
        </View>

        {/* TABS */}
        <View style={styles.tabsContainer}>
          {['About', 'Gallery', 'Review'].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
              {activeTab === tab && <View style={styles.activeTabIndicator} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* TAB CONTENT */}
        {activeTab === 'About' && renderAbout()}
        {activeTab === 'Gallery' && renderGallery()}
        {activeTab === 'Review' && renderReviews()}

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNavWrapper}>
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem} onPress={() => setMainNavTab('Home')}>
            <Home size={24} color={COLORS.white} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navItem, mainNavTab === 'Search' && styles.activeNavItem]}
            onPress={() => setMainNavTab('Search')}
          >
            <Search size={22} color={mainNavTab === 'Search' ? COLORS.text : COLORS.white} />
            <Text style={mainNavTab === 'Search' ? styles.activeNavLabel : { display: 'none' }}>Search</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem} onPress={() => setMainNavTab('Calendar')}>
            <Calendar size={24} color={COLORS.white} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem} onPress={() => setMainNavTab('User')}>
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
  heroContainer: {
    width: '100%',
    height: 280,
    backgroundColor: '#000',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  heroHeader: {
    position: 'absolute',
    top: 20,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnailContainer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
    justifyContent: 'space-between',
  },
  thumbnailWrapper: {
    width: width / 6 - 8,
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FFF',
    overflow: 'hidden',
  },
  activeThumbnail: {
    borderColor: COLORS.accent,
    borderWidth: 2,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  infoSection: {
    padding: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  badge: {
    backgroundColor: '#0A4A29',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeText: {
    color: COLORS.accent,
    fontSize: 12,
    fontWeight: 'bold',
  },
  ratingBox: {
    alignItems: 'flex-end',
  },
  stars: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  reviewCount: {
    fontSize: 12,
    color: '#3A3A3C',
  },
  turfName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  locationText: {
    fontSize: 16,
    color: '#8E8E93',
    marginBottom: 20,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookNowBtn: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1C1C1E',
    height: 50,
    borderRadius: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginRight: 16,
  },
  bookNowText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  nextIconBox: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    paddingHorizontal: 20,
  },
  tab: {
    marginRight: 32,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 18,
    color: '#8E8E93',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  activeTabIndicator: {
    position: 'absolute',
    bottom: -1,
    width: '100%',
    height: 2,
    backgroundColor: COLORS.accent,
  },
  venueInfo: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
  },
  venueDesc: {
    fontSize: 14,
    lineHeight: 20,
    color: '#3A3A3C',
    marginBottom: 20,
  },
  courtSizes: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  sizeBadge: {
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  sizeBadgeText: {
    color: COLORS.accent,
    fontSize: 14,
    fontWeight: 'bold',
  },
  sizeCount: {
    fontSize: 14,
    color: '#3A3A3C',
    marginLeft: 8,
  },
  amenities: {
    marginBottom: 24,
  },
  amenityRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  amenityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  amenityBadge: {
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginLeft: 12,
  },
  amenityText: {
    color: COLORS.accent,
    fontSize: 12,
    fontWeight: 'bold',
  },
  addressText: {
    fontSize: 14,
    color: '#3A3A3C',
    lineHeight: 20,
    marginBottom: 16,
  },
  getDirectionBtn: {
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  getDirectionText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 'bold',
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
  tabContentPadding: {
    padding: 20,
  },
  tabHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  tabTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  tabCount: {
    fontSize: 16,
    color: '#8E8E93',
    fontWeight: 'normal',
    marginLeft: 4,
  },
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addBtnText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  galleryItem: {
    width: (width - 60) / 2,
    height: 120,
    borderRadius: 12,
    marginBottom: 20,
  },
  reviewCard: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F2F2F7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  reviewerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  reviewDate: {
    fontSize: 10,
    color: '#8E8E93',
  },
  reviewComment: {
    fontSize: 13,
    color: '#3A3A3C',
    lineHeight: 18,
  },
  uploadContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  uploadDashedBox: {
    width: '100%',
    height: 120,
    borderWidth: 2,
    borderColor: '#D1D1D6',
    borderStyle: 'dashed',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadLabelBox: {
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 15,
    marginTop: -15,
    borderWidth: 1,
    borderColor: '#D1D1D6',
  },
  uploadLabelText: {
    fontSize: 12,
    color: '#8E8E93',
    fontWeight: 'bold',
  },
});
