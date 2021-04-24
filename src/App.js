import './App.css';
import Counter from './components/counter';
import store from './store'
import { Provider } from 'react-redux';

function App() {
  // console.log(store.getState());
  return (
    <Provider store = {store}>
      <Counter />
    </Provider>
  );
}

export default App;
