import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  score: {
    width: '30%',
    textAlign: 'left',
    color: 'black',
    fontWeight: '600',
    fontSize: 19,
    paddingTop: 5,
  },
  suff: {
    fontWeight: '500',
    fontSize: 14,
    color: 'grey',
    marginTop: 2,
  },
  viewCounter: {
    width: '30%',
    textAlign: 'right',
    color: 'black',
    fontWeight: '600',
    fontSize: 19,
    paddingTop: 5,
  },
  mainCont: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 5,
  },
  profileCont: {
    flexDirection: 'row',
    margin: 10,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 3,
  },
  ownerCont: {
    flexDirection: 'column',
    marginLeft: 5,
  },
  userNameCont: {
    flexDirection: 'row',
  },
  displayName: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    marginRight: 5,
  },
  reputation: {
    fontSize: 14,
    color: 'grey',
    marginTop: 4,
  },
  date: {
    fontSize: 14,
    color: 'grey',
    marginTop: 3,
  },
  itemTitle: {
    fontSize: 18,
    color: '#1E90FF',
    fontWeight: '800',
    marginLeft: 10,
    marginRight: 7,
  },
  bottomCont: {
    flexDirection: 'row',
    width: '90%',
    marginLeft: 15,
    borderTopWidth: 1,
    borderColor: 'lightgrey',
    paddingTop: 20,
    marginBottom: 20,
  },
  answerCont: {
    width: '40%',
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#3CB371',
    paddingBottom: 5,
    paddingTop: 5,
  },
  answerCount: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  answer: {
    fontSize: 15,
  },
});

export default styles;