import { shortenerUrl } from "../utils/functions.js";

export const getUrls = (req, res) => {
  res.send("getting projects");
};

export const createUrl = async (req, res) => {
  const { id, original_url } = req.body;
  const asd = await shortenerUrl();
  res.send(asd);
};
