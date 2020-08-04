import AsyncStorage from "@react-native-community/async-storage";

export async function isAuthenticated() {

    const value = await AsyncStorage.getItem('isLogged');
    console.log("value : ", value);
    if (value !== null) {
        console.log(value);
        return true;

    } else {
        console.log("entrou aqui 2")
        return false;

    }
}

export async function logout() {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.log(error);
    }


}

