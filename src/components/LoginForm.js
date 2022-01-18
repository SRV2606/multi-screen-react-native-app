import React, {Component} from 'react';
import {Card, CardSection, Button, Input} from './common ';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged} from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@example.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}
const mapStateToProps = ({auth}) => {
  console.log('return state', auth);
  return {
    email: auth.email,
    password: auth.password,
  };
};

export default connect(mapStateToProps, {emailChanged, passwordChanged})(
  LoginForm,
);
