import React, { Component } from 'react';

import Layout from "./components/Layout/Layout"
import BurggerBuilder from "./containers/BurggerBuilder/BurggerBuilder"

class App extends Component {
  render() {
    return (


      <div >
      <Layout>

      <BurggerBuilder />
      </Layout>
      </div>
    );
  }
}

export default App;
