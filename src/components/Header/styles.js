import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#6495ED',
    borderRadius: 0,
    paddingTop: 55,
    paddingBottom: 7,
    flexDirection: 'row',
  },
  textInput: {
    width: '80%',
    height: 30,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    backgroundColor: 'white',
    marginLeft: 15,
    color: 'black',
    paddingLeft: 7,
  },
  closeButton: {
    marginTop: 75,
    width: '100%',
    height: 300,
    backgroundColor: '#EFEFF4',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'grey',
    fontSize: 24,
    textAlign: 'right',
    marginRight: 10,
    marginTop: 5
  },
  dropDown: {
    width: '75%'
  },
  dateCont: {
    marginTop: 15
  },
  datePicker: {
    width: 200,
    marginBottom: 10,
  },
  bottomCont: {
    flexDirection: 'row',
    width: '90%',
    marginLeft: 15,
    borderTopWidth: 0,
    borderColor: 'lightgrey',
    paddingTop: 20,
    marginBottom: 20,
    marginTop: 15
  },
  bottomLeft: {
    width: '30%',
    textAlign: 'left',
    color: 'black',
    fontWeight: '600',
    fontSize: 19,
    paddingTop: 5
  },
  bottomCenter: {
    width: '40%',
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#3CB371',
    paddingBottom: 5,
    paddingTop: 5,
  },
  bottomCenterText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  bottomRight: {
    width: '30%',
    textAlign: 'right',
    color: 'black',
    fontWeight: '600',
    fontSize: 19,
    paddingTop: 5,
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});

export default styles;