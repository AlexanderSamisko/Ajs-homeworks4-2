export default function defineOrder(list) {
  list.sort((a, b) => b.health - a.health);
  return list;
}
