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

    colorButtonTitle() {
        const { colorKey } = this.props;
        if (colorKey !== null) {
            let name = COLORS[colorKey].name;
            return "Choose Color (" + name + ")";
        }
        return "Choose Color";
    }

    render() {
        return (
            <View>
                <Button onPress={this.onChooseColor.bind(this)} title={this.colorButtonTitle()} />
            </View>
        )
    }
}
    
const mapStateToProps = state => {
    return { colorKey: state.color.colorKey };
};

export default connect(mapStateToProps)(MainPage);
