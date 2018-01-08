import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import { colorChanged } from '../actions/ColorActions.js';
import { COLORS } from '../state/Colors.js';

class ChooseColorPage extends Component {

    onSelectColor(colorKey) {
        this.props.colorChanged({ colorKey });
        const { navigation } = this.props;
        navigation.goBack();
        //navigation.dispatch({ type: 'ChooseColorDismiss' });        
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                {Object.keys(COLORS).map((key) => (
                    <Button key={key} onPress={() => this.onSelectColor(key)} title={COLORS[key].name} />
                ))}
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
    const { color } = state;
    return { color };
};

export default connect(mapStateToProps, {
    colorChanged,
})(ChooseColorPage);
