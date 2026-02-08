import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform,
  Modal,
  TextInput,
  BlurView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Star, Info, ChevronDown, X } from 'lucide-react-native';

export const ReviewPaymentScreen = ({ navigation }) => {
  const [checkToPay, setCheckToPay] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: 'Itumuoluwa Abidoye',
    phone: '+91-991234578',
    email: '',
    state: 'Tamilnadu',
  });
  const [editFormData, setEditFormData] = useState({
    name: '',
    phone: '',
    email: '',
    state: '',
  });

  const handleEditDetails = () => {
    setEditFormData({
      name: userDetails.name,
      phone: userDetails.phone.replace('+91-', ''),
      email: userDetails.email,
      state: userDetails.state,
    });
    setShowEditModal(true);
  };

  const handleConfirmEdit = () => {
    setUserDetails({
      name: editFormData.name,
      phone: `+91-${editFormData.phone}`,
      email: editFormData.email,
      state: editFormData.state,
    });
    setShowEditModal(false);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
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
            <ArrowLeft size={24} color="#BFFF00" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>review your payment</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* TURF INFO */}
        <View style={styles.turfInfoSection}>
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

        {/* HIGHLIGHTED SUMMARY CARD */}
        <View style={styles.summaryCard}>
          <Text style={styles.slotDateTime}>14,October 2025 | 5.00 am - 7.00am</Text>
          
          <View style={styles.courtBadgesRow}>
            <View style={styles.courtBadge}>
              <Text style={styles.courtBadgeText}>5 vs 5</Text>
            </View>
            <View style={styles.courtCountBadge}>
              <Text style={styles.courtCountText}>• 1 Courts</Text>
            </View>
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
          <View style={styles.paymentSummaryCard}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>slot cost</Text>
              <Text style={styles.summaryValue}>₹ 399</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>offers %</Text>
              <Text style={[styles.summaryValue, styles.discountText]}>-₹ 40</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabelWithIcon}>
                service fees <Info size={14} color="#8E8E93" />
              </Text>
              <Text style={styles.summaryValue}>₹ 30</Text>
            </View>
            <View style={[styles.summaryRow, styles.totalRow]}>
              <Text style={styles.totalLabel}>To be paid</Text>
              <Text style={styles.totalValue}>₹ 389</Text>
            </View>
          </View>
        </View>

        {/* USER DETAILS */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>your details</Text>
            <TouchableOpacity onPress={handleEditDetails}>
              <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.userDetailsCard}>
            <View style={styles.userInfo}>
              <Image
                source={require('../../assets/User image.png')}
                style={styles.profileImage}
              />
              <View style={styles.userTextInfo}>
                <Text style={styles.userName}>{userDetails.name}</Text>
                <Text style={styles.userPhone}>{userDetails.phone}</Text>
                <Text style={styles.userLocation}>{userDetails.state}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* TERMS & CONDITIONS */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.termsButton}>
            <Info size={20} color="#8E8E93" />
            <Text style={styles.termsText}>Terms and conditions</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* FIXED BOTTOM ACTION */}
      <View style={styles.bottomSection}>
        <View style={styles.bottomActions}>
          <TouchableOpacity
            style={styles.checkToPayButton}
            onPress={() => setCheckToPay(!checkToPay)}
          >
            <Text style={styles.checkToPayText}>Check to pay</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.payNowButton}
            onPress={() => navigation.navigate('PaymentMethod')}
          >
            <Text style={styles.payNowText}>Pay now</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* EDIT BILLING DETAILS MODAL */}
      <Modal
        visible={showEditModal}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.blurBackground} />
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {/* MODAL HEADER */}
              <View style={styles.modalHeader}>
                <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                  <ArrowLeft size={24} color="#BFFF00" />
                </TouchableOpacity>
                <Text style={styles.modalTitle}>bill details</Text>
                <View style={{ width: 40 }} />
              </View>

              {/* TURF INFO CARD IN MODAL */}
              <View style={styles.modalTurfCard}>
                <View style={styles.modalTurfImageContainer}>
                  <Image
                    source={require('../../assets/turf_img.png')}
                    style={styles.modalTurfImage}
                  />
                </View>
                <View style={styles.modalTurfInfo}>
                  <Text style={styles.modalTurfName}>Game Mini Turf</Text>
                  <View style={styles.modalHighlightedSection}>
                    <Text style={styles.modalSlotDateTime}>14,October 2025 | 5.00 am - 7.00am</Text>
                    <View style={styles.modalCourtBadgesRow}>
                      <View style={styles.modalCourtBadge}>
                        <Text style={styles.modalCourtBadgeText}>5 vs 5</Text>
                      </View>
                      <Text style={styles.modalCourtCountText}>• 1 Courts</Text>
                    </View>
                    <View style={styles.modalSlotCostRow}>
                      <Text style={styles.modalSlotCostLabel}>slot cost</Text>
                      <Text style={styles.modalSlotCostValue}>₹ 399</Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* EDIT BILLING DETAILS SECTION */}
              <ScrollView style={styles.modalFormContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.modalEditSection}>
                  <View style={styles.modalEditHeader}>
                    <Text style={styles.modalEditTitle}>Edit billing details</Text>
                    <TouchableOpacity style={styles.modalEditIcon}>
                      <Text style={styles.modalEditIconText}>✏️</Text>
                    </TouchableOpacity>
                  </View>

                  {/* NAME FIELD */}
                  <View style={styles.modalInputContainer}>
                    <Text style={styles.modalInputLabel}>Name</Text>
                    <TextInput
                      style={styles.modalTextInput}
                      value={editFormData.name}
                      onChangeText={(text) => setEditFormData({ ...editFormData, name: text })}
                      placeholder="Enter your name"
                      placeholderTextColor="#8E8E93"
                    />
                  </View>

                  {/* PHONE FIELD */}
                  <View style={styles.modalInputContainer}>
                    <Text style={styles.modalInputLabel}>Phone Number</Text>
                    <View style={styles.modalPhoneInputContainer}>
                      <View style={styles.modalCountryCode}>
                        <Image
                          source={require('../../assets/Group 37038.png')}
                          style={styles.modalFlagIcon}
                        />
                        <Text style={styles.modalCountryCodeText}>+91</Text>
                      </View>
                      <TextInput
                        style={styles.modalPhoneInput}
                        value={editFormData.phone}
                        onChangeText={(text) => setEditFormData({ ...editFormData, phone: text })}
                        placeholder="9123456789"
                        placeholderTextColor="#8E8E93"
                        keyboardType="phone-pad"
                      />
                    </View>
                  </View>

                  {/* EMAIL FIELD */}
                  <View style={styles.modalInputContainer}>
                    <TextInput
                      style={styles.modalTextInput}
                      value={editFormData.email}
                      onChangeText={(text) => setEditFormData({ ...editFormData, email: text })}
                      placeholder="Enter your email"
                      placeholderTextColor="#8E8E93"
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                  </View>

                  {/* STATE FIELD */}
                  <View style={styles.modalInputContainer}>
                    <TouchableOpacity style={styles.modalDropdownInput}>
                      <Text style={styles.modalDropdownText}>{editFormData.state}</Text>
                      <ChevronDown size={20} color="#8E8E93" />
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>

              {/* MODAL CONFIRM BUTTON */}
              <View style={styles.modalBottomSection}>
                <TouchableOpacity style={styles.modalConfirmButton} onPress={handleConfirmEdit}>
                  <Text style={styles.modalConfirmText}>confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },

  turfInfoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 20,
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

  summaryCard: {
    backgroundColor: '#BFFF00',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  slotDateTime: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  courtBadgesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  courtBadge: {
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginRight: 8,
  },
  courtBadgeText: {
    color: '#BFFF00',
    fontSize: 12,
    fontWeight: '600',
  },
  courtCountBadge: {
    backgroundColor: 'transparent',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  courtCountText: {
    color: '#000',
    fontSize: 12,
    fontWeight: '500',
  },
  slotCostRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  slotCostLabel: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  slotCostValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  addressLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  addressText: {
    fontSize: 14,
    color: '#000',
    lineHeight: 20,
  },

  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  editButton: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    textDecorationLine: 'underline',
  },

  paymentSummaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    overflow: 'hidden',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#000',
  },
  summaryLabelWithIcon: {
    fontSize: 14,
    color: '#000',
    flexDirection: 'row',
    alignItems: 'center',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  discountText: {
    color: '#FF3B30',
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
    color: '#34C759',
  },

  userDetailsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    padding: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  userTextInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  userPhone: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 2,
  },
  userLocation: {
    fontSize: 14,
    color: '#8E8E93',
  },

  termsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  termsText: {
    fontSize: 16,
    color: '#8E8E93',
    marginLeft: 12,
  },

  bottomSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    paddingTop: 16,
    paddingBottom: Platform.OS === 'ios' ? 34 : 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  bottomActions: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
  },
  checkToPayButton: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  checkToPayText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  payNowButton: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  payNowText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  // MODAL STYLES
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  blurBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '90%',
    paddingTop: 16,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  modalTurfCard: {
    backgroundColor: '#F8F8F8',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  modalTurfImageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTurfImage: {
    width: 120,
    height: 80,
    borderRadius: 12,
  },
  modalTurfInfo: {
    alignItems: 'center',
  },
  modalTurfName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  modalHighlightedSection: {
    backgroundColor: '#BFFF00',
    borderRadius: 12,
    padding: 16,
    width: '100%',
  },
  modalSlotDateTime: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  modalCourtBadgesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  modalCourtBadge: {
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
  },
  modalCourtBadgeText: {
    color: '#BFFF00',
    fontSize: 10,
    fontWeight: '600',
  },
  modalCourtCountText: {
    color: '#000',
    fontSize: 10,
    fontWeight: '500',
  },
  modalSlotCostRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalSlotCostLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  modalSlotCostValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  modalFormContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  modalEditSection: {
    paddingBottom: 20,
  },
  modalEditHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  modalEditTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  modalEditIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalEditIconText: {
    fontSize: 16,
  },
  modalInputContainer: {
    marginBottom: 16,
  },
  modalInputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8E8E93',
    marginBottom: 8,
  },
  modalTextInput: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#FFFFFF',
  },
  modalPhoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  modalCountryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRightWidth: 1,
    borderRightColor: '#E5E5E5',
  },
  modalFlagIcon: {
    width: 20,
    height: 14,
    marginRight: 6,
  },
  modalCountryCodeText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  modalPhoneInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#000',
  },
  modalDropdownInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#FFFFFF',
  },
  modalDropdownText: {
    fontSize: 16,
    color: '#000',
  },
  modalBottomSection: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: Platform.OS === 'ios' ? 34 : 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  modalConfirmButton: {
    backgroundColor: '#1C1C1E',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalConfirmText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
