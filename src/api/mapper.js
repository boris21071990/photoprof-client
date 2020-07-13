const photoMapper = (data) => {
    return {
        photoUrl: `photo/${data.id}`,
        imageUrl: data.image_url
    };
};

const photosMapper = (data) => {
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

const photographerMapper = (data) => {
    return {
        fullName: data.full_name,
        photographerUrl: `photographer/${data.id}`,
        imageUrl: data.image_url,
        cityName: data.city.name,
        description: data.description,
        categories: data.categories.map(category => category.name),
        photos: data.photos.map(photoMapper)
    };
};

const photographersMapper = (data) => data.map(item => photographerMapper(item));

export {
    photoMapper,
    photosMapper,
    photographerMapper,
    photographersMapper
}
