
import React from 'react';
import './styles.css'; 
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App(){ 
    return (
<>
<Header />
<ItemListContainer />
</>
)
}

export default App

