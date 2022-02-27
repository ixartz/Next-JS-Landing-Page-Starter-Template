import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Header } from './Hero';

const Base: React.FC = ({ children }) => (
  <div className="antialiased text-gray-600 root">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />

    {children}
    <Footer />
  </div>
);

export { Base };
