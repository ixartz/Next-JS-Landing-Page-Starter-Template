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
        background: '#444',
        fontFamily: 'sans-serif',
        color: '#eee',
      }}
    >
      <h1 style={{ fontSize: '5rem' }}>Coming Soon!</h1>
      <hr />
      {/* <h4 style={{ fontSize: '5rem' }}></h4> */}
    </div>
  </Base>
);

export default Index;
