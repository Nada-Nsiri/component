import Photo from "./component/profile/ProfilePhoto"
import Fullname from "./component/profile/fullname"
import Adress from "./component/profile/Address"

import './App.css';

function App() {
  return (
    <div className="App">
     <Photo/>
     <Fullname/>
     <Adress/>
    </div>
  );
}

export default App;
