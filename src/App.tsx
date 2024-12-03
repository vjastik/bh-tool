import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./store/store";
import CharacterList from "./components/character/list/CharacterList";
import CharacterForm from "./components/character/form/CharacterForm";
import CharacterDetails from "./components/CharacterDetails";
import LanguageSelector from "./components/LanguageSelector";

const GH_PAGES_PATH = "/bh-tool";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <LanguageSelector />
        <Routes>
          <Route path={`${GH_PAGES_PATH}/`} element={<CharacterList />} />
          <Route
            path={`${GH_PAGES_PATH}/character/new`}
            element={<CharacterForm />}
          />
          <Route
            path={`${GH_PAGES_PATH}/character/:id`}
            element={<CharacterDetails />}
          />
        </Routes>
      </Router>
    </Provider>
  );
}
