import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, AlertTriangle, LogOut } from 'lucide-react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';

export const LogoutScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <ArrowLeft size={24} color="#BFFF00" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Logout</Text>
                <View style={{ width: 32 }} />
            </View>

            <View style={styles.profileCard}>
                                           <View style={styles.profileLeft}>
                                               <Image
                                                   source={{
                                                       uri: 'https://i.postimg.cc/XvRCNScR/User-image-(1).png',
                                                   }}
                                                   style={styles.avatar}
                                               />
                                               <View>
                                                   <Text style={styles.name}>Itunuoluwa Abidoye</Text>
                                                   <Text style={styles.id}>TURFID34345</Text>
                                               </View>
                                           </View>
                                       </View>

            <View style={styles.content}>
                <View style={styles.logoutCard}>
                    <View style={styles.warningIconBox}>
    <Image
        source={{
            uri: 'https://i.postimg.cc/Nj6kXy2j/Group-12337.png',
        }}
        style={{ width: 50, height: 50 }}
        resizeMode="contain"
    />
</View>

                    <Text style={styles.question}>Are you sure you want to log out of your account?</Text>

                    <TouchableOpacity
                        style={styles.logoutBtn}
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text style={styles.logoutBtnText}>Logout </Text>
                        <LogOut size={16} color="#FFF" />
                    </TouchableOpacity>
                </View>
            </View>
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
        marginBottom: 10,
    },
    backBtn: {
        backgroundColor: '#000',
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:28,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop:28,
    },
profileCard: {
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 5,
    },

    profileLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar:{
width:60,
height:60,
borderRadius:30,
marginRight:12
},

name:{
fontSize:16,
fontWeight:'700'
},

id:{
color:'#BDBDBD',
marginTop:4
},
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    logoutCard: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 80,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#F2F2F7',
    },
    warningIconBox: {
        marginBottom: 20,
    },
    question: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
        marginBottom: 24,
        lineHeight: 22,
    },
    logoutBtn: {
        backgroundColor: '#ED636F',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 25,
        paddingHorizontal: 30,
    },
    logoutBtnText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8,
    }
});
