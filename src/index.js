import './config/ReactotronConfig';
import './config/DevToolsConfig';

import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, ScrollView } from 'react-native';
import Post from './pages/Post';
export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Diego Fernandes',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Diego Fernandes',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Diego Fernandes',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
  };
  render() {
    const { posts } = this.state;
    return (
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={require('./img/tec.jpg')}
      >
        <ScrollView>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
          <Text style={styles.welcome}>Welcome to React Native!</Text>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
