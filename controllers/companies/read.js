let read = (req, res, next) =>
  res.status(200).render("index", {
    title: "/companies",
    subtitle: "endpoints of companies",
  });

export default read;
