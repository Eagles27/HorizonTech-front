import ProfileWaitingContactView from "./profileWaitingContact.view";
import { TRootState, useAppDispatch } from "../../../../store/store";
import { useEffect, useState } from "react";
import {
  getWaitingContacts,
  postAcceptContact,
} from "../../../../store/userSlice";
import { useSelector } from "react-redux";

const ProfileWaitingContactModel: React.FC = () => {
  const dispatch = useAppDispatch();
  const token = useSelector((state: TRootState) => state.userSlice.token);
  const waitingContacts = useSelector(
    (state: TRootState) => state.userSlice.waitingContacts,
  );

  const [contactAccepted, setContactAccepted] = useState(false);

  useEffect(() => {
    dispatch(getWaitingContacts(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, contactAccepted]);

  const handleAcceptContact = (id: string) => {
    dispatch(
      postAcceptContact({ body: { contact_id: id }, headerValue: token }),
    ).then(() => setContactAccepted((prev: boolean) => !prev));
  };

  return (
    <ProfileWaitingContactView
      waitingContact={waitingContacts}
      handleAcceptContact={handleAcceptContact}
    />
  );
};

export default ProfileWaitingContactModel;
