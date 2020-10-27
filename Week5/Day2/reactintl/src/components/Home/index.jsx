import React, { useState } from 'react'; 
import { injectIntl, FormattedMessage } from 'react-intl';

const Home = ({intl}) => {
  //const [message, setMessage] = useState(intl.formatMessage({ id: "works" }));

  return (
    <div>
      <h1>Lol astéroïde</h1>
      <p>
        Présentation: <br/>
        <FormattedMessage id="presentation" />
      </p>
      <p>
        Travaux: <br/>
        <FormattedMessage id="works" />
      </p>
      <p>
        Contact: <br/>
        <FormattedMessage id="contact" />
      </p>
    </div>
  )
}

export { Home };
export default injectIntl(Home);