import {View, Text, StyleSheet} from "react-native";
import { Button } from "@/components/button";
import { Input} from "@/components/input";
import { useState } from "react";
import { router } from "expo-router";

export default function Index(){

    const [nome, setNome] = useState("");

    function handleNext(){
       router.navigate("/dashboard")
    }



    return(
        <View style={styles.container}>

            <Text style={styles.title}>Olá, {nome}!</Text>

            <Input onChangeText={setNome} />

            <Button title="Continuar" onPress={handleNext}/>

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