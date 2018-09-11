import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";
import HomeScreen from "../HomeScreen/HomeContainer";
export default class LucyChat extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header noShadow>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Lucy Chat</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Lucy Chat</Label>
            <Input />
          </Item>
          <Button rounded danger
                    style={{ marginTop: 20, alignSelf: "center" }}
                >
            <Text>Goto Lucy Profile</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}