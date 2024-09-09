import React, {Component} from "react";
import {View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Modal} from "react-native";
    // cria objeto para limpar memoria
const estado_inicial = { desc: '' }

export default class addTask extends Component{
    // limpa memoria
    state = {
        ...estado_inicial
    }

    render(){
        return(
            <Modal>
                transparent = {true}
                visible = {true}
                onRequestClose = {this.props.cancelar}
                animationType="slide"
                <TouchableWithoutFeedback onPress={this.props.cancelar}>
                    <view style={styles.fundo}></view>
                </TouchableWithoutFeedback>
                <View style={styles.principal}>
                <text style={styles.cabecalho}>Nova Tarefa</text>
                    <TextInput
                    style={styles.input}
                    placeholder="Descrição da tarefa"
                    onChange={desc => this.setState({desc})}
                    value={this.state.desc}></TextInput>
                    <view style={styles.botoes}>
                        <TouchableOpacity>
                        <text style={styles.botoes.botao}>cancelar</text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <text style={styles.botoes.botao}>salvar</text>
                        </TouchableOpacity>
                    </view>

                </View>
            </Modal>
        )
    }
}
    // css do role
const styles = StyleSheet.create({
    fundo:{
        flex: 1,
        backgroundColor: 'rgba(0.0.0.7)'
    },
    principal:{
        backgroundColor: '#fff'
    },
    cabecalho:{
        backgroundColor: 'B13b44',
        color: '#fff',
        textAlign: 'center',
        padding: 5,
        fontSize: 20
    },
    input:{
        height: 40,
        margin: 15,
        borderWidth: 1,
        backgroundColor: '#FFF',
        borderColor: '#E3E3E3',
        borderRadius: 5
    },
    botoes:{
        flexDirection: 'row',
        marginRight: 30,
        color: '#B13B44',
        botao:{
            margin:20,
            marginRight:30,
            color: '#B13B44'
        }
    },

})