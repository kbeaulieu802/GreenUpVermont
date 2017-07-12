// @flow

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    linkText: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    link: {}
});
export default class CreateNewAccount extends Component {

    static propTypes = {
        navigation: PropTypes.object
    };

    static navigationOptions = {
        title: 'Create New Account'
    };
    constructor(props) {
        super(props);
        this.onButtonPress = this.onButtonPress.bind(this);
    }
    onButtonPress() {}

    render() {
        return (
            <View style={styles.container}>
                <Text>Create New Account</Text>
            </View>
        );
    }
}