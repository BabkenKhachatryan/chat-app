import './App.css';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import LoginPage from './pages/loginPage/loginPage';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import UsersPage from './pages/UsersPage/usersPage'
import ChatPage from './pages/chatPage/chatPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <Routes>
          <Route path='/'  element={<LoginPage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/users/chat/:id' element ={<ChatPage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
