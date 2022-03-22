import clientApi from "./client";

const endpoint = "/listings";
const getListings = () => clientApi.get(endpoint);

const addListing = (listing) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, index) => {
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    });
  });

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  return clientApi.post(endpoint, data);
};

export default {
  getListings,
  addListing,
};
