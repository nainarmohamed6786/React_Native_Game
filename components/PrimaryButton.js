import {View,Text,Pressable, StyleSheet} from 'react-native'


function PrimaryButton ({children,onPress}){
    return (
<View style={styles.innerRoot}>
    <Pressable onPress={onPress} android_ripple={{color:'white'}}>
        <Text>{children}</Text>
    </Pressable>
</View>
    )
}

export default PrimaryButton;

const styles=StyleSheet.create({
    innerRoot:{
     paddingHorizontal:20,
     paddingVertical:40,
    },
    outerRoot:{
        overflow:'hidden',
        margin:4,
        backgroundColor:'aqua',
        borderRadius:20,
        elevation:8,
    }
})