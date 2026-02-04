import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CloudUpload, Image as ImageIcon, ArrowLeft } from 'lucide-react-native';
import { COLORS } from '../constants/theme';

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

export const TurfGalleryPage = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <ArrowLeft size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Gallery</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.tabContentPadding}>
                    <View style={styles.tabHeaderRow}>
                        <Text style={styles.tabTitle}>Gallery<Text style={styles.tabCount}>(400)</Text></Text>
                        <TouchableOpacity style={styles.addBtnGreen}>
                            <View style={styles.iconCircleGreen}>
                                <ImageIcon size={16} color={COLORS.accent} />
                            </View>
                            <Text style={styles.addBtnTextGreen}>Add photo</Text>
                        </TouchableOpacity>
                    </View>

                    {/* UPLOAD BOX */}
                    <View style={styles.uploadDetailedContainer}>
                        <View style={styles.uploadDetailedInner}>
                            <View style={styles.cloudIconActive}>
                                <CloudUpload size={40} color="#1C1C1E" />
                            </View>
                            <Text style={styles.uploadMainText}>Choose a Image or drag & drop it here</Text>
                            <Text style={styles.uploadSubText}>JPEG and PNG formats, up to 5MB</Text>
                            <TouchableOpacity style={styles.uploadButtonInner}>
                                <Text style={styles.uploadButtonInnerText}>Upload</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.galleryGrid}>
                        {GALLERY_IMAGES.map((img, index) => (
                            <Image key={index} source={{ uri: img }} style={styles.galleryItem} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    backBtn: {
        padding: 8,
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
    addBtnGreen: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconCircleGreen: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#1C1C1E',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#BFFF00',
    },
    addBtnTextGreen: {
        color: '#1C1C1E',
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 8,
    },
    uploadDetailedContainer: {
        marginBottom: 30,
        marginTop: 10,
    },
    uploadDetailedInner: {
        width: '100%',
        height: 220,
        borderWidth: 2,
        borderColor: '#D1D1D6',
        borderStyle: 'dashed',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    cloudIconActive: {
        marginBottom: 16,
    },
    uploadMainText: {
        fontSize: 14,
        color: '#1C1C1E',
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 6,
    },
    uploadSubText: {
        fontSize: 12,
        color: '#8E8E93',
        textAlign: 'center',
        marginBottom: 20,
    },
    uploadButtonInner: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 30,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#D1D1D6',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    uploadButtonInnerText: {
        fontSize: 12,
        color: '#1C1C1E',
        fontWeight: '600',
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
});