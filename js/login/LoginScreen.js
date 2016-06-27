/**
 * @flow
 */
'use strict';

var Animated = require('Animated');
var Dimensions = require('Dimensions');
var F8Colors = require('F8Colors');
var Image = require('Image');
var React = require('React');
var StatusBarIOS = require('StatusBarIOS');
var StyleSheet = require('StyleSheet');
var View = require('View');
var { Text } = require('F8Text');
var LoginButton = require('../common/LoginButton');
var TouchableOpacity = require('TouchableOpacity');

var { skipLogin } = require('../actions');
var { connect } = require('react-redux');

class LoginScreen extends React.Component {
  state = {
    anim: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.anim, {toValue: 3000, duration: 3000}).start();
  }

  render() {
    return (
      <Image
        style={styles.container}
        source={require('./img/login-background.png')}>
        <TouchableOpacity
          accessibilityLabel="Skip login"
          accessibilityTraits="button"
          style={styles.skip}
          onPress={() => this.props.dispatch(skipLogin())}>
          <Animated.Image
            style={this.fadeIn(2800)}
            source={require('./img/x.png')}
          />
        </TouchableOpacity>

        <View style={styles.section}>
          <Animated.View style={[styles.section, this.fadeIn(2500, 20)]}>
            <LoginButton source="First screen" />
          </Animated.View>
        </View>

      </Image>
    );
  }

  fadeIn(delay, from = 0) {
    const {anim} = this.state;
    return {
      opacity: anim.interpolate({
        inputRange: [delay, Math.min(delay + 500, 3000)],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      transform: [{
        translateY: anim.interpolate({
          inputRange: [delay, Math.min(delay + 500, 3000)],
          outputRange: [from, 0],
          extrapolate: 'clamp',
        }),
      }],
    };
  }
}

const scale = Dimensions.get('window').width / 375;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 26,
    // Image's source contains explicit size, but we want
    // it to prefer flex: 1
    width: undefined,
    height: undefined,
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  last: {
    justifyContent: 'flex-end',
  },
  h1: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: Math.round(74 * scale),
    color: F8Colors.darkText,
    backgroundColor: 'transparent',
  },
  h2: {
    textAlign: 'center',
    fontSize: 17,
    color: F8Colors.darkText,
    marginVertical: 20,
  },
  h3: {
    fontSize: 12,
    textAlign: 'center',
    color: F8Colors.lightText,
    letterSpacing: 1,
  },
  loginComment: {
    marginBottom: 14,
    fontSize: 12,
    color: F8Colors.darkText,
    textAlign: 'center',
  },
  skip: {
    position: 'absolute',
    right: 0,
    top: 20,
    padding: 15,
  },
});

module.exports = connect()(LoginScreen);
