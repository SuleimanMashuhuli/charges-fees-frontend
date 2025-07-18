import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ContainerLayOut from './components/ContainerLayOut';

export default function App() {
  return (
    <BrowserRouter>
      <ContainerLayOut />
    </BrowserRouter>
  );
}

