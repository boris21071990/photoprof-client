const photoMapper = (data) => {
    if (!data) {
        return null;
    }

    return {
        id: data.id,
        photoUrl: `/photo/${data.id}`,
        imageUrl: data.image_url,
        likesCount: data.likes_count
    }
};

const photographerMapper = (data) => {
    if (!data) {
        return null;
    }

    return {
        fullName: [data.first_name, data.last_name].join(" ").trim(),
        photographerUrl: `/photographer/${data.id}`,
        imageUrl: data.image_url,
        description: data.description
    };
};

export const photographerItemMapper = (data) => {
    return {
        fullName: [data.first_name, data.last_name].join(" ").trim(),
        photographerUrl: `photographer/${data.id}`,
        imageUrl: data.image_url,
        cityName: data.city.name,
        description: data.description,
        categories: data.categories.map(category => category.name),
        photos: data.photos.map(photoMapper)
    };
};

export const photoViewMapper = (data) => {
    return {
        photoUrl: `photo/${data.id}`,
        imageUrl: data.image_url,
        likesCount: data.likes_count,
        photographer: photographerMapper(data.photographer)
    };
};

export const errorsMapper = (errors) => {
    return errors.map((error) => error.message);
};

export const citiesMapper = (data) => {
    return data.map((city) => ({ id: city.id, name: city.name}));
};

export const photosMapper = (data) => {
    return data.map(item => {
        return {
            imageUrl: item.image_url,
            photoUrl: `photo/${item.id}`,
            likesCount: item.likes_count,
            viewsCount: item.views_count,
            photographer: {
                photographerUrl: `photographer/${item.photographer.id}`,
                imageUrl: item.photographer.image_url
            }
        };
    });
};

export const photographersMapper = (data) => data.map(item => photographerItemMapper(item));

export const photographerProfileMapper = (data) => {
    return {
        imageUrl: data.image_url,
        cityId: data.city_id,
        firstName: data.first_name,
        lastName: data.last_name,
        description: data.description
    };
};

export const photographerPhotosMapper = (photographerPhotos) => {
    return photographerPhotos.map((data) => {
        return {
            id: data.id,
            categoryId: data.category_id,
            imageUrl: data.image_url
        }
    });
};
