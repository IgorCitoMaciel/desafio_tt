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
        marginTop: 40,
        marginBottom: 20,
        height: 200,
        width: 290
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
        marginTop: 25,
        paddingBottom: 5
    },
    TextoEsqueci: {
        color: "#FFF",
        marginTop: 15,
    }
});

export default styles;

