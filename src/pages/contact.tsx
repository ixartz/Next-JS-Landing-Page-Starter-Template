import { Base } from '../templates/Base';

const Index = () => (
  <Base>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '60vh',
        fontFamily: 'sans-serif',
        color: '#111',
        padding: '8rem 3rem'
      }}
    >
      <div className="text-center">

        <h1 className="font-medium leading-tight text-5xl mt-0 mb-2">
          Contact
        </h1>
      </div>
        <p className='text-center'>The best way to reach us is via email. Feel free to ask us any questions or request a callback. Looking forward to hearing from you.</p> 
        <br />
        <strong>info@ez.photos</strong>
      <hr />
    </div>
  </Base>
);

export default Index;
