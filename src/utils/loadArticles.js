const importAllJsonFiles = (requireContext) => {
    return requireContext.keys().map((key) => {
      const article = requireContext(key);
      const slug = key.replace('./', '').replace('.json', ''); // Extract the filename without extension
      return { ...article, slug }; // Return article data with the slug
    });
  };
  
  export default importAllJsonFiles;
  