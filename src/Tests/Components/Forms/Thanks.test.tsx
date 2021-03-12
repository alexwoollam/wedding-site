import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Thanks from '../../../Components/Forms/Thanks';

describe('<Thanks name="name" /> component', () => {
  test('Thanks block name should return correct props.', () => {
    render(<Thanks name='foo bar-bundy' />);
    const ThanksBlockContent = screen.getByText('Thanks, foo bar-bundy!!');
    expect(ThanksBlockContent).toBeInTheDocument();
  });
  it('renders correctly', () => {
    const tree = renderer
      .create(<Thanks text="foo bar-bundy" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
