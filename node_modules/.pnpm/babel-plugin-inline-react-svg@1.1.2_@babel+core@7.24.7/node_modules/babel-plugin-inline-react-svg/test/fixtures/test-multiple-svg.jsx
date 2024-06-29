import MySvg from './close.svg';
import MySvg2 from './close.svg';
import MySvg3 from './close2.svg';

export function MyFunctionIcon() {
  return <MySvg />;
}

export class MyClassIcon extends React.Component {
  render() {
    return (
      <div>
        <MySvg />
        <MySvg2 />
        <MySvg3 />
      </div>
    );
  }
}
