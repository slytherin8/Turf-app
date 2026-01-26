import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    TextInput,
    Modal,
} from 'react-native';
import { ArrowLeft, Star, Edit2, Info, X } from 'lucide-react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';

const { width } = Dimensions.get('window');

export const ReviewPaymentScreen = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [billingInfo, setBillingInfo] = useState({
        name: 'john',
        phone: '91-991234578',
        email: '',
        state: 'Tamil nadu',
    });

    const renderEditModal = () => (
        <Modal
            visible={isModalVisible}
            transparent
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Edit billing details</Text>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <X size={24} color="#000" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Name</Text>
                        <TextInput
                            style={styles.input}
                            value={billingInfo.name}
                            onChangeText={(text) => setBillingInfo({ ...billingInfo, name: text })}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={styles.phoneInputRow}>
                            <View style={styles.countryCode}>
                                <Text>🇮🇳 +91</Text>
                            </View>
                            <TextInput
                                style={[styles.input, { flex: 1, marginLeft: 10 }]}
                                value={billingInfo.phone.split('-')[1]}
                                keyboardType="phone-pad"
                            />
                        </View>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            value={billingInfo.email}
                            onChangeText={(text) => setBillingInfo({ ...billingInfo, email: text })}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={styles.selectInput}>
                            <Text>{billingInfo.state}</Text>
                            <ArrowLeft size={16} color="#000" style={{ transform: [{ rotate: '-90deg' }] }} />
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.confirmBtn}
                        onPress={() => setModalVisible(false)}
                    >
                        <Text style={styles.confirmBtnText}>confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* HEADER */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <ArrowLeft size={24} color="#BFFF00" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>review your payment</Text>
                    <View style={{ width: 32 }} />
                </View>

                {/* TURF INFO */}
                <View style={styles.turfInfo}>
                    <View>
                        <Text style={styles.turfName}>Game Mini Turf</Text>
                        <Text style={styles.locationText}>Avadi,Chennai</Text>
                    </View>
                    <View style={styles.ratingRow}>
                        {[1, 2, 3, 4].map((i) => (
                            <Star key={i} size={14} color="#FFD700" fill="#FFD700" />
                        ))}
                        <Star size={14} color="#D1D1D1" fill="#D1D1D1" />
                        <Text style={styles.reviewCount}>(84) reviews</Text>
                    </View>
                </View>

                {/* SLOT CARD */}
                <View style={styles.slotCard}>
                    <View style={styles.slotHeader}>
                        <Text style={styles.slotDate}>14,October 2025  |  5.00 am - 7.00am</Text>
                    </View>
                    <View style={styles.courtBadges}>
                        <View style={styles.badge}><Text style={styles.badgeText}>5 vs 5</Text></View>
                        <View style={styles.badge}><Text style={styles.badgeText}>• 1 Courts</Text></View>
                    </View>

                    <View style={styles.slotCostRow}>
                        <Text style={styles.slotCostLabel}>slot cost</Text>
                        <Text style={styles.slotCostValue}>₹ 399</Text>
                    </View>

                    <Text style={styles.addressLabel}>Address</Text>
                    <Text style={styles.addressText}>
                        17-5, Anbalagan Nagar St, Kennedy Square, Perambur, Chennai, Tamil Nadu
                    </Text>
                </View>

                {/* PAYMENT SUMMARY */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>payment summary</Text>
                    <View style={styles.summaryTable}>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>slot cost</Text>
                            <Text style={styles.summaryValue}>₹ 399</Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>offers %</Text>
                            <Text style={[styles.summaryValue, { color: '#FF3B30' }]}>- ₹ 40</Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.summaryLabel}>service fees</Text>
                                <Info size={14} color="#8E8E93" style={{ marginLeft: 4 }} />
                            </View>
                            <Text style={styles.summaryValue}>₹ 30</Text>
                        </View>
                        <View style={[styles.summaryRow, styles.totalRow]}>
                            <Text style={styles.totalLabel}>To be paid</Text>
                            <Text style={styles.totalValue}>₹ 389</Text>
                        </View>
                    </View>
                </View>

                {/* YOUR DETAILS */}
                <View style={styles.section}>
                    <View style={styles.rowBetween}>
                        <Text style={styles.sectionTitle}>your details</Text>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Text style={styles.editText}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.detailsCard}>
                        <Text style={styles.detailName}>👤 {billingInfo.name}</Text>
                        <Text style={styles.detailText}>+{billingInfo.phone}</Text>
                        <Text style={styles.detailText}>{billingInfo.state}</Text>
                    </View>
                </View>

                {/* TERMS */}
                <TouchableOpacity style={styles.termsRow}>
                    <Info size={16} color="#8E8E93" />
                    <Text style={styles.termsText}>Terms and conditions</Text>
                </TouchableOpacity>

                <View style={{ height: 100 }} />
            </ScrollView>

            {/* BOTTOM BAR */}
            <View style={styles.bottomBar}>
                <Text style={styles.confirmToText}>confirm to</Text>
                <TouchableOpacity
                    style={styles.payNowBtn}
                    onPress={() => navigation.navigate('PaymentMethod')}
                >
                    <View style={styles.priceBadge}>
                        <Text style={styles.priceBadgeText}>₹ 389</Text>
                        <Text style={styles.priceTotalText}>Total</Text>
                    </View>
                    <Text style={styles.payNowText}>Pay now ▸</Text>
                </TouchableOpacity>
            </View>

            {renderEditModal()}
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
        backgroundColor: '#000',
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        flex: 1,
        textAlign: 'center',
    },
    turfInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    turfName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
    },
    locationText: {
        fontSize: 14,
        color: '#8E8E93',
    },
    ratingRow: {
        alignItems: 'flex-end',
    },
    reviewCount: {
        fontSize: 10,
        color: '#8E8E93',
    },
    slotCard: {
        backgroundColor: '#BFFF00',
        marginHorizontal: 20,
        borderRadius: 20,
        padding: 20,
        marginBottom: 24,
    },
    slotDate: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8,
    },
    courtBadges: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    badge: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginRight: 8,
    },
    badgeText: {
        fontSize: 10,
        color: '#000',
    },
    slotCostRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    slotCostLabel: {
        fontSize: 20,
        color: '#000',
    },
    slotCostValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    addressLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 4,
    },
    addressText: {
        fontSize: 12,
        color: '#333',
        lineHeight: 18,
    },
    section: {
        paddingHorizontal: 20,
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 16,
    },
    summaryTable: {
        borderWidth: 1,
        borderColor: '#E5E5EA',
        borderRadius: 15,
        overflow: 'hidden',
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F2F2F7',
    },
    summaryLabel: {
        fontSize: 14,
        color: '#3A3A3C',
    },
    summaryValue: {
        fontSize: 14,
        fontWeight: '600',
    },
    totalRow: {
        backgroundColor: '#F8F8F8',
        borderBottomWidth: 0,
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    totalValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    editText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        borderBottomWidth: 1,
        borderStyle: 'dashed',
    },
    detailsCard: {
        borderWidth: 1,
        borderColor: '#E5E5EA',
        borderRadius: 20,
        padding: 20,
    },
    detailName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    detailText: {
        fontSize: 14,
        color: '#8E8E93',
        marginLeft: 24,
        marginBottom: 2,
    },
    termsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#E5E5EA',
        marginHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 10,
    },
    termsText: {
        fontSize: 12,
        color: '#8E8E93',
        marginLeft: 8,
    },
    bottomBar: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#F2F2F7',
    },
    confirmToText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    payNowBtn: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#BFFF00',
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 4,
        paddingRight: 16,
        marginLeft: 20,
    },
    priceBadge: {
        backgroundColor: '#0A4A29',
        height: 42,
        paddingHorizontal: 12,
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceBadgeText: {
        color: '#BFFF00',
        fontSize: 14,
        fontWeight: 'bold',
    },
    priceTotalText: {
        color: '#FFF',
        fontSize: 8,
    },
    payNowText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    // MODAL STYLES
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#FFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 24,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputContainer: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 16,
    },
    phoneInputRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countryCode: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectInput: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    confirmBtn: {
        backgroundColor: '#1C1C1E',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    confirmBtnText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
