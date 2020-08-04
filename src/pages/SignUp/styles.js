import { StyleSheet, Animated } from "react-native";



const styles = StyleSheet.create({
    Corpo: {
        flex: 1,
        backgroundColor: "#131313",
    },
    Container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    Logo: {
        marginTop: -30,
        marginBottom: 55,
        height: 160,
        width: 100
    },
    CampoTexto: {
        flexDirection: "row",

    },
    AreaTexto: {
        backgroundColor: "black",
        width: "90%",
        fontSize: 17,
        color: "#FFF",
        marginBottom: 15,
        padding: 10,
        borderRadius: 7,
    },
    Botao: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFD700",
        width: "90%",
        height: 45,
        borderRadius: 7,
        marginTop: 10,
    },
    TextoBotao: {
        fontSize: 20,
        color: "#131313",
    },
    TextoConta: {
        color: "#FFF",
        marginTop: 15,
        paddingBottom: 50
    },
});

export default styles;