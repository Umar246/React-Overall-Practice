//Linking (Import) :-


//App.scss : Link Yai built in thi is ko 'css' sy 'scss' mai change kia hai (styling wali sari files ko is k sath link karna ha )
import './App.scss';

//Custom Bootstrap JS
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Routes from './pages/Routes';
import NameContextProvider from './context/NameContext';
import CountContextProvider from './context/CountContext';
import InputNameContextProvider from './context/InputNameContext';

//_______________________________________________________________________________________________

// Jo Hum Browser mai dikhana chaty ha us ka code idar ay ga

function App() {
  return (

    <>
      <InputNameContextProvider>
        <CountContextProvider>
          <NameContextProvider>
            <Routes />
          </NameContextProvider>
        </CountContextProvider>
      </InputNameContextProvider>

    </>
  );
}

export default App;



