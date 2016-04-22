var Button = require('react-native-button');
var React = require('react-native');

var Button = React.createClass({
  render() {
    return (
      <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={this._handlePress}
      >
        Press Me!
      </Button>
      );
    },

  _handlePress(event) {
  console.log('Pressed!');
  },
});

module.exports = ExampleComponent;