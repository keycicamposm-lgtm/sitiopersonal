// hobbies.js
const items = document.querySelectorAll(".hb-intro, .hb-card");

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("hb-in");
        io.unobserve(entry.target); // anima una vez y ya
      }
    });
  },
  { threshold: 0.12 }
);

items.forEach((el) => {
  el.classList.add("hb-anim");
  io.observe(el);
});

