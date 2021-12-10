import React, {Component} from "react";
import {Scrollview, Text, FlatList} from "react-native";
import {Card, ListItem} from "react-native-elements";
import {connect} from "react-redux";
import {baseUrl} from "../shared/baseUrl";
import Loading from "./LoadingComponent";
import * as Animatable from "react-native-animatable";

const mapStateToProps = (state) => {
    return {
        partners: state.partners,
    };
};

function Mission() {
    return (
        <Card title = "Purpose">
            <Text style = {{margin:10}}>

            </Text>
        </Card>
       );
}

class About extends Component {
    static navigationOptions = {
        title: "Purpose",
    };

    render() {
        const renderPartner = ({item}) => {
            return (
                <ListItem
                    title = {item.name}
                    subtitle = {item.description}
                    leftAvatar = {{source: {uri: baseUrl + item.image} }}
                />
