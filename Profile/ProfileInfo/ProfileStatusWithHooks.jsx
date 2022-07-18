import React, { useState, useEffect } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileStatusWithHooks = (props) => {
  // editMode klini true, isk setEditeMode klini funkcia,
  //vor@ karox e editMode-@ poxel
  let [editMode, setEditeMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);

    // [props.status] sa nshanakum e,
    // vor useEffect@ kkatarvi ete mer mot poxvi props.status@
    //aysinqn katarvi amen angam erb mez mot poxvi props.status@
  }, [props.status]);

  const activateEditMode = () => {
    setEditeMode(true);
  };

  const deactivateEditMode = () => {
    setEditeMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status || "----"}{" "}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
