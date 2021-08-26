import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
    },

    textoCurso: {
        color: '#070',
        fontSize: 15,
    },

    textoTitulo: {
        color: '#700',
        fontSize: 30,
    },

    textoPadrao: {
        color: '#000',
        fontSize: 20,
    },

    btn: {
        borderRadius: 5,
        backgroundColor:'#FC6856',
        height: 50,
    },

    logo: {
        flex: 0.5,
        width: 100,
        resizeMode: 'center',
    },

    item: {
        backgroundColor: '#008',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
    },

    prod: {
        fontSize: 15,
        color: '#fff'
    }
})