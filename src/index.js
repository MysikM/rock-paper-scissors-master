import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Score from "./context/Score";
import Toggle from "./context/Toggle";
import Start from "./context/Start";
import UserSelectItem from "./context/UserSelectItem";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Start>
        <UserSelectItem>
            <Toggle>
                <Score>
                    <App />
                </Score>
            </Toggle>
        </UserSelectItem>
    </Start>
  </React.StrictMode>
);
