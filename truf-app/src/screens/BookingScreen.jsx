import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    ArrowLeft,
    Star,
    MapPin,
    ChevronLeft,
    ChevronRight,
    Share2,
} from 'lucide-react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';

const { width } = Dimensions.get('window');

const DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const DATES = Array.from({ length: 31 }, (_, i) => i + 1);

export const BookingScreen = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState(14);
    const [activeTimeTab, setActiveTimeTab] = useState('Booking'); // Using 'Booking' to match the active state in design
    const [selectedCourt, setSelectedCourt] = useState('5 vs 5');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* HEADER */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <ArrowLeft size={24} color="#FFF" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Book Your Slot</Text>
                    <View style={{ width: 40 }} />
                </View>

                {/* TURF SUMMARY */}
                <View style={styles.summaryCard}>
                    <Image
                        source={{ uri: 'https://i.postimg.cc/mD8zQZ7y/game-mini-turf.jpg' }}
                        style={styles.summaryImage}
                    />
                    <View style={styles.summaryInfo}>
                        <Text style={styles.turfName}>Game Mini Turf</Text>
                        <Text style={styles.locationText}>Avadi,Chennai</Text>
                        <View style={styles.ratingRow}>
                            {[1, 2, 3, 4].map((i) => (
                                <Star key={i} size={14} color="#FFD700" fill="#FFD700" />
                            ))}
                            <Star size={14} color="#D1D1D1" fill="#D1D1D1" />
                            <Text style={styles.reviewCount}>(84) reviews</Text>
                        </View>
                    </View>
                </View>

                {/* COURT TYPE */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Court Type</Text>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={[styles.courtBadge, selectedCourt === '5 vs 5' && styles.activeCourtBadge]}
                            onPress={() => setSelectedCourt('5 vs 5')}
                        >
                            <Text style={[styles.courtBadgeText, selectedCourt === '5 vs 5' && styles.activeCourtBadgeText]}>5 vs 5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.courtBadge, selectedCourt === '7 vs 7' && styles.activeCourtBadge, { marginLeft: width * 0.2 }]}
                            onPress={() => setSelectedCourt('7 vs 7')}
                        >
                            <Text style={[styles.courtBadgeText, selectedCourt === '7 vs 7' && styles.activeCourtBadgeText]}>7 vs 7</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.row, { marginTop: 8 }]}>
                        <View style={styles.courtCountBadge}>
                            <Text style={styles.courtCountText}>• 1 Courts</Text>
                        </View>
                        <Text style={styles.courtDetailText}>• 2 Courts</Text>
                        <Text style={[styles.courtDetailText, { marginLeft: width * 0.15 }]}>• 1 Court</Text>
                    </View>
                </View>

                {/* CALENDAR */}
                <View style={styles.calendarSection}>
                    <Text style={styles.sectionTitle}>Select date</Text>
                    <View style={styles.calendarContainer}>
                        <View style={styles.calendarHeader}>
                            <Text style={styles.monthText}>October 2025</Text>
                            <View style={styles.calendarNav}>
                                <ChevronLeft size={20} color="#333" />
                                <View style={{ width: 16 }} />
                                <ChevronRight size={20} color="#333" />
                            </View>
                        </View>

                        <View style={styles.daysRow}>
                            {DAYS.map(day => (
                                <Text key={day} style={styles.dayLabel}>{day}</Text>
                            ))}
                        </View>

                        <View style={styles.datesGrid}>
                            {/* Add empty spots for padding if month starts mid-week */}
                            {Array.from({ length: 3 }).map((_, i) => <View key={`empty-${i}`} style={styles.dateItem} />)}
                            {DATES.map(date => (
                                <TouchableOpacity
                                    key={date}
                                    style={[styles.dateItem, selectedDate === date && styles.selectedDateItem]}
                                    onPress={() => setSelectedDate(date)}
                                >
                                    <Text style={[styles.dateText, selectedDate === date && styles.selectedDateText]}>
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
                    <View style={styles.timeTabs}>
                        {['Morning', 'Afternoon', 'Evening', 'Night'].map(tab => (
                            <TouchableOpacity
                                key={tab}
                                style={[styles.timeTab, activeTimeTab === tab && styles.activeTimeTab]}
                                onPress={() => setActiveTimeTab(tab)}
                            >
                                <View style={[styles.timeDot, activeTimeTab === tab && styles.activeTimeDot]} />
                                <Text style={[styles.timeTabText, activeTimeTab === tab && styles.activeTimeTabText]}>{tab}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* BOTTOM NAV SIMULATION (to match image style) */}
                <View style={styles.miniBottomNav}>
                    {/* Add nav icons as per image */}
                    <TouchableOpacity><View style={styles.miniNavIcon} /></TouchableOpacity>
                    <TouchableOpacity><View style={styles.miniNavIcon} /></TouchableOpacity>
                    <TouchableOpacity style={styles.activeMiniNavItem}>
                        <Text style={styles.activeMiniNavText}>Booking</Text>
                    </TouchableOpacity>
                    <TouchableOpacity><View style={styles.miniNavIcon} /></TouchableOpacity>
                </View>

                {/* ACTIONS */}
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.nextBtn}
                        onPress={() => navigation.navigate('ReviewPayment')}
                    >
                        <Text style={styles.nextText}>Next</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareActionBtn}>
                        <Share2 size={24} color={COLORS.accent} />
                    </TouchableOpacity>
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>
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
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    backBtn: {
        backgroundColor: '#333',
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    summaryCard: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
    },
    summaryImage: {
        width: 100,
        height: 100,
        borderRadius: 12,
    },
    summaryInfo: {
        marginLeft: 16,
        flex: 1,
    },
    turfName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    locationText: {
        fontSize: 14,
        color: '#8E8E93',
        marginVertical: 4,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    reviewCount: {
        fontSize: 12,
        color: '#8E8E93',
        marginLeft: 4,
    },
    section: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    courtBadge: {
        backgroundColor: COLORS.accent,
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 15,
    },
    activeCourtBadge: {
        backgroundColor: '#333',
    },
    courtBadgeText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
    },
    activeCourtBadgeText: {
        color: COLORS.accent,
    },
    courtCountBadge: {
        borderWidth: 1,
        borderColor: '#000',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
        marginRight: 8,
    },
    courtCountText: {
        fontSize: 10,
        color: '#000',
    },
    courtDetailText: {
        fontSize: 12,
        color: '#333',
    },
    calendarSection: {
        padding: 20,
    },
    calendarContainer: {
        backgroundColor: COLORS.white,
        borderRadius: 15,
        padding: 16,
        borderWidth: 1,
        borderColor: '#EFEFEF',
    },
    calendarHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    monthText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    calendarNav: {
        flexDirection: 'row',
    },
    daysRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    dayLabel: {
        width: width / 10,
        textAlign: 'center',
        fontSize: 12,
        color: '#8E8E93',
    },
    datesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    dateItem: {
        width: width / 10,
        height: width / 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    selectedDateItem: {
        backgroundColor: COLORS.accent,
        borderRadius: width / 20,
    },
    dateText: {
        fontSize: 12,
        color: '#333',
    },
    selectedDateText: {
        fontWeight: 'bold',
        color: '#000',
    },
    timeTabs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    timeTab: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
    activeTimeTab: {
        backgroundColor: '#F2F2F7',
        borderRadius: 15,
    },
    timeDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#D1D1D6',
        marginRight: 6,
    },
    activeTimeDot: {
        backgroundColor: COLORS.accent,
    },
    timeTabText: {
        fontSize: 12,
        color: '#8E8E93',
    },
    activeTimeTabText: {
        color: '#000',
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
    },
    nextBtn: {
        flex: 1,
        backgroundColor: '#1C1C1E',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    nextText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    shareActionBtn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#1C1C1E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    miniBottomNav: {
        flexDirection: 'row',
        backgroundColor: '#1C1C1E',
        marginHorizontal: 20,
        padding: 8,
        borderRadius: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    miniNavIcon: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#FFF',
        marginHorizontal: 15,
    },
    activeMiniNavItem: {
        flexDirection: 'row',
        backgroundColor: COLORS.accent,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },
    activeMiniNavText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    }
});
