import './App.css';
import NewUser from './soudhapages/NewUser';
import UserDetails from './soudhapages/UserDetails';
import ReceivedSoudha from './soudhapages/ReceivedSoudha';
import AddPartner from './soudhapages/AddPartner';
import Consignment from './soudhapages/Consignment';
import Login from './auth/login';
import ForgotPassword from './auth/forgot_password';
import VerifyOtp from './auth/verify_otp';

function App() {
  return (
    <>
    <Login/>
    <br/>
    <VerifyOtp/>
    <br/>
    <ForgotPassword/> 
      <AddPartner />
     <Consignment/>
     <ReceivedSoudha/>
     <NewUser/>
     <UserDetails />
    </>
  );
}

export default App;
