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
        fontFamily: 'sans-serif',
        color: '#111',
      }}
    >
      <h1 style={{ fontSize: '5rem' }}>Coming Soon!</h1>
      <hr />
    </div>
  </Base>
);

export default Index;
