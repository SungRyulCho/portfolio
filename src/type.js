"use strict";

new TypeIt(".home__title__strong", {
  loop: true,
  speed: 150,
}) // Dream Coder|
  .move(-11)
  .type("Amazing ")
  .pause(1000)
  .move(null, { to: "END" })
  .delete() //|
  .type("Front-end Engineer")
  .pause(1000)
  .move(-9) //
  .delete(9) //
  .type("Back-end")
  .pause(1000)
  .delete(8)
  .type("Full-stack")
  .pause(1000)
  .move(9)
  .delete()
  .go();
