import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class MainPage extends Component {

    onButton1Press() {
        console.log("Button 1");
    }
    onButton2Press() {
        console.log("Button 1");
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Button onPress={this.onButton1Press()} title="Button 1" />
                <Button onPress={this.onButton2Press()} title="Button 2" />
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