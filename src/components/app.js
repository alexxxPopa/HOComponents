//@flow
import * as React from 'react';

import Header from './header';

type Props = {
  children:? React.Node;
}
class App extends React.Component<Props> {
  render() {
    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    );
  }
}

export default App;