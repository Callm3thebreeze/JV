import type { ImageMetadata } from "astro";
import churferThumbnail from "../assets/churfer.png";
import copmThumbnail from "../assets/copm.png";
import jvPortfolioThumbnail from "../assets/jv-portfolio.png";
import vodafoneThumbnail from "../assets/vodafone.png";

const projectThumbnailByPath: Record<string, ImageMetadata> = {
  "../../../assets/churfer.png": churferThumbnail,
  "../../../assets/copm.png": copmThumbnail,
  "../../../assets/jv-portfolio.png": jvPortfolioThumbnail,
  "../../../assets/vodafone.png": vodafoneThumbnail,
};

const projectThumbnailByName: Record<string, ImageMetadata> = {
  "churfer.png": churferThumbnail,
  "copm.png": copmThumbnail,
  "jv-portfolio.png": jvPortfolioThumbnail,
  "vodafone.png": vodafoneThumbnail,
};

export function resolveProjectThumbnail(
  source: ImageMetadata | string | undefined,
): ImageMetadata | undefined {
  if (!source) {
    return undefined;
  }

  if (typeof source !== "string") {
    return source;
  }

  const normalizedSource = source.replace(/\\/g, "/");
  const fileName = normalizedSource.split("/").pop() ?? "";

  return (
    projectThumbnailByPath[normalizedSource] ?? projectThumbnailByName[fileName]
  );
}