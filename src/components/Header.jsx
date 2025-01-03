const Header = () => {
    return (
      <header className="h-20 flex items-center px-4 bg-transparent backdrop-blur-sm rounded-md fixed top-0 left-0 w-full z-10">
        {/* Blurred background on the left side */}
        <div className="absolute top-0 left-0 h-full w-full backdrop-blur-sm z-0"></div>
  
        {/* Image on the right side */}
        <img
          src="/image/user.jpg"
          alt="User"
          className="w-10 border border-amber-600 rounded-full cursor-pointer absolute right-4 z-20" // Adjusted `right` to prevent out of view
        />
      </header>
    );
  };
  
  export default Header;
  