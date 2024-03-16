import { shortUrls } from "../models/shortUrls.js";

export const shortenerUrl = async () => {
  const shortUrl = Math.random().toString(36).substring(6);
  const url = await shortUrls.findOne({ where: { short_url: shortUrl } });
  if (!url) {
    return shortUrl;
  } else {
    shortenerUrl();
  }
};
