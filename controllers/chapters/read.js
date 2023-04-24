let read = (req, res, next) =>
  res.status(200).render("index", {
    title: "/chapters",
    subtitle: "endpoints of chapters",
  });

export default read;
