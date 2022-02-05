import { Base } from '../templates/Base';

const Index = () => (
  <Base>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vmin',
        background: '#458bca',
        fontFamily: 'sans-serif',
        color: '#eee',
      }}
    >
      <h1 style={{ fontSize: '5rem' }}>Coming Soon!</h1>
      <hr />
    </div>
  </Base>
);

export default Index;
