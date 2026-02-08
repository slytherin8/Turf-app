import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Share2 } from 'lucide-react-native';

export const PaymentSuccessScreen = ({ navigation }) => {
    const handleRedirectToHome = () => {
        // Navigate to home screen and reset navigation stack
        navigation.reset({
            index: 0,
            routes: [{ name: 'Main' }],
        });
    };

    const handleShare = () => {
        // Handle share functionality
        console.log('Share booking details');
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.content}>
                    {/* SUCCESS HEADING WITH HIGHLIGHT */}
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}>
                            <Text style={styles.paymentText}>Payment</Text> successful
                        </Text>
                        <View style={styles.titleHighlight} />
                    </View>

                    {/* SUCCESS ICON - CREDIT SCORE IMAGE */}
                    <View style={styles.iconContainer}>
                        <Image
                            source={require('../../assets/credit_score.png')}
                            style={styles.creditScoreImage}
                            resizeMode="contain"
                        />
                    </View>

                    {/* CONFIRMATION MESSAGE */}
                    <View style={styles.messageContainer}>
                        <Text style={styles.message}>
                            Kindly reach out to the respective turf venue for further clarification.
                        </Text>
                    </View>

                    {/* BOTTOM ACTIONS */}
                    <View style={styles.actionsContainer}>
                        <TouchableOpacity
                            style={styles.redirectButton}
                            onPress={handleRedirectToHome}
                        >
                            <Text style={styles.redirectText}>Redirect to home</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
                            <Share2 size={20} color="#BFFF00" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80%',
    },

    headingContainer: {
        marginBottom: 60,
        position: 'relative',
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        zIndex: 2,
        paddingHorizontal: 4,
    },
    paymentText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    titleHighlight: {
       position: 'absolute',
    bottom: 0,
    right: '59%',
    height: 10,
    width: 80,
    backgroundColor: '#BFFF00',
    zIndex: 1,
    },

    iconContainer: {
        marginBottom: 60,
        alignItems: 'center',
    },
    creditScoreImage: {
        width: 120,
        height: 120,
    },

    messageContainer: {
        marginBottom: 80,
        paddingHorizontal: 20,
    },
    message: {
        fontSize: 16,
        color: '#8E8E93',
        textAlign: 'center',
        lineHeight: 24,
    },

    actionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        width: '100%',
        maxWidth: 320,
    },
    redirectButton: {
        flex: 1,
        backgroundColor: '#1C1C1E',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    redirectText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    shareButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#1C1C1E',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
