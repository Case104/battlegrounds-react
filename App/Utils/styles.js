import React, {StyleSheet} from 'react-native'

module.exports = StyleSheet.create({

// MAIN CONTAINER STYLINGS
  main: {
    flex:1,
    backgroundColor:'rgba(0,0,0,0)',
    justifyContent: 'center',
    // alignItems: 'center',

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(41,178,190)',
  },
  signInContainer: {
    flex:1,
    alignItems:'stretch',
    backgroundColor: '#29B2BE'
  },
  signInWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

// HEADLINE STYLINGS
  headlineContainer: {
    // flex: 1,
    alignItems: 'center',
    paddingBottom: 30,
    // marginTop: 100,
  },
  headline: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:24,
    color: 'white',
    fontWeight: 'bold',
  },
    title: {
    fontSize: 40,
    color: 'white',
  },

// MAP STYLINGS
  awaitingMapContainer: {
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  map: {
    // flex: 1,
    height: 200,
    width:200,
    borderRadius: 100,
    borderColor: 'rgb(8,66,91)',
    borderWidth:3
    // width: 100
  },


  // BUTTON AND ICON STYLINGS
  icon: {
    flex:1,
    width:50,
    height:50
  },
  squareButton: {
    backgroundColor:'#E1F2DF',
    flex:1,
    height: 155,
    width: 190,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth:1.5,
    borderColor:'rgb(255,255,255)'
  },

  circleButton: {
    backgroundColor:'#6CBAF5',
    width:100,
    height: 100,
    borderColor:'white',
    borderWidth: 1,
    borderRadius: 100,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center'
  },
  leftBottomButton: {


  },
  rightBottomButton: {

  },
  buttonText: {
    fontSize: 18,
    color:'#111',
    alignSelf: 'center'
  },
  iconContainer: {
    position: 'absolute',
    bottom: 0
  },
  iconProfile: {
  },
  iconLeaderboard: {
  },
  iconHome: {
  },
  iconHelp: {

  },
  // BOTTOM NAVIGATION STYLINGS
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // TASK STYLINGS
    descriptionContainer: {

  },
  scoreHeadline: {
    fontSize: 40,
    color: 'white'
  },
  motionScore: {
    fontSize:30,
    color: 'green'
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  // WINNER PAGE STYLINGS
  winnerImg: {
    height: 125,
    width: 125,
    marginBottom:30,
    borderRadius:30,
  },
  winnerBanner: {
    fontFamily: 'verdana',
    fontSize: 20,
    marginTop:50,
    marginBottom:20,

  },
  userAvatar: {
  },
  // MAIN IMAGE STYLINGS
  mainBackDrop: {

    paddingTop:70,
    flex:1,
    // justifyContent:'center',
    alignItems:'center',
    width:null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0)'
  },

  // LEADERBOARDS
  leaderboardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(41,178,190)',

  },
  listView: {
    paddingTop: 20,
  },
   rightContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  leaderboardName: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  points: {
    textAlign: 'center',
  },


})

