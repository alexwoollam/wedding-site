import '@testing-library/jest-dom';
import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-17-updated';
import { render, screen } from '@testing-library/react';
import KeepMeUpdated from '../../../Components/Forms/KeepMeUpdated';

Enzyme.configure({ adapter: new Adapter() });

describe('<KeepMeUpdated/> component', () => {
  test('renders keep me updated form lable', () => {
    render(<KeepMeUpdated />);
    const linkElement = screen.getByText('Keep me updated');
    expect(linkElement).toBeInTheDocument();
  });

  test('submit button should not display if no user details have been added', () => {
    render(<KeepMeUpdated />);
    const buttonElement = screen.queryByTestId('submit-button');
    expect(buttonElement).not.toBeInTheDocument();
  });

  test('submit button should be displayed if there is user details added', () => {
    const wrapper = mount(<KeepMeUpdated />);
    wrapper.find('#foo').value = "foo bar-bundy";
    wrapper.find('#email').value = "foo@bar.io";
    expect(wrapper.find('submit-button')).toBeTruthy();
  });
});