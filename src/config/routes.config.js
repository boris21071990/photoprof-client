import HomePage from '../pages/HomePage';
import PhotosPage from '../pages/PhotosPage';
import PhotoPage from '../pages/PhotoPage';
import PhotographersPage from '../pages/PhotographersPage';
import PhotographerPage from '../pages/PhotographerPage';
import PhotographerProfilePage from '../pages/PhotographerProfilePage';

export default [
    {
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        path: '/photo/:id',
        component: PhotoPage,
        exact: true
    },
    {
        path: '/photos',
        component: PhotosPage,
        exact: false
    },
    {
        path: '/photographer/profile',
        component: PhotographerProfilePage,
        exact: false
    },
    {
        path: '/photographers',
        component: PhotographersPage,
        exact: false
    },
    {
        path: '/photographer/:slug',
        component: PhotographerPage,
        exact: false
    }
];
