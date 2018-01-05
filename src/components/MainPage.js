import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class MainPage extends Component {

    onChooseColor() {
        const { navigation } = this.props;
        navigation.dispatch({ type: 'ChooseColor' });
    }
    onChooseShape() {
        console.log("Choose shape");
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Button onPress={this.onChooseColor.bind(this)} title="Choose Color" />
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

export default MainPage;