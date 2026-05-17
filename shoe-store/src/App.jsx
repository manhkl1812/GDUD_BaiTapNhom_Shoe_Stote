import AppRoutes from "./routes/AppRoutes.jsx";
import ToastHost from "./components/common/ToastHost.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
      <ToastHost />
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
