/**
 * @providesModule F8NewsView
 * @flow
 */
'use strict';

var ActionSheetIOS = require('ActionSheetIOS');
var F8Button = require('F8Button');
var PureListView = require('../../common/PureListView');
var Linking = require('Linking');
var Platform = require('Platform');
var ListContainer = require('ListContainer');
var MapView = require('../../common/MapView');
var React = require('React');
var StyleSheet = require('F8StyleSheet');
var View = require('View');
var { connect } = require('react-redux');


class F8NewsView extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <ListContainer
        title="News"
        backgroundImage={require('../news/img/info-background.png')}
        backgroundColor={'#47BFBF'}>
      </ListContainer>
    );
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  directionsButton: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    ios: {
      bottom: 49,
    },
    android: {
      bottom: 0,
    },
  },
});

function select(store) {
  return {
  };
}

module.exports = connect(select)(F8NewsView);
