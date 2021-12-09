import { ReactNode, FunctionComponent } from 'react';

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Drawer: FunctionComponent<DrawerProps> = function Drawer({
  children,
  isOpen,
  setIsOpen,
}) {
  const closeDrawer = () => setIsOpen(false);

  // Styles for the outside continer
  let containerClasses =
    'fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out';
  containerClasses += isOpen
    ? ' transition-opacity opacity-100 duration-500 translate-x-0'
    : ' transition-all delay-500 opacity-0 translate-x-full';

  // Styles for the content wrapper.
  let contentClasses =
    'w-screen max-w-lg right-0 absolute bg-white h-full shadow-2xl delay-400 duration-500 ease-in-out transition-all transform';
  contentClasses += isOpen ? ' translate-x-0' : ' translate-x-full';

  return (
    <div className={containerClasses}>
      <div className={contentClasses}>
        <div className="relative flex flex-col w-screen h-full max-w-lg pb-10 space-y-6 overflow-y-scroll">
          {children}
        </div>
      </div>
      <div className="w-screen h-full cursor-pointer" onClick={closeDrawer} />
    </div>
  );
};

export default Drawer;
