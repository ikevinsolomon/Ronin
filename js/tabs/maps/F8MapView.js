/**
* @providesModule F8MapView
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


class F8MapView extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {map1, map2} = this.props;

    return (
      <View style={styles.container}>
        <ListContainer
          title="Maps"
          backgroundImage={require('./img/maps-background.png')}
          backgroundColor={'#9176D2'}>
          <PureListView
            title="Baliapal"
            renderEmptyList={() => <MapView map={map1} />}
          />
          <PureListView
            title="Basta"
            renderEmptyList={() => <MapView map={map2} />}
          />
        </ListContainer>
      </View>
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
    map1: store.maps.find((map) => map.name === 'Baliapal'),
    map2: store.maps.find((map) => map.name === 'Basta'),
  };
}

module.exports = connect(select)(F8MapView);
