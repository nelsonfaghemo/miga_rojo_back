let read = (req, res, next) =>
  res.status(200).render("index", {
    title: "/mangas",
    subtitle: "endpoints of mangas",
  });

export default read;
