import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131313'
    },

    card: {
        shadowColor: '#000',
        backgroundColor: '#FFF',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        margin: 13,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3,

    },
    AreaBtn: {

        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        padding: 10,

    },
    Btn: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        backgroundColor: "#FFD700",
        borderRadius: 5,
        paddingHorizontal: 30,
    },
    TextoBtn: {
        fontWeight: "bold",
    }

});

export default styles;