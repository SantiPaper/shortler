import { shortenerUrl } from "../utils/functions.js";
import { shortUrls } from "../models/shortUrls.js";

export const getUrls = async (req, res) => {
  const data = await shortUrls.findAll();
  if (data.length !== 0) {
    res.status(200).json(data);
  } else {
    res.status(400).send("Data is null");
  }
};

export const getSingleUrl = async (req, res) => {
  const shorterUrl = req.params.short_url;
  const url = await shortUrls.findOne({ where: { short_url: shorterUrl } });
  if (url !== null) {
    res.redirect("https://www.youtube.com/watch?v=4WvX9dBjiJo");
  } else {
    res.status(404).json({ error: "Not found" });
  }
};

export const createUrl = async (req, res) => {
  const { original_url, name } = await req.body;
  if (!original_url) {
    return res.status(400).json({ error: "Url is required" });
  }
  const shortUrl = await shortenerUrl();

  if ((shortUrl, original_url, name)) {
    const newData = await shortUrls.create({
      original_url: original_url,
      short_url: shortUrl,
      name: name,
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
