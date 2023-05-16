import styles from './Rockets.module.css';

const Rockets = () => {
  const rocket = {
    id: 1,
    flickr_images: 'https://imgur.com/DaCfMsj.jpg',
    name: 'Falcon 1',
    description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
  };

  return (
    <div>
      <div className={styles.rocketCard}>
        <img className={styles.rocketImg} src={rocket.flickr_images} alt="rocket" />
        <div className={styles.rocketInfo}>
          <h2>{rocket.name}</h2>
          <p>{rocket.description}</p>
          <button type="button">Reserve Rocket</button>
        </div>
      </div>
    </div>
  );
};

export default Rockets;
