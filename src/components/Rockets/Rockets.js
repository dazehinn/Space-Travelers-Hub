import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './Rockets.module.css';
import { fetchRockets } from '../../redux/rockets/rocketsSlice';

const Rockets = () => {
  const { rocketArray, isLoading } = useSelector((store) => store.rocket);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

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
            <p>{rocket.description}</p>
            <button className={styles.reserveBtn} type="button">Reserve Rocket</button>
          </div>
        </div>
      </div>
    ))
  );
};

export default Rockets;
