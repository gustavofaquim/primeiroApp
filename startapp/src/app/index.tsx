import {View, Text, StyleSheet, Alert} from "react-native";
import { Button } from "../components/button";
export default function Index(){


    function handleMenssage(){
         Alert.alert("Olá, Gustavo")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Hello Wordl!</Text>
            <Button title="Entrar"/>
            <Button title="Sair"/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: "center",
        gap: 16
    },
    
    title: {
        color: '#453467',
        fontSize: 24,
        fontWeight: "bold"
    }
})