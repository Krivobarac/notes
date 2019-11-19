import React from 'react';
import NavBar from './components/NavBar';
import ShowNotes from './components/ShowNotes';
import AddNote from './components/AddNote';
import ModalContextProvider from './contexts/ModalContext';
import NoteContextProvider from './contexts/NoteContext';
import UpdateNote from './components/UpdateNote';
import TextContextProvider from './contexts/TextContext';

function App() {
  return (
    <div className='App'>
      <TextContextProvider>
        <NoteContextProvider>
          <ModalContextProvider>
            <NavBar />
            <AddNote />
            <UpdateNote />
            <ShowNotes />
          </ModalContextProvider>
        </NoteContextProvider>
      </TextContextProvider>
    </div>
  );
}

export default App;
