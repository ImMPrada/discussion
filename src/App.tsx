import { AuthProvider } from './contexts/AuthContext'
import { DataProvider } from './contexts/DataContext';
import AppRouter from './navigation/AppRouter/AppRouter';


function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <AppRouter/>
      </DataProvider>
    </AuthProvider>
    
  )
}

export default App;
