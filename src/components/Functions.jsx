export const handleFocus = () => {
    if (searchInputRef.current) {
      searchInputRef.current.select();
    }
  };