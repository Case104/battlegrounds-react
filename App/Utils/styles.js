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
    // backgroundColor: 'rgb(41,178,190)',
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
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
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
    backgroundColor: 'rgb(41,178,190)',
    flex:1,
    height: 155,
    width: 190,
    flexDirection: 'row',
    justifyContent: 'center',
    // borderWidth:1.5,
    // borderColor:'rgb(255,255,255)'
  },
  darkSquareButton: {
    backgroundColor: 'rgb(8,66,91)',
    flex:1,
    height: 155,
    width: 190,
    flexDirection: 'row',
    justifyContent: 'center',
    // borderWidth:1.5,
    // borderColor:'rgb(255,255,255)'
  },
  readyButton: {

    height: 44,
    width: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    // borderWidth:1.5,

  },

   versus: {

    height: 44,
    width: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:30,
    // borderWidth:1.5,

  },

  circleButton: {
    backgroundColor: 'rgb(8,66,92)',
    width:150,
    height: 150,
    borderColor:'white',
    borderWidth: 1,
    borderRadius: 150,
    marginBottom: 10,
    marginTop: 10,
    padding: 6,
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
  // NAVIGATION STYLINGS
  topNav: {
    paddingTop: 20,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(8,66,92)'
  },
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
    height: 200,
    width: 200,
    marginBottom:30,
    borderRadius:100,
  },
  winnerBanner: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    textAlign:'center',
    fontFamily: 'verdana',
    marginBottom: 30
  },
   challengerImg: {
    height: 125,
    width: 125,
    marginBottom:30,
    borderRadius:63,
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
    // marginBottom:30
  },
  listView: {
    // paddingTop: 20,
  },
   rightContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 70,
    height: 93,
    borderRadius:10,
    marginRight: 90,
    marginBottom: 5
  },
  leaderboardName: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  points: {
    textAlign: 'center',
  },
  battlePromptText: {
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
    textAlign:'center'

    // fontFamily: 'oswald'
    // marginBottom: 10
  },
   points: {
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
    textAlign:'left',
    marginLeft:50

    // fontFamily: 'oswald'
    // marginBottom: 10
  }



})

