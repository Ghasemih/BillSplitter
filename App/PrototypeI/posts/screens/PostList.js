import React, {Component} from 'react';
import {StyleSheet, FlatList, Image,Text,View} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'remx';
import {postsStore} from '../posts.store';
import * as postsActions from '../posts.action';

class PostsList extends Component {

    static propTypes = {
        componentId: PropTypes.string,
        posts: PropTypes.array
    };

    static navigationOptions = {
        title: 'PostList\t',
    };

    componentDidMount(){
        postsActions.fetchPosts();
    }

    render(){
        return (
            <View style = {styles.container}>
                {/* <Text style={styles.text} onPress={this.pushViewPostScreen}>PostsList Screen</Text> */}
                <Text style={styles.text}>PostsList Screen</Text>
                <Text>{JSON.stringify(this.props.posts)}</Text>
            </View>
        )
    }
}
function mapStateToProps() {
    return {
        posts: postsStore.getPosts()
    };
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center'
    },
    container: {
        borderColor: '#9B9B9B'
    }
});

export default connect(mapStateToProps)(PostsList);
