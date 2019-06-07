import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  status: {
    width: '40%',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
    color: 'white',
  },
  mainCont: {
    backgroundColor: '#6495ED',
    flex: 1,
  },
  headerCont: {
    flexDirection: 'row',
    width: '90%',
    marginBottom: 5,
    marginLeft: 5,
    marginTop: 15,
  },
  back: {
    width: '35%',
  },
  backText: {
    marginLeft: 15,
    marginTop: 10,
    fontSize: 18,
    color: 'white',
  },
  profileCont: {
    margin: 25,
    flex: 1
  },
  subCont: {
    backgroundColor: '#EFEFF4',
    borderRadius: 5,
    flex: 1,
  },
  card: {
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
  userInfoCont: {
    flexDirection: 'column',
    marginLeft: 5,
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
    marginTop: 4,
  },
  answersCont: {
    width: '15%',
    borderRadius: 7,
    borderColor: 'green',
    borderWidth: 1,
    marginLeft: '20%',
    height: 30,
  },
  answersCount: {
    textAlign: 'center',
    color: 'green',
    paddingTop: 5,
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    marginLeft: 10,
    marginRight: 7,
  },
  webView: {
    marginTop: 20,
    flex: 1,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  rateCont: {
    flexDirection: 'row',
    marginLeft: 10,
    width: '90%',
    marginRight: 15,
    borderTopWidth: 1,
    borderColor: 'lightgrey',
  },
  star: {
    width: 25,
    height: 25,
    marginTop: 7,
  },
  bottomScore: {
    fontSize: 18,
    color: 'grey',
    marginLeft: 5,
    marginTop: 9,
  },
});

export default styles;