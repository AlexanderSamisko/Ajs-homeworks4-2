export default function scriber() {
  const units = document.querySelectorAll('.unit');
  const unitsArr = [...units];
  const unitslist = [];

  for (let i = 0; i < unitsArr.length; i += 1) {
    unitslist.push(
      {
        name: units[i].getAttribute('data-name'),
        occupation: units[i].getAttribute('data-occupation'),
        health: units[i].getAttribute('data-health-current'),
        maxHealth: units[i].getAttribute('data-health-maximum'),
      },
    );
  }

  return unitslist;
}
