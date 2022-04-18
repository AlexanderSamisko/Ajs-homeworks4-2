import scriber from './scribe';
import defineOrder from './defineorder';
import setOrder from './setuporder';

document.addEventListener('click', () => {
  const list = scriber();
  defineOrder(list);
  setOrder(list);
});
