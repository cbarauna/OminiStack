import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const Post = ({ data }) => (
  <View style={style.post}>
    <View style={style.header}>
      <Text style={style.title}>{data.title}</Text>
      <Text style={style.author}>{data.author}</Text>
    </View>
    <View style={style.body}>
      <Text style={style.content}>{data.content}</Text>
    </View>
  </View>
);
Post.PropTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

const style = StyleSheet.create({
  post: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20,
  },
  header: {
    marginBottom: 10,
    fontSize: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F888',
  },
  author: {
    fontWeight: 'bold',

    color: '#dcdcdc',
  },
  body: {},
  content: { textAlign: 'justify' },
});

export default Post;
