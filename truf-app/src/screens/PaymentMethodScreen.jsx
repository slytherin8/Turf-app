import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, ChevronRight, CreditCard, Plus } from 'lucide-react-native';
import RazorpayCheckout from 'react-native-razorpay';

export const PaymentMethodScreen = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = {
    recommended: [
      {
        id: 'bhim',
        name: 'BHIM UPI',
        icon: '💳',
        type: 'upi'
      },
      {
        id: 'paytm',
        name: 'Paytm UPI',
        icon: '📱',
        type: 'upi'
      },
      {
        id: 'supermoney',
        name: 'supermoney UPI',
        icon: '💰',
        type: 'upi'
      }
    ],
    cards: [
      {
        id: 'add_card',
        name: 'Add credit or debit cards',
        icon: <CreditCard size={20} color="#666" />,
        type: 'card'
      }
    ],
    upiApps: [
      {
        id: 'googlepay',
        name: 'Google pay UPI',
        icon: '🔴',
        type: 'upi'
      },
      {
        id: 'phonepe',
        name: 'phonepe UPI',
        icon: '🟣',
        type: 'upi'
      },
      {
        id: 'add_upi',
        name: 'Add new UPI ID',
        icon: <Plus size={20} color="#666" />,
        type: 'upi'
      }
    ]
  };

const handleMethodSelect = async () => {
  try {

    // 1️⃣ First create booking in backend
    const bookingResponse = await fetch(`${API_URL}/booking/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // send booking details properly
      }),
    });

    const bookingData = await bookingResponse.json();

    // 2️⃣ Create Razorpay order
    const orderResponse = await fetch(`${API_URL}/booking/create-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bookingId: bookingData._id,
        amount: 1000, // use turf price dynamically
      }),
    });

    const orderData = await orderResponse.json();

    // 3️⃣ Open Razorpay
    var options = {
      description: 'Turf Booking',
      currency: 'INR',
      key: 'rzp_test_SJz7OB6G3BvEpz', // your test key
      amount: orderData.amount,
      order_id: orderData.id,
      name: 'Turf Booking',
      prefill: {
        email: 'user@email.com',
        contact: '9999999999',
        name: 'User'
      },
      theme: { color: '#BFFF00' }
    };

    RazorpayCheckout.open(options)
      .then(async (paymentData) => {

        // 4️⃣ Verify payment
        await fetch(`${API_URL}/booking/verify-payment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: paymentData.razorpay_order_id,
            razorpay_payment_id: paymentData.razorpay_payment_id,
            razorpay_signature: paymentData.razorpay_signature,
            bookingId: bookingData._id
          }),
        });

        navigation.navigate("PaymentSuccess");

      })
      .catch((error) => {
        alert("Payment Failed");
      });

  } catch (error) {
    alert("Something went wrong");
  }
};
  const renderPaymentOption = (method) => (
    <TouchableOpacity
      key={method.id}
      style={[
        styles.paymentOption,
        selectedMethod === method.id && styles.selectedOption
      ]}
      onPress={() => handleMethodSelect(method)}
    >
      <View style={styles.optionContent}>
        <View style={styles.optionLeft}>
          {typeof method.icon === 'string' ? (
            <Text style={styles.iconText}>{method.icon}</Text>
          ) : (
            method.icon
          )}
          <Text style={styles.optionName}>{method.name}</Text>
        </View>
        <ChevronRight size={20} color="#8E8E93" />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <ArrowLeft size={24} color="#BFFF00" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>select payment method</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* RECOMMENDED SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>RECOMMENDED</Text>
          <View style={styles.optionsContainer}>
            {paymentMethods.recommended.map(renderPaymentOption)}
          </View>
        </View>

        {/* CARDS SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>CARDS</Text>
          <View style={styles.optionsContainer}>
            {paymentMethods.cards.map(renderPaymentOption)}
          </View>
        </View>

        {/* PAY BY ANY UPI APP SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PAY BY ANY UPI APP</Text>
          <View style={styles.optionsContainer}>
            {paymentMethods.upiApps.map(renderPaymentOption)}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
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

  section: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#8E8E93',
    letterSpacing: 0.5,
    marginBottom: 12,
    textAlign: 'center',
  },

  optionsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },

  paymentOption: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  selectedOption: {
    backgroundColor: '#F0F8FF',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconText: {
    fontSize: 20,
    marginRight: 16,
  },
  optionName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    flex: 1,
  },
});