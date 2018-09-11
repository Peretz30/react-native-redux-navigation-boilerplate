import React from 'react';
import { View, Text } from 'react-native'

export default class PostsList extends React.PureComponent {
    render() {
        return (
            <View>
                {
                    this.props.posts &&
                    this.props.posts.map((post) => {
                        return (
                            <Text key={post.id}>{post.title}</Text>
                        )
                    })
                }
            </View>
        )
    }
};
