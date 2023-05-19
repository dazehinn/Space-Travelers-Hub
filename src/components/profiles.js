import { useSelector } from 'react-redux';
import '../App.css';

const Profiles = () => {
  const { rocketArray } = useSelector((store) => store.rocket);

  {
    const reservedRockets = rocketArray.filter((rocket) => rocket.isReserved === true);
    return (
      <div className="rocketProfile">
        <p> Profile Coming Soon ...</p>
        <h2>My Rockets</h2>
        {reservedRockets.map((rocket) => (
          <h3 key={rocket.id} className="reservedRocketProfile">{rocket.name}</h3>))}
      </div>
    );
  }
};

export default Profiles;
