import React from 'react';
import NavBar from './components/NavBar';
import ShowNotes from './components/ShowNotes';
import AddNote from './components/AddNote';
import ModalContextProvider from './contexts/ModalContext';
import NoteContextProvider from './contexts/NoteContext';

function App() {
  return (
    <div>
      <NoteContextProvider>
        <ModalContextProvider>
          <NavBar />
          <AddNote />
        </ModalContextProvider>
        <ShowNotes />
      </NoteContextProvider>
    </div>
  );
}

export default App;
