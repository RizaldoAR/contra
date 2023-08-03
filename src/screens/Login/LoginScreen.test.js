import React from 'react';
import LoginScreen from '../LoginScreen';
import {render} from '@testing-library/react-native';

describe('Login', () => {
  const page = render(<LoginScreen></LoginScreen>);
  const loginButton = page.getByTestId('loginButton');
});
