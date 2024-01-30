import ProfileWaitingContactView from "./profileWaitingContact.view";
import { TRootState, useAppDispatch } from "../../../../store/store";
import { useEffect } from "react";
import { getWaitingContacts } from "../../../../store/userSlice";
import { useSelector } from "react-redux";

const ProfileWaitingContactModel: React.FC = () => {
  const dispatch = useAppDispatch();
  const token = useSelector((state: TRootState) => state.userSlice.token);
  const waitingContacts = useSelector(
    (state: TRootState) => state.userSlice.waitingContacts,
  );

  useEffect(() => {
    dispatch(getWaitingContacts(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return <ProfileWaitingContactView waitingContact={waitingContacts} />;
};

export default ProfileWaitingContactModel;
