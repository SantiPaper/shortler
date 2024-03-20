import { shortenerUrl } from "../utils/functions.js";
import { shortUrls } from "../models/shortUrls.js";

export const getUrls = async (req, res) => {
  const { userID } = req.body;
  const data = await shortUrls.findAll({ where: { userID: userID } });
  if (data.length !== 0) {
    res.status(200).json(data);
  } else {
    res.status(404).send("Data is null");
  }
};

export const getSingleUrl = async (req, res) => {
  const shorterUrl = req.params.short_url;
  const url = await shortUrls.findOne({ where: { short_url: shorterUrl } });
  if (url !== null) {
    res.redirect(url.original_url);
  } else {
    res.status(404).json({ error: "Not found" });
  }
};

export const createUrl = async (req, res) => {
  const { original_url, name, userID } = await req.body;
  if (!original_url) {
    return res.status(400).json({ error: "Url is required" });
  }
  if (!userID) {
    return res.status(400).json({ error: "Not authenticate" });
  }
  const shortUrl = await shortenerUrl();

  if ((shortUrl, original_url, name, userID)) {
    const newData = await shortUrls.create({
      original_url: original_url,
      short_url: shortUrl,
      name: name,
      userID: userID,
    });
    res.send(newData);
  } else {
    return res.status(400).json({ error: "Error url shortener" });
  }
};

export const deleteUrl = async (req, res) => {
  const shorterUrl = req.params.short_url;
  const url = await shortUrls.findOne({ where: { short_url: shorterUrl } });
  if (url) {
    await url.destroy();
    res.status(200).json({ message: "URL deleted successfully" });
  } else {
    res.status(404).json({ error: "URL not found" });
  }
};
