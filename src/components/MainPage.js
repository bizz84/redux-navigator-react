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
    onChooseShape() {
        console.log("Choose shape");
    }

    colorButtonTitle() {
        const { colorKey } = this.props;
        console.log(this.props);
        if (colorKey !== null) {
            let name = COLORS[colorKey].name;
            return "Choose Color (" + name + ")";
        }
        return "Choose Color";
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Button onPress={this.onChooseColor.bind(this)} title={this.colorButtonTitle()} />
                <Button onPress={this.onChooseShape.bind(this)} title="Choose Shape" />
            </View>
        )
    }
}
    
const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch',
        backgroundColor: '#eee'
    }
}

const mapStateToProps = state => {
    return { colorKey: state.color.colorKey };
};

export default connect(mapStateToProps)(MainPage);
