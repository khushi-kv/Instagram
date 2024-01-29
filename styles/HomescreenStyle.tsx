import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  headerContainer: {
    height: 20,
  },
  Username: {
    fontWeight: '500',
    color: 'black',
  },
  Content: {
    color:'black',
    marginLeft: 7,
    fontSize: 13,
    paddingRight: 12,
    maxWidth: 320,
    flexWrap: 'wrap',
  },
  Date: {
    marginTop: 14,
    marginLeft: 8,
    fontSize: 12,
    color: 'gray',
  },
  Comment: {
    left: 10,
    fontSize: 12,
    color: 'gray',
  },
  AddComment: {
    borderWidth: 0,
    top: 20,
    left: 22,
    color: 'gray',
  },
  container: {
    backgroundColor: 'white',
  },
  loaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  loaderText: {
    marginLeft: 10,
    color: 'gray',
  },
  fab: {
    backgroundColor: '#2196F3',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
  fabText: {
    fontSize: 100,
    color: 'white',
    fontWeight: 'bold',
  },
});
