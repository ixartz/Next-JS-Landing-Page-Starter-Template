import DarkModeToggle from '../components/theme/DarkModeToggle';
import { Base } from '../templates/Base';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <div className="flex justify-end p-4">
        <div className="rounded-full bg-gray-200 p-2 shadow-md transition duration-300 hover:scale-105 dark:bg-gray-800">
          <DarkModeToggle />
        </div>
      </div>
      <Base />
    </div>
  );
};

export default Index;
