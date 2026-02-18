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
  Home,
  Search,
  Calendar,
  User,
} from 'lucide-react-native';
import { COLORS, SPACING } from '../constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width } = Dimensions.get('window');
const API_URL = process.env.EXPO_PUBLIC_API_URL;

const DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const MORNING_TIMES = ['5 am', '7 am', '9 am', '11 am'];
const AFTERNOON_TIMES = ['12 pm', '2 pm', '4 pm'];
const EVENING_TIMES = ['6 pm', '8 pm', '10 pm'];
const NIGHT_TIMES = ['11 pm', '12 am', '1 am'];

export const BookingScreen = ({ navigation ,route }) => {
  const [selectedDate, setSelectedDate] = useState(14);
  const [selectedCourt, setSelectedCourt] = useState('5 vs 5');
  const [activeTimeTab, setActiveTimeTab] = useState('Morning');
  const [selectedTime, setSelectedTime] = useState('5 am');
  const [currentMonth, setCurrentMonth] = useState('October 2025');
  const { turfName } = route.params;

  const getDatesInMonth = () => {
    return Array.from({ length: 31 }, (_, i) => i + 1);
  };

  const getTimesForTab = () => {
    switch (activeTimeTab) {
      case 'Morning': return MORNING_TIMES;
      case 'Afternoon': return AFTERNOON_TIMES;
      case 'Evening': return EVENING_TIMES;
      case 'Night': return NIGHT_TIMES;
      default: return MORNING_TIMES;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <ArrowLeft size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Book Your Slot</Text>
          <View style={{ width: 32 }} />
        </View>

        {/* TURF INFO CARD */}
        <View style={styles.turfInfoCard}>
          <View style={styles.turfHeader}>
            <View style={styles.turfDetails}>
              <Text style={styles.turfName}>Game Mini Turf</Text>
              <Text style={styles.locationText}>Avadi,Chennai</Text>
            </View>
            <View style={styles.ratingSection}>
              <View style={styles.starsRow}>
                {[1, 2, 3, 4].map(i => (
                  <Star key={i} size={16} color="#FFD700" fill="#FFD700" />
                ))}
                <Star size={16} color="#D1D1D1" fill="#D1D1D1" />
              </View>
              <Text style={styles.reviewCount}>(84) reviews</Text>
            </View>
          </View>
        </View>

        {/* COURT TYPE SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Court Type</Text>
          <View style={styles.courtTypeContainer}>
            <View style={styles.courtRow}>
              <TouchableOpacity
                style={[
                  styles.courtChip,
                  selectedCourt === '5 vs 5' && styles.activeCourtChip,
                ]}
                onPress={() => setSelectedCourt('5 vs 5')}
              >
                <Text
                  style={[
                    styles.courtChipText,
                    selectedCourt === '5 vs 5' && styles.activeCourtText,
                  ]}
                >
                  5 vs 5
                </Text>
              </TouchableOpacity>
              <Text style={styles.courtCount}>• 2 Courts</Text>
            </View>
            <View style={styles.courtRow}>
              <TouchableOpacity
                style={[
                  styles.courtChip,
                  selectedCourt === '7 vs 7' && styles.activeCourtChip,
                ]}
                onPress={() => setSelectedCourt('7 vs 7')}
              >
                <Text
                  style={[
                    styles.courtChipText,
                    selectedCourt === '7 vs 7' && styles.activeCourtText,
                  ]}
                >
                  7 vs 7
                </Text>
              </TouchableOpacity>
              <Text style={styles.courtCount}>• 1 Court</Text>
            </View>
          </View>
        </View>

        {/* CALENDAR SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select date</Text>
          <View style={styles.calendarCard}>
            <View style={styles.calendarHeader}>
              <Text style={styles.monthText}>{currentMonth}</Text>
              <View style={styles.calendarNav}>
                <TouchableOpacity style={styles.navButton}>
                  <ChevronLeft size={20} color="#666" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
                  <ChevronRight size={20} color="#666" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.daysHeader}>
              {DAYS.map(day => (
                <Text key={day} style={styles.dayLabel}>{day}</Text>
              ))}
            </View>

            <View style={styles.datesGrid}>
              {/* Empty cells for month start */}
              {Array.from({ length: 3 }).map((_, i) => (
                <View key={`empty-${i}`} style={styles.dateCell} />
              ))}
              
              {getDatesInMonth().map(date => (
                <TouchableOpacity
                  key={date}
                  style={[
                    styles.dateCell,
                    selectedDate === date && styles.activeDateCell,
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

        {/* TIME SELECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Time of Day</Text>
          
          {/* Time of Day Tabs */}
          <View style={styles.timeTabsContainer}>
            {['Morning', 'Afternoon', 'Evening', 'Night'].map(timeSlot => (
              <TouchableOpacity
                key={timeSlot}
                style={[
                  styles.timeTab,
                  activeTimeTab === timeSlot && styles.activeTimeTab,
                ]}
                onPress={() => setActiveTimeTab(timeSlot)}
              >
                <View
                  style={[
                    styles.timeDot,
                    activeTimeTab === timeSlot && styles.activeTimeDot,
                  ]}
                />
                <Text
                  style={[
                    styles.timeTabText,
                    activeTimeTab === timeSlot && styles.activeTimeTabText,
                  ]}
                >
                  {timeSlot}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Time Slots */}
          <View style={styles.timeSlotsContainer}>
            {getTimesForTab().map(time => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeSlot,
                  selectedTime === time && styles.activeTimeSlot,
                ]}
                onPress={() => setSelectedTime(time)}
              >
                <Text
                  style={[
                    styles.timeSlotText,
                    selectedTime === time && styles.activeTimeSlotText,
                  ]}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* FIXED BOTTOM SECTION */}
      <View style={styles.bottomSection}>
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={async () => {
              try {
                const userId = await AsyncStorage.getItem("userId");

                const response = await fetch(
                  `${API_URL}/booking/create`,
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      userId,
                      turfName,
                      location: "Avadi, Chennai",
                      courtType: selectedCourt,
                      date: `${selectedDate} ${currentMonth}`,
                      time: selectedTime,
                    }),
                  }
                );

                const data = await response.json();

                if (data.success) {
                  navigation.navigate("ReviewPayment");
                } else {
                  alert("Booking failed");
                }
              } catch (error) {
                console.log(error);
                alert("Something went wrong");
              }
            }}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Share2 size={20} color={COLORS.accent} />
          </TouchableOpacity>
        </View>

        {/* BOTTOM NAVIGATION */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Home size={24} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Search size={24} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
            <Calendar size={20} color="#000" />
            <Text style={styles.activeNavText}>Booking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <User size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },

  turfInfoCard: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  turfHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  turfDetails: {
    flex: 1,
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
    marginBottom: 8,
  },
  ratingSection: {
    alignItems: 'flex-end',
  },
  starsRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  reviewCount: {
    fontSize: 12,
    color: '#8E8E93',
  },

  section: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },

  courtTypeContainer: {
    gap: 12,
  },
  courtRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courtChip: {
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  activeCourtChip: {
    backgroundColor: '#BFFF00',
    borderColor: '#BFFF00',
  },
  courtChipText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  activeCourtText: {
    color: '#000',
    fontWeight: '600',
  },
  courtCount: {
    fontSize: 14,
    color: '#8E8E93',
    marginLeft: 12,
  },

  calendarCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  monthText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  calendarNav: {
    flexDirection: 'row',
    gap: 8,
  },
  navButton: {
    padding: 4,
  },

  daysHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  dayLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8E8E93',
    textAlign: 'center',
    width: (width - 80) / 7,
  },

  datesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dateCell: {
    width: (width - 80) / 7,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  activeDateCell: {
    backgroundColor: '#BFFF00',
    borderRadius: 20,
  },
  dateText: {
    fontSize: 16,
    color: '#000',
  },
  activeDateText: {
    fontWeight: '600',
    color: '#000',
  },

  timeTabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  timeTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  activeTimeTab: {
    backgroundColor: '#F8F8F8',
  },
  timeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D1D1D6',
    marginRight: 8,
  },
  activeTimeDot: {
    backgroundColor: '#BFFF00',
  },
  timeTabText: {
    fontSize: 14,
    color: '#8E8E93',
  },
  activeTimeTabText: {
    color: '#000',
    fontWeight: '500',
  },

  timeSlotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  timeSlot: {
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  activeTimeSlot: {
    backgroundColor: '#BFFF00',
    borderColor: '#BFFF00',
  },
  timeSlotText: {
    fontSize: 14,
    color: '#666',
  },
  activeTimeSlotText: {
    color: '#000',
    fontWeight: '500',
  },

  bottomSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    paddingTop: 16,
    paddingBottom: Platform.OS === 'ios' ? 34 : 16,
  },

  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  nextButton: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  shareButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#1C1C1E',
    marginHorizontal: 20,
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  activeNavItem: {
    flexDirection: 'row',
    backgroundColor: '#BFFF00',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  activeNavText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
});
