import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import CharacterList from './components/character/list/CharacterList';
import CharacterForm from './components/character/form/CharacterForm';
import CharacterDetails from './components/CharacterDetails';
import LanguageSelector from './components/LanguageSelector';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <LanguageSelector />
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character/new" element={<CharacterForm />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
}