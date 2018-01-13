import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { COLORS } from '../state/Colors.js';

class MainPage extends Component {

    onChooseColor() {
        const { navigation } = this.props;
//        navigation.dispatch({ type: 'ChooseColor' });
        navigation.navigate('ChooseColor', {});

    }

    buttonColor() {
        const { colorKey } = this.props;
        if (colorKey !== null) {
            return COLORS[colorKey].hex;
        }
        return "#000"
    }

    render() {
        return (
            <View>
                <Button 
                    color={this.buttonColor()}
                    onPress={this.onChooseColor.bind(this)} 
                    title="Choose Color"
                />
            </View>
        )
    }
}
    
const mapStateToProps = state => {
    return { colorKey: state.color.colorKey };
};

export default connect(mapStateToProps)(MainPage);
