import defineOrder from '../defineorder';

test('checking whether sorting the array by parameter will work', () => {
  const heroList = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const listHero = defineOrder(heroList);
  expect(heroList).toEqual(listHero);
});
