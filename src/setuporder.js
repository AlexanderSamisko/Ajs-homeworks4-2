export default function setOrder(list) {
  document.querySelector('.team-plate').innerHTML = '';
  for (let i = 0; i < list.length; i += 1) {
    document.querySelector('.team-plate').innerHTML += `<p class="unit" data-occupation="${list[i].occupation}" data-health-current="${list[i].health}" data-health-maximum="${list[i].maxHealth}" data-name="${list[i].name}">${list[i].name} ${list[i].health}hp</p>`;
  }
}
