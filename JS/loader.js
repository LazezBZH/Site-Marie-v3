let zen = function () {
  const logo = Snap.select(".logo-loader");
  logo.attr({
    fill: "#AED5FF",
  });
  logo.select(".zenman").transform("s.2,t98,105");
  // logo
  //   .text(20, 10, "Bienvenue / Welcome")
  //   .attr({
  //     fill: "#874010",
  //     "font-family": "Varela Round",
  //     "text-shadow": "0 0 52px #000",
  //   })
  //   .transform("t-19,89.5");

  const circle = Snap.select(".circle");

  const svgs = [circle];

  const rot = function (thisCircle, per, dir) {
    const dots = thisCircle.select(".dots");
    const scale = dots.transform().localMatrix.d;
    dots.stop().animate(
      {
        transform: "s" + scale + ", t0,0r" + 360 * dir,
      },
      100000 * (per / 100),
      function () {
        dots.transform("s" + scale + ",t0,0r0");
        rot(thisCircle, per);
      }
    );
  };

  let rings = 5;
  for (let i = 0; i <= rings; i++) {
    svgs.push(circle.clone());
    let per = i / rings;

    let speed = Math.floor(Math.random() * 100) + 25;
    let dir = Math.random() < 0.5 ? -1 : 1;
    let scale = per * 0.9;
    svgs[i].attr({
      fill: "#874010",
    });
    svgs[i].select(".dots").transform("s" + scale + ",t0,0r0");

    rot(svgs[i], speed, dir);
  }
};
zen();
