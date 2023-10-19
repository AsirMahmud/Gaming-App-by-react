import noImage from "../assets/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.avif";

const getCroppedImage = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  url.slice(0, index) + "crop/600/400";
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImage;
