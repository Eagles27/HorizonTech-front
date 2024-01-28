import { useSelector } from "react-redux";
import ProfileTrouveTaMarraineView from "./profileTrouveTaMarraine.view";
import { TRootState, useAppDispatch } from "../../../../store/store";
import { useEffect, useState } from "react";
import {
  getMarraineAvailable,
  matchMarraine,
} from "../../../../store/userSlice";

const ProfileTrouveTaMarraineModel: React.FC = () => {
  const dispatch = useAppDispatch();

  const [marraineIndex, setMarraineIndex] = useState<number>(0);

  const token = useSelector((state: TRootState) => state.userSlice.token);
  const marraineAvailable = useSelector(
    (state: TRootState) => state.userSlice.marraineAvailable,
  );
  const tempData = [
    "Santé",
    "Loisirs créatifs (arts,musiques…)",
    " Culturelle : visites de musées, sites historiques",
  ];

  const handleRefreshMarraine = () => {
    dispatch(getMarraineAvailable(token));
    setMarraineIndex(0);
  };

  useEffect(() => {
    handleRefreshMarraine();
  }, []);

  const handleNextMarraine = () => {
    setMarraineIndex((prev) => prev + 1);
  };

  const handleAddMarraine = () => {
    if (marraineAvailable?.[marraineIndex]?._id) {
      dispatch(
        matchMarraine({
          headerValue: token,
          body: { contact_id: marraineAvailable?.[marraineIndex]?._id },
        }),
      );
      setMarraineIndex((prev) => prev + 1);
    }
    return;
  };

  return (
    <ProfileTrouveTaMarraineView
      tempData={tempData}
      marraine={marraineAvailable?.[marraineIndex] ?? null}
      handleNextMarraine={handleNextMarraine}
      handleAddMarraine={handleAddMarraine}
      handleRefreshMarraine={handleRefreshMarraine}
    />
  );
};

export default ProfileTrouveTaMarraineModel;
