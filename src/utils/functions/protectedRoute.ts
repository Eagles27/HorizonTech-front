export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  loginComponent: React.ReactNode;
  outlet: React.ReactNode;
};

export default function ProtectedRoute({
  isAuthenticated,
  loginComponent,
  outlet,
}: ProtectedRouteProps) {
  if (isAuthenticated) {
    return outlet;
  } else {
    return loginComponent;
  }
}
