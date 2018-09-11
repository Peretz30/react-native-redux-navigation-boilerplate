import React, { Component } from "react";
import LucyChat from "./LucyChat.js";
import JadeChat from './JadeChat'
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
export default (MainScreenNavigator = TabNavigator(
  {
        LucyChat: { screen: LucyChat },
        JadeChat
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("LucyChat")}>
              <Icon name="bowtie" />
              <Text>Lucy</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("JadeChat")}>
              <Icon name="briefcase" />
              <Text>Nine</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));
