import {View, Text, StyleSheet} from "react-native";

export default function Index(){

    return(
        <View >
            <Text style={styles.title}>Hello Wordl!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: 'red',
        fontSize: 24,
        fontWeight: "bold"
    }
})