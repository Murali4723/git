// JavaScript to handle click events for planets
const planets = document.querySelectorAll('.planet');

planets.forEach(planet => {
  planet.addEventListener('click', function () {
    alert(`You clicked on ${planet.title}!`);
  });
});
