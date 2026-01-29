import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ArrowLeft,
  Star,
  ChevronLeft,
  ChevronRight,
  Share2,
} from 'lucide-react-native';
import { COLORS, SPACING } from '../constants/theme';

const { width } = Dimensions.get('window');

const DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const DATES = Array.from({ length: 31 }, (_, i) => i + 1);

export const BookingScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(10);
  const [selectedCourt, setSelectedCourt] = useState('5 vs 5');
  const [activeTimeTab, setActiveTimeTab] = useState('Evening');

  return (
    <SafeAreaView style={styles.container}>

      {/* ---------------- SCROLL CONTENT ---------------- */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 220 }}
      >

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <ArrowLeft size={20} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Book Your Slot</Text>
          <View style={{ width: 32 }} />
        </View>

        {/* TURF INFO */}
        <View style={styles.summaryCard}>
          <Image
            source={{ uri: 'https://i.postimg.cc/mD8zQZ7y/game-mini-turf.jpg' }}
            style={styles.summaryImage}
          />
          <View style={styles.summaryInfo}>
            <Text style={styles.turfName}>Game Mini Turf</Text>
            <Text style={styles.locationText}>Avadi, Chennai</Text>

            <View style={styles.ratingRow}>
              {[1, 2, 3, 4].map(i => (
                <Star key={i} size={14} color="#FFD700" fill="#FFD700" />
              ))}
              <Star size={14} color="#D1D1D1" fill="#D1D1D1" />
              <Text style={styles.reviewCount}>(84 reviews)</Text>
            </View>
          </View>
        </View>

        {/* COURT TYPE */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Court Type</Text>

          <View style={styles.row}>
            {['5 vs 5', '7 vs 7'].map(type => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.courtBadge,
                  selectedCourt === type && styles.activeCourtBadge,
                ]}
                onPress={() => setSelectedCourt(type)}
              >
                <Text
                  style={[
                    styles.courtBadgeText,
                    selectedCourt === type && styles.activeCourtText,
                  ]}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* CALENDAR */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Date</Text>

          <View style={styles.calendarCard}>
            <View style={styles.calendarHeader}>
              <Text style={styles.monthText}>October 2025</Text>
              <View style={styles.calendarNav}>
                <ChevronLeft size={18} />
                <ChevronRight size={18} />
              </View>
            </View>

            <View style={styles.daysRow}>
              {DAYS.map(day => (
                <Text key={day} style={styles.dayLabel}>{day}</Text>
              ))}
            </View>

            <View style={styles.datesGrid}>
              {Array.from({ length: 3 }).map((_, i) => (
                <View key={i} style={styles.dateItem} />
              ))}

              {DATES.map(date => (
                <TouchableOpacity
                  key={date}
                  style={[
                    styles.dateItem,
                    selectedDate === date && styles.activeDate,
                  ]}
                  onPress={() => setSelectedDate(date)}
                >
                  <Text
                    style={[
                      styles.dateText,
                      selectedDate === date && styles.activeDateText,
                    ]}
                  >
                    {date}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* TIME */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Time of Day</Text>

          <View style={styles.timeRow}>
            {['Morning', 'Afternoon', 'Evening', 'Night'].map(time => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeTab,
                  activeTimeTab === time && styles.activeTimeTab,
                ]}
                onPress={() => setActiveTimeTab(time)}
              >
                <View
                  style={[
                    styles.timeDot,
                    activeTimeTab === time && styles.activeTimeDot,
                  ]}
                />
                <Text
                  style={[
                    styles.timeText,
                    activeTimeTab === time && styles.activeTimeText,
                  ]}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* ---------------- FIXED BOTTOM ---------------- */}
      <View style={styles.fixedBottom}>

        {/* MINI NAV */}
        <View style={styles.miniBottomNav}>
          <View style={styles.miniIcon} />
          <View style={styles.miniIcon} />
          <View style={styles.activeMini}>
            <Text style={styles.activeMiniText}>Booking</Text>
          </View>
          <View style={styles.miniIcon} />
        </View>

        {/* ACTIONS */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => navigation.navigate('ReviewPayment')}
          >
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.shareBtn}>
            <Share2 size={22} color={COLORS.accent} />
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  backBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },

  summaryCard: { flexDirection: 'row', padding: 20 },
  summaryImage: { width: 90, height: 90, borderRadius: 12 },
  summaryInfo: { marginLeft: 16 },
  turfName: { fontSize: 18, fontWeight: 'bold' },
  locationText: { color: '#777', marginVertical: 4 },
  ratingRow: { flexDirection: 'row', alignItems: 'center' },
  reviewCount: { fontSize: 12, marginLeft: 6 },

  section: { paddingHorizontal: 20, marginBottom: 20 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 12 },

  row: { flexDirection: 'row', gap: 16 },
  courtBadge: {
    backgroundColor: COLORS.accent,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
  },
  activeCourtBadge: { backgroundColor: '#000' },
  courtBadgeText: { fontSize: 12 },
  activeCourtText: { color: COLORS.accent, fontWeight: 'bold' },

  calendarCard: {
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 14,
    padding: 16,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  monthText: { fontWeight: 'bold' },
  calendarNav: { flexDirection: 'row', gap: 10 },

  daysRow: { flexDirection: 'row', justifyContent: 'space-between' },
  dayLabel: { width: width / 9, textAlign: 'center', fontSize: 12 },

  datesGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  dateItem: {
    width: width / 9,
    height: width / 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDate: {
    backgroundColor: COLORS.accent,
    borderRadius: width / 18,
  },
  dateText: { fontSize: 12 },
  activeDateText: { fontWeight: 'bold' },

  timeRow: { flexDirection: 'row', justifyContent: 'space-between' },
  timeTab: { flexDirection: 'row', alignItems: 'center' },
  activeTimeTab: {
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 10,
    borderRadius: 14,
  },
  timeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#CCC',
    marginRight: 6,
  },
  activeTimeDot: { backgroundColor: COLORS.accent },
  timeText: { fontSize: 12, color: '#777' },
  activeTimeText: { color: '#000', fontWeight: 'bold' },

  fixedBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    paddingBottom: Platform.OS === 'ios' ? 24 : 10,
    elevation: 20,
  },

  miniBottomNav: {
    flexDirection: 'row',
    backgroundColor: '#000',
    marginHorizontal: 20,
    borderRadius: 30,
    padding: 10,
    justifyContent: 'space-between',
  },
  miniIcon: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 4,
  },
  activeMini: {
    backgroundColor: COLORS.accent,
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 18,
  },
  activeMiniText: { fontWeight: 'bold' },

  footer: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  nextBtn: {
    flex: 1,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  nextText: { color: '#FFF', fontWeight: 'bold' },
  shareBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
