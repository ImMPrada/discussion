import { AuthProvider } from './contexts/AuthContext'
import { PostsProvider } from './contexts/PostsContext';
import AppRouter from './navigation/AppRouter/AppRouter';


function App() {
  return (
    <AuthProvider>
      <PostsProvider>
        <AppRouter/>
      </PostsProvider>
    </AuthProvider>
    
  )
}

export default App;
