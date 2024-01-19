import { Routes, Route } from "react-router-dom";
import HomeModel from "./lib/pages/home/home.model";
import MetierPediaModel from "./lib/pages/metier-pedia/metierpedia.model";
import SignInModel from "./lib/pages/signin/signIn.model";
import ProtectedRoute from "./utils/functions/protectedRoute";
import { TRootState } from "./store/store";
import { useSelector } from "react-redux";
import ProfileModel from "./lib/pages/profile/profile.model";

const App: React.FC = () => {
  const isAuth = useSelector((state: TRootState) => state.userSlice.isAuth);

  return (
    <Routes>
      <Route path="/" element={<HomeModel />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute
            isAuthenticated={isAuth}
            loginComponent={<SignInModel />}
            outlet={<ProfileModel />}
          />
        }
      />
      <Route path="/metier-pedia" element={<MetierPediaModel />} />
      <Route path="/signup-signin" element={<SignInModel />} />
    </Routes>
  );
};

export default App;
