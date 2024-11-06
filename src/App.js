import React from 'react';
import Sider from './components/Sider';
import Content from './components/Content';

function App() {
  return (
    <div className="flex h-screen">
      <Sider />
      <Content />
    </div>
  );
}

export default App;
