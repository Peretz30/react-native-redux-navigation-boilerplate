import React, { Component } from "react";
import HomeScreen from "./HomeScreen/HomeContainer";
import TabScreenNavigator from "./TabScreen/";
import SideBar from "./components/SideBar";
import { DrawerNavigator } from "react-navigation";
import Posts from './PostsScreen/PostsContainer'
const HomeScreenRouter = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
        Tabs: { screen: TabScreenNavigator },
        Posts
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);
export default HomeScreenRouter;