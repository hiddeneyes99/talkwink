import { Router, Route, Switch } from 'wouter';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { LandingPage } from './pages/LandingPage';
import { SignUpPage } from './pages/SignUpPage';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { PlansPage } from './pages/PlansPage';
import { PaymentPage } from './pages/PaymentPage';

function AppRoutes() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <Switch>
      <Route path="/">
        {user ? <HomePage /> : <LandingPage />}
      </Route>
      <Route path="/signup">
        {user ? <HomePage /> : <SignUpPage />}
      </Route>
      <Route path="/login">
        {user ? <HomePage /> : <LoginPage />}
      </Route>
      <Route path="/home">
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      </Route>
      <Route path="/plans/:girlId">
        <ProtectedRoute>
          <PlansPage />
        </ProtectedRoute>
      </Route>
      <Route path="/payment/:girlId/:planId">
        <ProtectedRoute>
          <PaymentPage />
        </ProtectedRoute>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;