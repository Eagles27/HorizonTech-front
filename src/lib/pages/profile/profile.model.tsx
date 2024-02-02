import { useEffect } from "react";
import ProfileView from "./profile.view";
import { TRootState, useAppDispatch } from "../../../store/store";
import { getUserInfo } from "../../../store/userSlice";
import { useSelector } from "react-redux";

const ProfileModel: React.FC = () => {
  const dispatch = useAppDispatch();
  const token = useSelector((state: TRootState) => state.userSlice.token);
  const user = useSelector((state: TRootState) => state.userSlice.user);
  useEffect(() => {
    if (user === null) {
      dispatch(getUserInfo(token));
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return <ProfileView user={user} />;
};

export default ProfileModel;
