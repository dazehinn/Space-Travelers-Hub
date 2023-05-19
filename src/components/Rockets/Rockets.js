import { useDispatch, useSelector } from 'react-redux';
import styles from './Rockets.module.css';
import { fetchRockets, reserveRocket, cancelRocket } from '../../redux/rockets/rocketsSlice';

const Rockets = () => {
  const { rocketArray, isLoading } = useSelector((store) => store.rocket);

  const dispatch = useDispatch();

  if (rocketArray.length === 0) {
    setTimeout(() => {
      dispatch(fetchRockets());
    }, '1000');
  }

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    rocketArray.map((rocket) => (

      <div key={rocket.id}>
        <div className={styles.rocketCard}>
          <img className={styles.rocketImg} src={rocket.flickr_images} alt="rocket" />
          <div className={styles.rocketInfo}>
            <h2>{rocket.name}</h2>
            <p>
              <span className={rocket.isReserved ? styles.reserved : styles.noReserved}>
                Reserved
              </span>
              {rocket.description}
            </p>
            <button
              className={rocket.isReserved ? styles.noReserved : styles.reserveBtn}
              type="button"
              onClick={() => (
                dispatch(reserveRocket(rocket.id)))}
            >
              Reserve Rocket
            </button>

            <button
              className={rocket.isReserved ? styles.cancelBtn : styles.noReserved}
              type="button"
              onClick={() => (
                dispatch(cancelRocket(rocket.id)))}
            >
              Cancel Reservation
            </button>

          </div>
        </div>
      </div>
    ))
  );
};

export default Rockets;
