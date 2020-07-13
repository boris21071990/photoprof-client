const photoMapper = (data) => {
  if (!data) {
    return null;
  }

  return {
    id: data.id,
    photoUrl: `/photo/${data.id}`,
    smallImageUrl: data.small_image_url,
    mediumImageUrl: data.medium_image_url,
    largeImageUrl: data.large_image_url,
    likesCount: data.likes_count,
    viewsCount: data.views_count,
  };
};

const photographerMapper = (data) => {
  if (!data) {
    return null;
  }

  return {
    fullName: [data.first_name, data.last_name].join(' ').trim(),
    photographerUrl: `/photographer/${data.slug}`,
    imageUrl: data.image_url,
    description: data.description,
  };
};

export const photographerItemMapper = (data) => {
  const photographerData = photographerMapper(data);

  return {
    ...photographerData,
    cityName: data.city.name,
    categories: data.categories.map((category) => category.name),
    photos: data.photos.map(photoMapper),
  };
};

export const photoViewMapper = (data) => {
  const photoData = photoMapper(data);

  return {
    ...photoData,
    photographer: photographerMapper(data.photographer),
  };
};

export const errorsMapper = (errors) => {
  return errors.map((error) => error.message);
};

export const citiesMapper = (data) => {
  return data.map((city) => {
    return {
      id: city.id,
      name: city.name,
    };
  });
};

export const categoriesMapper = (data) => {
  return data.map((category) => {
    return {
      id: category.id,
      name: category.name,
    };
  });
};

export const photosMapper = (data) => {
  return data.map((item) => {
    const photoData = photoMapper(item);

    return {
      ...photoData,
      photographer: photographerMapper(item.photographer),
    };
  });
};

export const photographersMapper = (data) => data.map((item) => photographerItemMapper(item));

export const photographerProfileMapper = (data) => {
  return {
    imageUrl: data.image_url,
    cityId: data.city_id,
    firstName: data.first_name,
    lastName: data.last_name,
    description: data.description,
  };
};

export const photographerPhotosMapper = (photographerPhotos) => {
  return photographerPhotos.map((data) => {
    return {
      id: data.id,
      categoryId: data.category_id,
      imageUrl: data.image_url,
      smallImageUrl: data.small_image_url,
      mediumImageUrl: data.medium_image_url,
      largeImageUrl: data.large_image_url,
    };
  });
};

export const userMapper = (data) => {
  return {
    email: data.email,
    role: data.role,
    imageUrl: data.image_url,
  };
};
