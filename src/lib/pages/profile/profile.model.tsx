import { useEffect } from "react";
import ProfileView from "./profile.view";
import { TRootState, useAppDispatch } from "../../../store/store";
import { getUserInfo } from "../../../store/userSlice";
import { useSelector } from "react-redux";

const ProfileModel: React.FC = () => {
  const dispatch = useAppDispatch();
  const token = useSelector((state: TRootState) => state.userSlice.token);
  useEffect(() => {
    dispatch(getUserInfo(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <ProfileView />;
};

export default ProfileModel;
