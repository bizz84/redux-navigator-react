import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class MainPage extends Component {

    onButton1Press() {

        const { navigation } = this.props;
        navigation.dispatch({ type: 'ChooseColor' });
        //navigation.navigate('ChooseColorPage', {});

        //console.log(navigation);
        
    }
    onButton2Press() {
        console.log("Button 1");
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Button onPress={this.onButton1Press.bind(this)} title="Choose Color" />
                <Button onPress={this.onButton2Press.bind(this)} title="Choose Shape" />
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