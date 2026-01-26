import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Camera, ChevronDown } from 'lucide-react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';

export const EditProfileScreen = ({ navigation }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: 'Please choose',
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <ArrowLeft size={24} color="#BFFF00" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Bio-data</Text>
                <View style={{ width: 32 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* AVATAR EDIT */}
                <View style={styles.avatarSection}>
                    <View style={styles.avatarWrapper}>
                        <Image
                            source={{ uri: 'https://i.postimg.cc/NG3tC79L/Group-37014.png' }}
                            style={styles.avatar}
                        />
                        <TouchableOpacity style={styles.cameraBtn}>
                            <Camera size={20} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.avatarName}>Hemalatha Abishek</Text>
                    <Text style={styles.avatarDetail}>Turf owner</Text>
                </View>

                {/* FORM */}
                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Tell us First Your name?</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChangeText={(val) => setFormData({ ...formData, firstName: val })}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>And your last name?</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            onChangeText={(val) => setFormData({ ...formData, lastName: val })}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <View style={styles.labelRow}>
                            <Text style={styles.genderIcon}>🚻</Text>
                            <Text style={styles.label}>Please choose</Text>
                        </View>
                        <TouchableOpacity style={styles.selectInput}>
                            <Text style={styles.selectText}>Select your gender</Text>
                            <ChevronDown size={20} color="#8E8E93" />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.updateBtn}>
                        <Text style={styles.updateBtnText}>Update profile</Text>
                    </TouchableOpacity>
                </View>
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
        backgroundColor: '#000',
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
    scrollContent: {
        paddingBottom: 40,
    },
    avatarSection: {
        alignItems: 'center',
        marginVertical: 30,
    },
    avatarWrapper: {
        position: 'relative',
        marginBottom: 10,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#EFEFEF',
    },
    cameraBtn: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#FFF',
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    avatarName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    avatarDetail: {
        fontSize: 12,
        color: '#8E8E93',
    },
    form: {
        paddingHorizontal: 20,
    },
    inputGroup: {
        marginBottom: 24,
    },
    label: {
        fontSize: 16,
        color: '#000',
        marginBottom: 12,
    },
    labelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    genderIcon: {
        marginRight: 10,
        fontSize: 16,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5EA',
        height: 40,
        fontSize: 14,
        color: '#000',
    },
    selectInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5EA',
        height: 40,
    },
    selectText: {
        fontSize: 14,
        color: '#8E8E93',
    },
    updateBtn: {
        backgroundColor: '#1C1C1E',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    updateBtnText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
