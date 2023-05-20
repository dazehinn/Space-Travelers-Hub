import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from '../components/Missions/missions';
import store from '../redux/Store';

it('Test Missions component renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});