import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import messagesFr from './translation/fr';
import messagesEn from './translation/en';
import { Home } from './components/Home';

const messages = {
  fr: messagesFr,
  en: messagesEn,
}

const App = () => {
  const [language, setLanguage] = useState('fr');

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      < Home />
      <div>
        <button onClick={() => setLanguage('fr')}>Français</button>
        <button onClick={() => setLanguage('en')}>English</button>
    </div>
    </ IntlProvider >
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));