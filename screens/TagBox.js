import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // کتابخانه آیکون

const TagBox = ({ label, description }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const tags = ['جهیزیه', 'مشاوره تحصیلی', 'دارو', 'لوازم تحریر', 'مشاوره ازدواج', 'ارزاق', 'مشاوره شغلی', 'آموزش'];

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(item => item !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const renderTag = ({ item }) => (
    <TouchableOpacity
      style={[styles.tag, selectedTags.includes(item) && styles.selectedTag]}
      onPress={() => toggleTag(item)}
      accessibilityLabel={`Toggle ${item}`}
    >
      <View style={styles.tagContent}>
        <Text style={[styles.tagText, selectedTags.includes(item) && styles.selectedTagText]}>{item}</Text>
        {selectedTags.includes(item) && <Icon name="checkmark" size={16} color="#fff" style={styles.checkIcon} />}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.title}>{description}</Text>
      <View style={styles.tagBox}>
        <FlatList
          data={tags}
          renderItem={renderTag}
          keyExtractor={(item) => item}
          numColumns={3}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    margin: 10,
    marginTop: 50,
    height: 280,
  },
  title: {
    marginBottom: 12,
    fontSize: 16,
    textAlign: 'right',
  },
  tagBox: {
    padding: 10,
    marginTop: 10,
  },
  label: {
    position: 'absolute',
    top: -10,
    right: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: 5,
  },
  columnWrapper: {
    justifyContent: 'flex-end',
  },
  tag: {
    backgroundColor: '#F7F7F7',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin:4,
    marginLeft: 20,
  },
  selectedTag: {
    backgroundColor: '#FF47000D',
  },
  selectedTagText: {
    color: '#FF4700',
  },
  tagText: {
    textAlign: 'center',
  },
  tagContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkIcon: {
    marginLeft: 5,
    color: '#FF4700',
  },
});

export default TagBox;