// screens/03-FlatListDemo.jsx
// Topic: FlatList
// FlatList only renders items currently visible on screen — more performant than ScrollView for lists.

import { View, Text, StyleSheet, FlatList } from 'react-native';

// TODO 1: Import FlatList from 'react-native'

let FRUITS = [
  'Apple', 'Banana', 'Mango', 'Orange', 'Pineapple',
  'Grape', 'Watermelon', 'Strawberry', 'Blueberry', 'Peach',
  'Kiwi', 'Papaya', 'Lychee', 'Guava', 'Coconut',
  'Pear', 'Plum', 'Cherry', 'Apricot', 'Fig',
  'Pomegranate', 'Raspberry', 'Blackberry', 'Cantaloupe', 'Honeydew',
  'Passionfruit', 'Dragonfruit', 'Jackfruit', 'Durian', 'Tangerine',
  'Clementine', 'Lemon', 'Lime', 'Grapefruit', 'Persimmon',
  'Mulberry', 'Starfruit', 'Kumquat', 'Gooseberry', 'Elderberry'
];
// FRUITS = [];

export default function FlatListDemo() {
  return (
    <View style={{ flex: 1 }}>
      {/* TODO 2: Replace this View with a FlatList component
          - data={FRUITS}
          - keyExtractor={(item) => item} (simple list so use name as key)
          - keyExtractor={(item) => item._id} (LinkedInPost: get item id from item)
          - renderItem should show each fruit in a row with its index
          - Add a ListHeaderComponent showing "🍎 Fruit List"
          - Add a ListEmptyComponent showing "No fruits found."
          - Add an ItemSeparatorComponent with a 1px grey line
      */}
      <FlatList
        data={FRUITS}
        keyExtractor={(item) => item}
        renderItem={({item, index})=>(
          <View style={styles.item}>
            <Text style={styles.index}>{index+1}</Text>
            <Text style={styles.label}>{item}</Text>
            </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No fruits</Text>} 
        ItemSeparatorComponent={()=><View style={styles.separator}></View>}
        //we have fat arrow in this as it is called after every item whereas
        //list empty is called only once when no fruits    
        />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: '#e8f5e9',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  index: {
    width: 32,
    color: '#999',
    fontSize: 14,
  },
  label: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
  empty: {
    padding: 24,
    color: '#999',
    textAlign: 'center',
  },
});
