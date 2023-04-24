let read =(req, res, next) =>
  res.status(200).render("index", {
    title: "/categories",
    subtitle: "endpoints of categories",
  });

  export default read