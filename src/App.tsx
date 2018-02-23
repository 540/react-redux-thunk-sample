import * as React from 'react';
import { ReactNode } from 'react';
import './App.css';
import Header from './components/common/Header';

const App: React.StatelessComponent<ReactNode> = ({children}) => {
    return (
        <div className="container-fluid App">
            <Header/>
            {children}
        </div>
    );
};

export default App;
