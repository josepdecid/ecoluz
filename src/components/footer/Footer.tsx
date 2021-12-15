import { CodeIcon, ExclamationCircleIcon } from '@heroicons/react/outline';
import { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 space-y-2 text-center text-white bg-teal-500">
      <a href="https://josepdecid.me" target="_blank" rel="noreferrer">
        Josep de Cid - {currentYear}
      </a>
      <div className="flex items-center justify-around">
        <a
          href="https://github.com/josepdecid/ecoluz"
          target="_blank"
          className="flex flex-col items-center"
          rel="noreferrer"
        >
          <CodeIcon className="w-6 h-6 mr-3"></CodeIcon>
          <span>Contribute</span>
        </a>
        <a
          href="https://github.com/josepdecid/ecoluz/issues"
          target="_blank"
          className="flex flex-col items-center"
          rel="noreferrer"
        >
          <ExclamationCircleIcon className="w-6 h-6 mr-3"></ExclamationCircleIcon>
          <span>Report a problem</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
