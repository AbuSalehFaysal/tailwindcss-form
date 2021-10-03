import './App.css';
import Toggle from './components/Toggle/Toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import Order from './components/Order/Order';
import Discount from './components/Discount/Discount';
import DiscountType from './components/DiscountType/DiscountType';
import Heading from './components/Heading/Heading';

function App() {
  return (
    <div>
      <div className="container mx-auto px-4 mt-5">
        
        <Heading />
        <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-1">
          <Order />

          <Discount />

          <DiscountType />
        </div>
      </div>
    </div>
  );
}

export default App;