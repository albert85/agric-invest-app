import {StyleSheet} from 'react-native';

const roundCircleProp = {
  height: 50,
  width: 50,
  marginLeft: 10,
  marginTop: 10,
  borderRadius: 100,
};

const textProp = {
  borderBottomWidth: 2,
  width: '100%',
  padding: 3,
};

const colorProp = {
  height: '100%',
  width: 20,
};

const dashboardStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  parentLayout: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#eee',
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    height: 150,
    width: '96%',
    marginBottom: 15,
  },
  redColor: {
    backgroundColor: '#F90909',
    ...colorProp,
  },
  orangeColor: {
    backgroundColor: '#F8B32C',
    ...colorProp,
  },
  blueColor: {
    backgroundColor: '#32C5BB',
    ...colorProp,
  },
  greenColor: {
    backgroundColor: '#8BC34A',
    ...colorProp,
  },
  redText: {
    borderBottomColor: 'red',
    ...textProp,
  },
  greenText: {
    borderBottomColor: '#8BC34A',
    ...textProp,
  },
  blueText: {
    borderBottomColor: '#32C5BB',
    ...textProp,
  },
  orangeText: {
    ...textProp,
    borderBottomColor: '#F8B32C',
  },
  dashboardCard: {
    marginBottom: 10,
    paddingRight: 15,
  },
  amount: {
    marginTop: 10,
    fontSize: 25,
    width: '100%',
    textAlign: 'right',
    paddingRight: 20,
  },
  roundCircleRed: {
    ...roundCircleProp,
    backgroundColor: '#F90909',
  },
  roundCircleBlue: {
    ...roundCircleProp,
    backgroundColor: '#32C5BB',
  },
  roundCircleOrange: {
    ...roundCircleProp,
    backgroundColor: '#F8B32C',
  },
  roundCircleGreen: {
    ...roundCircleProp,
    backgroundColor: '#8BC34A',
  },
  roundRectangle: {
    backgroundColor: 'white',
  },
});

export default dashboardStyle;
