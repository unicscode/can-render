import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { useRender } from '../.';

const App = () => {
  console.log(useRender);
  return <div>hello</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
