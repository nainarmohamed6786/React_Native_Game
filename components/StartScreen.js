import {View,Text,TextInput, StyleSheet, Alert} from 'react-native';
import PrimaryButton from './PrimaryButton';
import {useState} from 'react';

function StartGameScreen (){
const[enteredNumber,setEnteredNumber]=useState("");

function inputHandler(enteredNumber){
setEnteredNumber(enteredNumber);}
function resetHandler(){
    setEnteredNumber('');
    }
function confirmHandler({onPicked}){

const chosen=parseInt(enteredNumber);

if(isNaN(chosen) || chosen <= 0 || chosen > 99){
    Alert.alert(
        "Wrong",'Only allowed to a number is 0 to 99',
   [{type:'Know More',style:"destructive",onPress:resetHandler}]
    );
    return;
}
onPicked(chosen);
}


    return (
<View style={styles.container}>
    <TextInput style={styles.textInput} keyboardType="number-pad" maxLength={2} onChangeText={inputHandler} />
    <View style={styles.buttonsContainer}>
        <View>
        <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        </View>
        <View>
        <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
        </View>
    </View>
</View>
    )
}

export default StartGameScreen;

const styles=StyleSheet.create({
    container:{
   marginTop:100,
   backgroundColor:'aqua',
   marginHorizontal:20,
   padding:24,
   borderRadius:20
    },
    textInput:{
        width:'15%',
        borderBottomColor:'black',
        borderBottomWidth:2,
        fontSize:24,
        textAlign:'center'
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1,
        justifyContent:'space-between'
    }
})