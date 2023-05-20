import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionSlice';

const Profiles = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch, missions.length]);

  const filteredMission = missions.filter((mission) => mission.joined === true);
  const { rocketArray } = useSelector((store) => store.rocket);

  const reservedRockets = rocketArray.filter((rocket) => rocket.isReserved === true);

  return (
    <div className="profileB">
      <div className="rocketProfile">
        <h2>My Missions</h2>
        {filteredMission.length > 0 ? (
          <div className="border rounded">
            {missions.filter((mission) => mission.joined).map((mission) => (
              <div key={mission.mission_id}>
                <h3 className="reservedRocketProfile">{mission.mission_name}</h3>
              </div>
            ))}
          </div>
        ) : (
          <p>Mission not joined yet</p>
        )}
      </div>

      <div className="rocketProfile">
        <h2>My Rockets</h2>
        {reservedRockets.length > 0 ? (
          <div className="border rounded">
            {reservedRockets.map((rocket) => (
              <h3 key={rocket.id} className="reservedRocketProfile">{rocket.name}</h3>))}
          </div>
        ) : (
          <p>No reserved rocket</p>
        )}
      </div>
    </div>
  );
};

export default Profiles;
