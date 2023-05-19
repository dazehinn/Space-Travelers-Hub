import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions, joinMission } from '../../redux/missions/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  if (missions.length === 0) {
    setTimeout(() => {
      dispatch(getMissions());
    }, '1000');
  }

  const handleClick = (missionId) => {
    dispatch(joinMission(missionId));
  };

  return (
    <div className="tableArea">
      <table>
        <thead>
          <tr className="head">
            <th>
              Mission
            </th>
            <th>
              Description
            </th>
            <th>
              Status
            </th>
            <th>
              {' '}
            </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <th className="tname">
                {mission.mission_name}
              </th>
              <td className="tdesc">
                {mission.description}
              </td>
              <td className="tstatus">
                {mission.joined ? (
                  <span className="activeMember">Active Member</span>
                ) : (
                  <span className="nActiveM">NOT A MEMBER</span>
                )}
              </td>
              <td className="tbutton">
                {mission.joined ? (
                  <button type="button" className="leave" onClick={() => handleClick(mission.mission_id)}>Leave Mission</button>
                ) : (
                  <button type="button" className="join" onClick={() => handleClick(mission.mission_id)}>Join Mission</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default Missions;
