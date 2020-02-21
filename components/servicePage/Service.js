import React, {Component} from 'react';
import {Dropdown} from 'react-native-material-dropdown';
import {StyleSheet, View} from "react-native";
import {Button, Input, Text} from "react-native-elements";
import {connect} from "react-redux";
import {setService} from "../../actions/serviceAction";

let data = [{
    value: 'Warehousing',
}, {
    value: 'Express Cargo',
}];

class Service extends Component {
    static navigationOptions = {
        headerShown: false
    };

    state = {
        service: 'Warehousing'
    }

    componentDidMount() {
        this.handleSetService()
    }

    handleSetService = () => {
        this.props.setService(this.state.service)
    }

    handleChangeService = () => {
        this.setState((this.state.service === 'Warehousing' ? {service: 'Express Cargo'} : {service: 'Warehousing'}),this.handleSetService)
    }

    nextPage = () => {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View style={styles.mainView}>
                <Text h3 style={styles.head}>Select service</Text>
                <View style={styles.form}>
                    <Dropdown
                        baseColor='#f5f5f5'
                        selectedItemColor='#5c5c5c'
                        itemColor='#292f45'
                        textColor='#f5f5f5'
                        data={data}
                        onChangeText={this.handleChangeService}
                        value={this.state.service}
                    />
                    <Button
                        containerStyle={styles.button}
                        title="Submit"
                        type="solid"
                        onPress={this.nextPage}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#292f45',
    },
    head: {
        marginTop: '25%',
        marginLeft: '10%',
        color: '#f5f5f5'
    },
    form: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: '10%',
        width: '80%',
        marginTop: '25%',
    },
    button: {
        marginTop: '90%'
    },

});

const mapStateToProps = state => ({
    service: state.service
});

export default connect(mapStateToProps, {setService})(Service);
