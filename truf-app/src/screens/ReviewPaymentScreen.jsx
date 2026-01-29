import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
  Modal,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Star, Info, X } from 'lucide-react-native';
import { COLORS } from '../constants/theme';

const { width } = Dimensions.get('window');

export const ReviewPaymentScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [billingInfo, setBillingInfo] = useState({
    name: 'john',
    phone: '91-991234578',
    email: '',
    state: 'Tamil nadu',
  });

  return (
    <SafeAreaView style={styles.container}>

      {/* ---------------- SCROLL CONTENT ---------------- */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 180 }}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <ArrowLeft size={22} color="#BFFF00" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>review your payment</Text>
          <View style={{ width: 32 }} />
        </View>

        {/* TURF INFO */}
        <View style={styles.turfInfo}>
          <View>
            <Text style={styles.turfName}>Game Mini Turf</Text>
            <Text style={styles.locationText}>Avadi, Chennai</Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              {[1, 2, 3, 4].map(i => (
                <Star key={i} size={14} color="#FFD700" fill="#FFD700" />
              ))}
              <Star size={14} color="#D1D1D1" fill="#D1D1D1" />
            </View>
            <Text style={styles.reviewCount}>(84 reviews)</Text>
          </View>
        </View>

        {/* SLOT CARD */}
        <View style={styles.slotCard}>
          <Text style={styles.slotDate}>
            14 October 2025 | 5:00 am - 7:00 am
          </Text>

          <View style={styles.badgeRow}>
            <View style={styles.badge}><Text style={styles.badgeText}>5 vs 5</Text></View>
            <View style={styles.badge}><Text style={styles.badgeText}>• 1 Court</Text></View>
          </View>

          <View style={styles.costRow}>
            <Text style={styles.costLabel}>slot cost</Text>
            <Text style={styles.costValue}>₹ 399</Text>
          </View>

          <Text style={styles.addressLabel}>Address</Text>
          <Text style={styles.addressText}>
            17-5, Anbalagan Nagar St, Kennedy Square, Chennai
          </Text>
        </View>

        {/* PAYMENT SUMMARY */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>payment summary</Text>

          <View style={styles.summaryBox}>
            <Row label="slot cost" value="₹ 399" />
            <Row label="offers %" value="- ₹ 40" danger />
            <Row label="service fees" value="₹ 30" info />
            <Row label="To be paid" value="₹ 389" total />
          </View>
        </View>

        {/* USER DETAILS */}
        <View style={styles.section}>
          <View style={styles.rowBetween}>
            <Text style={styles.sectionTitle}>your details</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.detailsBox}>
            <Text style={styles.detailName}>👤 {billingInfo.name}</Text>
            <Text style={styles.detailText}>+{billingInfo.phone}</Text>
            <Text style={styles.detailText}>{billingInfo.state}</Text>
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>

      {/* ---------------- FIXED BOTTOM BAR ---------------- */}
      <View style={styles.bottomBar}>
        <Text style={styles.confirmText}>confirm to</Text>

        <TouchableOpacity
          style={styles.payBtn}
          onPress={() => navigation.navigate('PaymentMethod')}
        >
          <View style={styles.priceBadge}>
            <Text style={styles.priceText}>₹ 389</Text>
            <Text style={styles.totalText}>Total</Text>
          </View>
          <Text style={styles.payText}>Pay now ▸</Text>
        </TouchableOpacity>
      </View>

      {/* ---------------- EDIT MODAL ---------------- */}
      <Modal
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Edit billing details</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <X size={22} />
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.input}
              value={billingInfo.name}
              onChangeText={t => setBillingInfo({ ...billingInfo, name: t })}
              placeholder="Name"
            />

            <TouchableOpacity style={styles.confirmBtn}>
              <Text style={styles.confirmBtnText}>confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
};

/* --------- SMALL ROW COMPONENT --------- */
const Row = ({ label, value, danger, total, info }) => (
  <View style={[styles.row, total && styles.totalRow]}>
    <Text style={[styles.rowLabel, total && styles.totalLabel]}>
      {label} {info && <Info size={12} />}
    </Text>
    <Text
      style={[
        styles.rowValue,
        danger && { color: '#FF3B30' },
        total && styles.totalLabel,
      ]}
    >
      {value}
    </Text>
  </View>
);

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
  headerTitle: { fontWeight: 'bold', fontSize: 18 },

  turfInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  turfName: { fontSize: 22, fontWeight: 'bold' },
  locationText: { color: '#888' },
  reviewCount: { fontSize: 10, color: '#888', textAlign: 'right' },

  slotCard: {
    backgroundColor: '#BFFF00',
    margin: 20,
    borderRadius: 20,
    padding: 20,
  },
  slotDate: { fontWeight: 'bold', marginBottom: 10 },
  badgeRow: { flexDirection: 'row', marginBottom: 16 },
  badge: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 8,
  },
  badgeText: { fontSize: 10 },
  costRow: { flexDirection: 'row', justifyContent: 'space-between' },
  costLabel: { fontSize: 18 },
  costValue: { fontSize: 22, fontWeight: 'bold' },

  addressLabel: { fontWeight: 'bold', marginTop: 16 },
  addressText: { fontSize: 12 },

  section: { paddingHorizontal: 20, marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },

  summaryBox: { borderWidth: 1, borderRadius: 16 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
  },
  rowLabel: { fontSize: 14 },
  rowValue: { fontWeight: '600' },
  totalRow: { backgroundColor: '#F2F2F7' },
  totalLabel: { fontWeight: 'bold' },

  rowBetween: { flexDirection: 'row', justifyContent: 'space-between' },
  editText: { fontWeight: 'bold', borderBottomWidth: 1 },

  detailsBox: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
  },
  detailName: { fontWeight: 'bold' },
  detailText: { marginLeft: 20, color: '#777' },

  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: 20,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    paddingBottom: Platform.OS === 'ios' ? 30 : 10,
  },
  confirmText: { fontWeight: 'bold', fontSize: 16 },
  payBtn: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#BFFF00',
    marginLeft: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 16,
  },
  priceBadge: {
    backgroundColor: '#0A4A29',
    height: 42,
    paddingHorizontal: 12,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: { color: '#BFFF00', fontWeight: 'bold' },
  totalText: { color: '#FFF', fontSize: 8 },
  payText: { fontWeight: 'bold', fontSize: 18 },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modalBox: {
    backgroundColor: '#FFF',
    padding: 24,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  modalTitle: { fontSize: 18, fontWeight: 'bold' },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 16,
  },
  confirmBtn: {
    backgroundColor: '#000',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  confirmBtnText: { color: '#FFF', fontWeight: 'bold' },
});
