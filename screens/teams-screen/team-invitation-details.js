/**
 * GreenUpVermont React Native App
 * https://github.com/johnneed/GreenUpVermont
 * @flow
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as actions from './actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        width: '100%'
    },
    teams: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});
export default class TeamInvitationDetails extends Component {
    static propTypes = {
        actions: PropTypes.object,
        teams: PropTypes.array
    };

    static navigationOptions = {
        title: 'Team Details'
    };
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Team Invitation Details Screen</Text>
            </View>
        );
    }
}
