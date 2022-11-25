const setupTags = (recipes: { content: { tags: string[] } }[]) => {
  const allTags: { [key: string]: number } = {};

  recipes.forEach((recipe: { content: { tags: string[] } }) => {
    recipe.content.tags.forEach(tag => {
      if (Object.prototype.hasOwnProperty.call(allTags, tag)) {
        allTags[tag] += 1;
      } else {
        allTags[tag] = 1;
      }
    });
  });

  const entries = Object.entries(allTags);
  entries.sort();

  return entries;
};

export default setupTags;
