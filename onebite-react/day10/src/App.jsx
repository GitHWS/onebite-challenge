import './App.css';
import Welcome from './components/Welcome';

function App() {
  const user = {
    name: '비지',
    isMember: false,
  };

  return (
    <>
      {/* <Welcome name={'비지'} isMember={false} /> */}
      <Welcome {...user} />
    </>
  );
}

export default App;
