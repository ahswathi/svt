import './App.css';
import NewUser from './soudhapages/NewUser/NewUser';
import UserDetails from './soudhapages/UserDetails/UserDetails';
import ReceivedSoudha from './soudhapages/ReceivedSoudha/ReceivedSoudha';
import AddPartner from './soudhapages/Addpartner/AddPartner';
import Consignment from './soudhapages/Consignment/Consignment';
import Login from './auth/login/login';
import ForgotPassword from './auth/forgot_password/forgot_password';
import VerifyOtp from './auth/verify_otp/verify_otp';

function App() {
  return (
    <>
    <Login/>
    <br/>
    <VerifyOtp/>
    <br/>
    <ForgotPassword/><br/><br/> 
       <AddPartner />
     <Consignment/>
     <ReceivedSoudha/>
     <NewUser/>
     <UserDetails /> 
    </>
  );
}

export default App;
