import { useEffect } from "react";
import ProfileMesDiscussionsView from "./profileMesDiscussions.view";
import { TRootState, useAppDispatch } from "../../../../store/store";
import { getUserContacts } from "../../../../store/userSlice";
import { useSelector } from "react-redux";

const ProfileMesDiscussionsModel: React.FC = () => {
  const dispatch = useAppDispatch();
  const token = useSelector((state: TRootState) => state.userSlice.token);
  const userContacts = useSelector(
    (state: TRootState) => state.userSlice.userContacts,
  );

  useEffect(() => {
    dispatch(getUserContacts(token));
  }, []);

  return <ProfileMesDiscussionsView contacts={userContacts} />;
};

export default ProfileMesDiscussionsModel;
