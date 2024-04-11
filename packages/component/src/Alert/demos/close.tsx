import React from 'react';
import { Alert } from 'aelf-design';

const App: React.FC = () => {
  return (
    <div>
      <Alert message="Success Text" type="success" closable />
    </div>
  );
};

export default App;
