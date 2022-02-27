import ContactForm from '../Components/ContactForm';
import { Base } from '../templates/Base';

export async function getStaticProps(){
  return {props: {
    templateID: process.env.TEMPLATE_ID,
    serviceID: process.env.SERVICE_ID,
    userID: process.env.USER_ID,
  }}
}

export interface IContactForm {
   templateID: string;
   serviceID: string;
   userID: string;
 }

const Index = (props: IContactForm) => (
  <Base>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#458bca',
        padding: '3rem',
        fontFamily: 'sans-serif',
        color: '#eee',
      }}
    >
      <ContactForm {...props} />
      <hr />
    </div>
  </Base>
);

export default Index;
