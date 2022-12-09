export default function createLabel(number, measureUnit) {
  const days = ['День', 'Дня', 'Дней'];
  const hours = ['Час', 'Часа', 'Часов'];
  const minutes = ['Минута', 'Минуты', 'Минут'];

  const cases = [2, 0, 1, 1, 1, 2];

  if (measureUnit === 'days') {
    return `${days[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]}`;
  }
  if (measureUnit === 'hours') {
    return `${hours[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]}`;
  }

  if (measureUnit === 'minutes') {
    return `${minutes[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]}`;
  }
}