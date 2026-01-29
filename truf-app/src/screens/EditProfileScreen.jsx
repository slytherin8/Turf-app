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
import { ArrowLeft, ChevronDown } from 'lucide-react-native';

export const EditProfileScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Profile');

    const handleNavPress = (tab, route) => {
        setActiveTab(tab);
        navigation.navigate(route);
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        gender: '',
    });

    return (
        <SafeAreaView style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <ArrowLeft size={22} color="#B6FF3B" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Bio-data</Text>

                <View style={{ width: 32 }} />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* AVATAR */}
                <View style={styles.avatarSection}>
                    <Image
                        source={{ uri: 'https://i.postimg.cc/NG3tC79L/Group-37014.png' }}
                        style={styles.avatar}
                    />

                    <Text style={styles.avatarName}>Itunuoluwa Abidoye</Text>
                    <Text style={styles.avatarId}>TURFID34345</Text>
                </View>

                {/* FORM */}
                <View style={styles.form}>

                    <TextInput
                        placeholder="What’s your first name?"
                        placeholderTextColor="#9E9E9E"
                        style={styles.input}
                        value={formData.firstName}
                        onChangeText={(val) => setFormData({ ...formData, firstName: val })}
                    />

                    <TextInput
                        placeholder="And your last name?"
                        placeholderTextColor="#9E9E9E"
                        style={styles.input}
                        value={formData.lastName}
                        onChangeText={(val) => setFormData({ ...formData, lastName: val })}
                    />

                    {/* PHONE */}
                    <View style={styles.phoneRow}>
                        <Image
                            source={{
                                uri: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg',
                            }}
                            style={styles.flag}
                        />

                        <TextInput
                            placeholder="Phone number"
                            placeholderTextColor="#9E9E9E"
                            keyboardType="phone-pad"
                            style={styles.phoneInput}
                            value={formData.phone}
                            onChangeText={(val) => setFormData({ ...formData, phone: val })}
                        />
                    </View>

                    {/* GENDER */}
                    <TouchableOpacity style={styles.selectInput}>
                        <Text style={styles.selectText}>Select your gender</Text>
                        <ChevronDown size={20} color="#9E9E9E" />
                    </TouchableOpacity>

                    {/* BUTTON */}
                    <TouchableOpacity style={styles.updateBtn}>
                        <Text style={styles.updateBtnText}>Update profile</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

            {/* BOTTOM NAV — NOT TOUCHED */}
            <View style={styles.bottomNav}>

            {['Home','Explore','Stats','Profile'].map(tab=>{

            const routes={
            Home:'Home',
            Explore:'Explore',
            Stats:'Stats',
            Profile:'Profile'
            };

            const icons={
            Home:[
            'https://i.postimg.cc/Jz72pGqt/Home-(1).png',
            'https://i.postimg.cc/x8y6R2Nb/Rectangle-2.png'
            ],
            Explore:[
            'https://i.postimg.cc/x1WLcZqR/manage-search-(1).png',
            'https://i.postimg.cc/W4YzdF9m/Group-37017-(1).png'
            ],
            Stats:[
            'https://i.postimg.cc/bvZ8F6RW/event-available-(2).png',
            'https://i.postimg.cc/zDKDrc18/event-available-(1).png'
            ],
            Profile:[
            'https://i.postimg.cc/NG3tC79L/Group-37014.png',
            'https://i.postimg.cc/bvT4z1wx/Group-37014-(1).png'
            ]
            };

            const active = activeTab === tab;

            return(
            <TouchableOpacity
            key={tab}
            style={active ? styles.activeTab : styles.iconOnly}
            onPress={()=>handleNavPress(tab,routes[tab])}
            activeOpacity={0.8}
            >

            <Image
            source={{ uri: active ? icons[tab][0] : icons[tab][1] }}
            style={styles.bottomIcon}
            />

            {active && <Text style={styles.activeLabel}>{tab}</Text>}

            </TouchableOpacity>
            );
            })}

            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:'#F3F4F6'
},

header:{
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
paddingHorizontal:20,
paddingVertical:10
},

backBtn:{
backgroundColor:'#2C2C2E',
width:36,
height:36,
borderRadius:18,
justifyContent:'center',
alignItems:'center'
},

headerTitle:{
fontSize: 28,
    fontWeight: '700',
    color: '#1C1C1E',
},

scrollContent:{
paddingBottom:120
},

avatarSection:{
alignItems:'center',
marginTop:20,
marginBottom:30
},

avatar:{
width:80,
height:80,
borderRadius:55,
borderWidth:4,
borderColor:'#D9D6FE'
},

avatarName:{
marginTop:12,
fontSize:18,
fontWeight:'600'
},

avatarId:{
fontSize:13,
color:'#B0B0B0',
marginTop:4
},

form:{
paddingHorizontal:20
},

input:{
borderBottomWidth:1,
borderBottomColor:'#D6D6D6',
height:55,
fontSize:16,
marginBottom:20
},

phoneRow:{
flexDirection:'row',
alignItems:'center',
borderBottomWidth:1,
borderBottomColor:'#D6D6D6',
height:55,
marginBottom:20
},

flag:{
width:26,
height:18,
marginRight:10,
borderRadius:2
},

phoneInput:{
flex:1,
fontSize:16
},

selectInput:{
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
borderBottomWidth:1,
borderBottomColor:'#D6D6D6',
height:55,
marginBottom:40
},

selectText:{
fontSize:16,
color:'#9E9E9E'
},

updateBtn:{
height: 58,
    borderRadius: 29,
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 2,
},

updateBtnText:{
  fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 0.5,
},

/* BOTTOM NAV (UNCHANGED) */

bottomNav:{
position:'absolute',
bottom:20,
left:20,
right:20,
flexDirection:'row',
backgroundColor:'#1C1C1E',
borderRadius:40,
padding:10,
alignItems:'center',
justifyContent:'space-between'
},

activeTab:{
flexDirection:'row',
alignItems:'center',
backgroundColor:'#BFFF00',
borderRadius:30,
paddingHorizontal:18,
paddingVertical:10
},

iconOnly:{
paddingHorizontal:18,
paddingVertical:12
},

bottomIcon:{
width:22,
height:22,
marginRight:6,
resizeMode:'contain'
},

activeLabel:{
fontSize:14,
fontWeight:'600',
color:'#000'
}

});
