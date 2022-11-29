
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet,SafeAreaView, StatusBar} from 'react-native';
import StartGameScreen from './screen/StarGameScreen';
import GameScreen from './screen/GameScreen';
import { useState } from 'react';
import Color from './constant/Color.android';
import GameOverScreen from './screen/GameOverScreen';


export default function App() {
 const [userNumber,setUseNumber]=useState();
 const[gameOver,setGameOver]=useState(true);
 const [rounds,setRounds]=useState(0);

 function pickHandler(pickedNumber){
setUseNumber(pickedNumber);
setGameOver(false);
 }
function gameOverHandler(numberRounds){
  setGameOver(true);
  setUseNumber(numberRounds);
}

function startGameHandler(){
  setUseNumber(null);
  setRounds(0);
}
 let screen=<StartGameScreen onPicked={pickHandler}/>
 if(userNumber){
  screen=<GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
 }
if(gameOver && userNumber){
  screen=<GameOverScreen userNumber={userNumber} roundsNumber={rounds} onStartGame={startGameHandler} />
}


  return (
    <>
    <StatusBar style="light" />
    <LinearGradient style={styles.container} colors={[Color.black,Color.white]}>
      <ImageBackground source={require('./assets/background.png')} style={styles.container} imageStyle={styles.image}>
        <SafeAreaView style={styles.container}>
        {screen}
        </SafeAreaView>
   </ImageBackground>
    </LinearGradient>
</>
  );
}

const styles = StyleSheet.create({
container:{
  flex:1
},
image:{
  opacity:0.15
}
});
