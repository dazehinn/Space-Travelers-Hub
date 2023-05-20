import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Profiles from '../components/profiles';
import store from '../redux/Store';

it('Test Profiles component renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Profiles />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});