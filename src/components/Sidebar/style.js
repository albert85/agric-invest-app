import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  dashboardLayout: {
    height: 150,
    backgroundColor: '#282E3F',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: 10,
  },
  userInitialContainer: {
    borderRadius: 100,
    backgroundColor: '#000000',
    height: 100,
    width: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInitial: {
    color: '#FFFFFF',
    fontSize: 30,
  },
  userName: {
    color: '#FFFFFF',
  },
  userEmail: {
    color: '#FFFFFF',
    fontStyle: 'italic',
  },
  listBorder: {
    borderBottomWidth: 0,
  },
});

export default style;
