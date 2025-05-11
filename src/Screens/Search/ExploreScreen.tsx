import React from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import SearchInput from './components/SearchInput';

const screenWidth = Dimensions.get('window').width;
const gap = 6;
const smallSize = (screenWidth - gap * 4) / 3;
const largeSize = smallSize * 2 + gap;

const ExploreScreen = () => {

  const mockPosts = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    type: (i % 6 === 4 || i % 6 === 5) ? 'large' : 'small', // Large blocks at alternating positions
  }));

  const renderGrid = () => {
    const grid = [];
    for (let i = 0; i < mockPosts.length; i++) {
      const isLargeBlockLeft = Math.floor(i / 6) % 2 === 0;

      if (i % 6 === 0) {
        // New row with 3 small blocks
        grid.push(
          <View key={`row-${i}`} style={styles.row}>
            <View style={styles.boxSmall} />
            <View style={styles.boxSmall} />
            <View style={styles.boxSmall} />
          </View>
        );
      } else if (i % 6 === 3) {
        // Row with one large block
        grid.push(
          <View key={`row-${i}`} style={styles.row}>
            {isLargeBlockLeft ? (
              <>
                <View style={styles.boxLarge} />
                <View style={{ gap }}>
                  <View style={styles.boxSmall} />
                  <View style={styles.boxSmall} />
                </View>
              </>
            ) : (
              <>
                <View style={{ gap }}>
                  <View style={styles.boxSmall} />
                  <View style={styles.boxSmall} />
                </View>
                <View style={styles.boxLarge} />
              </>
            )}
          </View>
        );
      }
    }
    return grid;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.gridWrapper}>{renderGrid()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  searchBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
  gridWrapper: {
    gap: gap,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: gap,
  },
  boxSmall: {
    width: smallSize,
    height: smallSize,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
  boxLarge: {
    width: largeSize,
    height: largeSize,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
});

export default ExploreScreen;
