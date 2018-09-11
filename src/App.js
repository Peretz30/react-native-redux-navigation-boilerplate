import React from 'react'
import { Provider } from 'react-redux'
//import PostContainer from './PostsScreen/PostsContainer'
//import HomeScreen from './HomeScreen/HomeContainer'
import Router from './Router'
import store from './store'
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { StyleProvider } from 'native-base';
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <StyleProvider style={getTheme(material)}>
                    <Router />
                </StyleProvider>
            </Provider>
        )
    }
}
export default App