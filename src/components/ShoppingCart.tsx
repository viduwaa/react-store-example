type Openprops = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export function ShoppingCart({ isOpen, toggleMenu }: Openprops) {
  return (
    <>
      <div
        className={`fixed inset-y-0 right-0 z-40 w-64 bg-white shadow-xl overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          {/* Offcanvas content */}
          <h2 className="text-xl font-bold mb-4">Offcanvas Menu</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-blue-500 hover:underline">Link 1</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-500 hover:underline">Link 2</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-500 hover:underline">Link 3</a>
            </li>
            {/* Add more menu items */}
          </ul>
        </div>
      </div>

      {/* Offcanvas overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}
