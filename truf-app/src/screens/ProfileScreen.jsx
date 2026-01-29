import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ProfileScreen = ({ navigation }) => {

const [activeTab, setActiveTab] = useState('Profile');

const handleNavPress = (tab, route) => {
    setActiveTab(tab);
    navigation.navigate(route);
};

const MENU_ITEMS = [
{
id:'booking',
label:'My Booking',
detail:'Check your current and past bookings',
icon:{ uri:'https://i.postimg.cc/85vnsG8D/event-available-(3).png'},
route:'MyBooking'
},
{
id:'rate',
label:'Rate my app',
detail:'We’d love to hear your thoughts',
icon:{ uri:'https://i.postimg.cc/hGLdGZyn/Group-37020.png'},
},
{
id:'account',
label:'My Account',
detail:'Make changes to your account',
icon:{ uri:'https://i.postimg.cc/Jzh6ZZwF/Group-37018.png'},
route:'AccountSetting'
},
{
id:'logout',
label:'Log out',
detail:'Further secure your account for safety',
icon:{ uri:'https://i.postimg.cc/TwnCfcmg/Group-37019.png'},
route:'Logout'
},
];

const OTHER = [
{
id:'support',
label:'Help & Support',
icon:{ uri:'https://i.postimg.cc/htpG3F5R/help.png'},
},
{
id:'about',
label:'About App',
icon:{ uri:'https://i.postimg.cc/ydSYdDYS/info.png'},
},
];

return (
<SafeAreaView style={styles.container}>
<ScrollView showsVerticalScrollIndicator={false}>

<Text style={styles.header}>Profile</Text>

<View style={styles.profileCard}>
<View style={styles.profileLeft}>
<Image
source={{ uri:'https://i.postimg.cc/XvRCNScR/User-image-(1).png'}}
style={styles.avatar}
/>

<View>
<Text style={styles.name}>Itunuoluwa Abidoye</Text>
<Text style={styles.id}>TURFID34345</Text>
</View>
</View>

<TouchableOpacity onPress={()=>navigation.navigate('EditProfile')}>
<Image
source={{ uri:'https://i.postimg.cc/9MHD5PCb/border-color.png'}}
style={styles.editIcon}
/>
</TouchableOpacity>
</View>

<View style={styles.card}>
{MENU_ITEMS.map((item,index)=>(
<TouchableOpacity
key={item.id}
style={[
styles.menuRow,
index !== MENU_ITEMS.length-1 && styles.divider
]}
onPress={()=>item.route && navigation.navigate(item.route)}
>

<View style={styles.rowLeft}>
<View style={styles.iconCircle}>
<Image source={item.icon} style={styles.menuIcon}/>
</View>

<View>
<Text style={styles.menuTitle}>{item.label}</Text>
<Text style={styles.menuSubtitle}>{item.detail}</Text>
</View>
</View>

<Image
source={{ uri:'https://img.icons8.com/ios-filled/100/chevron-right.png'}}
style={styles.chevron}
/>

</TouchableOpacity>
))}
</View>

<Text style={styles.more}>More</Text>

<View style={styles.card}>
{OTHER.map((item,index)=>(
<TouchableOpacity
key={item.id}
style={[
styles.menuRow,
index !== OTHER.length-1 && styles.divider
]}
>

<View style={styles.rowLeft}>
<View style={styles.iconCircle}>
<Image source={item.icon} style={styles.menuIcon}/>
</View>

<Text style={styles.menuTitle}>{item.label}</Text>
</View>

<Image
source={{ uri:'https://img.icons8.com/ios-filled/100/chevron-right.png'}}
style={styles.chevron}
/>

</TouchableOpacity>
))}
</View>

<View style={{height:140}}/>

</ScrollView>


{/* BOTTOM NAV */}
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
backgroundColor:'#F7F7F7'
},

header:{
fontSize:28,
fontWeight:'700',
alignSelf:'center',
marginVertical:30
},

profileCard:{
backgroundColor:'#FFF',
marginHorizontal:20,
padding:16,
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
borderRadius:14,
shadowColor:'#000',
shadowOffset:{width:0,height:4},
shadowOpacity:0.06,
shadowRadius:8,
elevation:5
},

profileLeft:{
flexDirection:'row',
alignItems:'center'
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

editIcon:{
width:24,
height:24,
resizeMode:'contain',
tintColor:'#8E8E93'
},

card:{
backgroundColor:'#FFF',
marginHorizontal:20,
marginTop:20,
borderRadius:14,
paddingVertical:6,
elevation:3
},

menuRow:{
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
padding:14
},

divider:{
borderBottomWidth:1,
borderColor:'#F0F0F0'
},

rowLeft:{
flexDirection:'row',
alignItems:'center'
},

iconCircle:{
width:42,
height:42,
borderRadius:21,
backgroundColor:'#F2F2F2',
justifyContent:'center',
alignItems:'center',
marginRight:12
},

menuIcon:{
width:20,
height:20,
resizeMode:'contain'
},

menuTitle:{
fontWeight:'600',
fontSize:14
},

menuSubtitle:{
fontSize:11,
color:'#9E9E9E',
marginTop:2
},

chevron:{
width:16,
height:16,
tintColor:'#9E9E9E',
resizeMode:'contain'
},

more:{
marginLeft:24,
marginTop:24,
color:'#777',
fontWeight:'600'
},

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
