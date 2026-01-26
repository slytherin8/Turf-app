import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Image,
} from 'react-native';
import { ArrowLeft, ChevronRight, CreditCard, Plus } from 'lucide-react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';

const { width } = Dimensions.get('window');

const PAYMENT_METHODS = {
    RECOMMENDED: [
        { id: 'bhim', name: 'BHIM UPI', icon: 'https://i.postimg.cc/qvvY8Z7N/logo-turf.png' }, // Placeholder icons
        { id: 'paytm', name: 'Paytm UPI', icon: 'https://i.postimg.cc/qvvY8Z7N/logo-turf.png' },
        { id: 'supermoney', name: 'supermoney UPI', icon: 'https://i.postimg.cc/qvvY8Z7N/logo-turf.png' },
    ],
    UPI: [
        { id: 'gpay', name: 'Google pay UPI', icon: 'https://i.postimg.cc/qvvY8Z7N/logo-turf.png' },
        { id: 'phonepe', name: 'phonepe UPI', icon: 'https://i.postimg.cc/qvvY8Z7N/logo-turf.png' },
    ]
};

export const PaymentMethodScreen = ({ navigation }) => {
    const handlePaymentSelect = () => {
        navigation.navigate('PaymentSuccess');
    };

    const renderMethod = (item) => (
        <TouchableOpacity
            key={item.id}
            style={styles.methodItem}
            onPress={handlePaymentSelect}
        >
            <View style={styles.methodLeft}>
                <View style={styles.iconBox}>
                    {/* Placeholder for actual logos */}
                    <Image source={{ uri: item.icon }} style={styles.methodIcon} resizeMode="contain" />
                </View>
                <Text style={styles.methodName}>{item.name}</Text>
            </View>
            <ChevronRight size={20} color="#8E8E93" />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <ArrowLeft size={24} color="#BFFF00" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>select payment method</Text>
                <View style={{ width: 32 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <View style={styles.line} />
                        <Text style={styles.sectionHeaderText}>RECOMMENDED</Text>
                        <View style={styles.line} />
                    </View>
                    <View style={styles.methodsList}>
                        {PAYMENT_METHODS.RECOMMENDED.map(renderMethod)}
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <View style={styles.line} />
                        <Text style={styles.sectionHeaderText}>CARDS</Text>
                        <View style={styles.line} />
                    </View>
                    <TouchableOpacity
                        style={styles.methodItem}
                        onPress={handlePaymentSelect}
                    >
                        <View style={styles.methodLeft}>
                            <View style={styles.iconBox}>
                                <CreditCard size={20} color="#000" />
                            </View>
                            <Text style={styles.methodName}>Add credit or debit cards</Text>
                        </View>
                        <ChevronRight size={20} color="#8E8E93" />
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <View style={styles.line} />
                        <Text style={styles.sectionHeaderText}>PAY BY ANY UPI APP</Text>
                        <View style={styles.line} />
                    </View>
                    <View style={styles.methodsList}>
                        {PAYMENT_METHODS.UPI.map(renderMethod)}
                        <TouchableOpacity
                            style={styles.methodItem}
                            onPress={handlePaymentSelect}
                        >
                            <View style={styles.methodLeft}>
                                <View style={styles.iconBox}>
                                    <Plus size={20} color="#000" />
                                </View>
                                <Text style={styles.methodName}>Add new UPI ID</Text>
                            </View>
                            <ChevronRight size={20} color="#8E8E93" />
                        </TouchableOpacity>
                    </View>
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
        borderBottomWidth: 1,
        borderBottomColor: '#F2F2F7',
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
    section: {
        marginTop: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 16,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#E5E5EA',
    },
    sectionHeaderText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#8E8E93',
        marginHorizontal: 16,
    },
    methodsList: {
        paddingHorizontal: 16,
    },
    methodItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E5E5EA',
        borderRadius: 15,
        marginBottom: 12,
    },
    methodLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBox: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#E5E5EA',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    methodIcon: {
        width: 24,
        height: 24,
    },
    methodName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
});
