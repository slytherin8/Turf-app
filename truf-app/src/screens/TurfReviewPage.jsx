import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Edit, Bold, Italic, ArrowLeft } from 'lucide-react-native';
import { COLORS } from '../constants/theme';

const REVIEWS = [
    {
        id: '1',
        name: 'John Delrey',
        date: '10 month ago',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        avatar: 'https://i.postimg.cc/NG3tC79L/Group-37014.png',
    },
];

export const TurfReviewPage = ({ navigation }) => {
    const [reviewText, setReviewText] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Book premium sports turfs near you with seamless scheduling,');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <ArrowLeft size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Reviews</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.tabContentPadding}>
                    <View style={styles.tabHeaderRow}>
                        <Text style={styles.tabTitle}>Reviews</Text>
                        <TouchableOpacity style={styles.addBtnGreen}>
                            <View style={styles.iconCircleGreen}>
                                <Edit size={16} color={COLORS.accent} />
                            </View>
                            <Text style={styles.addBtnTextGreen}>add review</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.reviewInputContainer}>
                        <View style={styles.reviewTextArea}>
                            <TextInput
                                style={styles.reviewInputText}
                                multiline
                                value={reviewText}
                                onChangeText={setReviewText}
                                placeholder="Write your review here..."
                                placeholderTextColor="#8E8E93"
                            />
                        </View>
                        <View style={styles.reviewInputFooter}>
                            <View style={styles.richTextActions}>
                                <TouchableOpacity style={styles.actionIcon}>
                                    <Bold size={20} color="#8E8E93" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.actionIcon}>
                                    <Italic size={20} color="#8E8E93" />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.commentBtn}>
                                <Text style={styles.commentBtnText}>Comment</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {REVIEWS.map((review) => (
                        <View key={review.id} style={styles.reviewCard}>
                            <View style={styles.reviewHeader}>
                                <Image source={{ uri: review.avatar }} style={styles.reviewerAvatar} />
                                <View style={styles.reviewerInfo}>
                                    <Text style={styles.reviewerName}>{review.name}</Text>
                                    <Text style={styles.reviewDate}>{review.date}</Text>
                                </View>
                            </View>
                            <Text style={styles.reviewComment}>{review.comment}</Text>
                        </View>
                    ))}
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
    reviewInputContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: '#EFEFEF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 10,
        elevation: 2,
    },
    reviewTextArea: {
        minHeight: 100,
        borderWidth: 1,
        borderColor: '#EFEFEF',
        borderRadius: 15,
        padding: 12,
        marginBottom: 12,
    },
    reviewInputText: {
        fontSize: 14,
        color: '#8E8E93',
        lineHeight: 20,
    },
    reviewInputFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    richTextActions: {
        flexDirection: 'row',
    },
    actionIcon: {
        marginRight: 16,
    },
    commentBtn: {
        backgroundColor: '#000',
        paddingHorizontal: 24,
        paddingVertical: 10,
        borderRadius: 12,
    },
    commentBtnText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    reviewCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F2F2F7',
    },
    reviewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    reviewerAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    reviewerName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    reviewDate: {
        fontSize: 10,
        color: '#8E8E93',
    },
    reviewComment: {
        fontSize: 13,
        color: '#3A3A3C',
        lineHeight: 18,
    },
});