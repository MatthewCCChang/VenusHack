
import { View, Text, StyleSheet, Image, Button, TouchableOpacity} from "react-native";
import '@tamagui/core/reset.css'
import { SafeAreaView } from "react-native-safe-area-context";

const signInPage = () => {

    return(
        <SafeAreaView>
            <View style={styles.imgcontainer}>
            <Image source={require("../../assets/images/Screenshot 2024-05-25 131346.png")}
            style={styles.img} />
        </View><View style={styles.container}>
                <Text style={styles.titleText}>Hello</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                    {/* <Button title={"Login"} color={'red'}></Button> */}
                </TouchableOpacity>
                
                
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
            </View>
            
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    baseText: {
      fontFamily: 'Cochin',
    },
    titleText: {
      fontSize: 50,
      fontWeight: 'bold',
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // marginTop: '10%',
        backgroundColor: 'green',
    },
    imgcontainer: {
        alignItems: 'center',
        marginTop: '10%',
        backgroundColor: 'red',
        justifyContent: 'center',
        height: '50%',
        marginBottom: '5%',
        width: '100%'
        
    },
    img: {
        width: '90%',
        height: '70%',
        // backgroundColor: 'blue',
    },
    button: {
        alignItems: 'center',
        // marginTop: '5%',
        backgroundColor: 'blue',
        width: '80%',
        padding: 10,
        borderRadius: 20.0,
        justifyContent: 'center',
        // marginBottom: '5%',
        // flexGrow: 0.8,
        // flexDirection: 'row',
        // alignContent: 'center',
    },
    buttonText: {
        fontSize:20,
    },
    buttonContainer: {
        alignItems: 'center',
        margin: '5%',
    }
  });
export default signInPage;