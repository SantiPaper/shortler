import { getHash } from "../utils/functions.js";
import { shortUrls } from "../models/shortUrls.js";

export const getUrls = async (req, res) => {
  try {
    let { userID } = req.query;

    // Si userID no está definido en la solicitud, establecerlo como una cadena vacía
    userID = userID || "";

    const data = await shortUrls.findAll({ where: { userID } });

    if (data.length !== 0) {
      res.status(200).json(data);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    console.error("Error retrieving URLs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getSingleUrl = async (req, res) => {
  try {
    const { short_url } = req.params;
    const url = await shortUrls.findOne({ where: { short_url } });
    if (url !== null) {
      return res.redirect(url.original_url);
    } else {
      return res.status(404).json({ error: "Not found" });
    }
  } catch (error) {
    console.error("Error retrieving URL:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createUrl = async (req, res) => {
  const { original_url, name, userID } = await req.body;

  if (!original_url || !name) {
    return res.status(400).json({ error: "Missing data" });
  }

  try {
    const shortUrl = await getHash();

    const newData = await shortUrls.create({
      original_url: original_url,
      short_url: shortUrl,
      name: name,
      userID: userID,
    });

    res.send(newData);
  } catch (error) {
    return res.status(500).json({ error: "Error url shortener" });
  }
};

export const deleteUrl = async (req, res) => {
  const { short_url } = req.params;
  const url = await shortUrls.findOne({ where: { short_url } });
  if (url) {
    await url.destroy();
    res.status(200).json({ message: "URL deleted successfully" });
  } else {
    res.status(404).json({ error: "URL not found" });
  }
};
