import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rockets from '../components/Rockets/Rockets';

it('Test Rocket component renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
