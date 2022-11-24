const setupTags = recipes => {
  console.log('hello from utils');
  const [zero, first, second, third] = recipes;

  console.log(zero, first, second, third);

  const tags = [];
  tags.push(zero.content.tags);
  tags.push(first.content.tags);
  tags.push(second.content.tags);
  tags.push(third.content.tags);

  console.log(tags);

  const tagsArr = [];
  const allTags = tags.forEach(item => {
    item.forEach(tag => {
      tagsArr.push(tag);
    });
  });

  const mySet = new Set(tagsArr);
  console.log(mySet);

  const values = Array.from(mySet);
  console.log(values.sort());

  return values;
};

export default setupTags;
