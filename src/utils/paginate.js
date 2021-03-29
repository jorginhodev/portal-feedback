const splitData = (items, max) => items.reduce((accumulator, item, index) => {
  const group = Math.floor(index / max);
  accumulator[group] = [...(accumulator[group] || []), item];
  return accumulator;
}, []);

export default splitData;
