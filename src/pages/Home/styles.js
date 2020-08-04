import { StyleSheet, Dimensions } from "react-native";

const larguraTela = Dimensions.get('window').width;
const alturaTela = Dimensions.get('window').height;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#131313',
        alignItems: 'center',
        //justifyContent: "center",
    },
    ViewPrincipal: {

        alignItems: 'center',
        justifyContent: "center",
        //backgroundColor: "pink",
        width: "90%",
        padding: 40,
        marginTop: 150
    },

    TextoPrincipal: {
        color: '#FFFF',
        alignItems: 'center',
        justifyContent: "center",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 17,
        marginTop: -60
    },

    ContainerBtn: {
        justifyContent: "center",
        width: 300,
        height: 400,
        //backgroundColor: "#0000FF",
        marginTop: 60,
    },

    Btn: {

        backgroundColor: '#FFD700',
        alignItems: 'center',
        justifyContent: 'center',
        //width: larguraTela - 200,
        //height: alturaTela - 5000,
        borderRadius: 10,
        marginTop: 10,

    },
    TextoBtn: {
        color: '#131313',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 13,
        marginBottom: 13,
        fontWeight: "bold",
    },
    BtnLogout: {
        backgroundColor: '#B22222',
        alignItems: 'center',
        justifyContent: 'center',
        //width: larguraTela - 200,
        // height: alturaTela - 5000,
        borderRadius: 10,
        marginTop: 90,
    }

});

export default styles;