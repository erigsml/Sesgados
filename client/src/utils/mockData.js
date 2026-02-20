export const MOCK_USERS = {
    elenar: {
        name: 'Elena Rostova',
        username: 'elenar',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
        coverUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2600&auto=format&fit=crop', // Mountain cover
        bio: 'Capturando la luz y las sombras en las calles de Tokio y París. Amante del grano fílmico y los contrastes fuertes.',
        followers: 1240,
        following: 180,
        location: 'Tokyo / Paris',
        joinDate: 'Septiembre 2024'
    },
    mchen_visuals: {
        name: 'Marcus Chen',
        username: 'mchen_visuals',
        avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
        coverUrl: 'https://images.unsplash.com/photo-1506744626753-1fa7603a4b69?q=80&w=2600&auto=format&fit=crop', // Forest cover
        bio: 'Fotógrafo de paisajes y vida salvaje. Siempre buscando la próxima cumbre.',
        followers: 8900,
        following: 450,
        location: 'Yosemite, CA',
        joinDate: 'Enero 2023'
    },
    sofiaseed: {
        name: 'Sofia Alba',
        username: 'sofiaseed',
        avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop',
        coverUrl: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=2600&auto=format&fit=crop', // Beach cover
        bio: 'Colores pastel y atardeceres. Visual storyteller.',
        followers: 340,
        following: 120,
        location: 'Malibu, CA',
        joinDate: 'Febrero 2025'
    }
};

export const MOCK_PHOTOS = [
    {
        id: 1,
        ratio: 'r-4x5',
        url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2600&auto=format&fit=crop',
        author: MOCK_USERS.elenar,
        exif: {
            camera: 'Sony A7III',
            lens: 'FE 85mm F1.4 GM',
            aperture: 'f/1.4',
            shutterSpeed: '1/2000s',
            iso: 100,
            location: 'Tokyo, Japan',
        },
    },
    {
        id: 2,
        ratio: 'r-16x9',
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2600&auto=format&fit=crop',
        author: MOCK_USERS.mchen_visuals,
        exif: {
            camera: 'Fujifilm X-T4',
            lens: 'XF 16-55mm F2.8',
            aperture: 'f/8.0',
            shutterSpeed: '1/250s',
            iso: 400,
            location: 'Yosemite, CA',
        },
    },
    {
        id: 3,
        ratio: 'r-1x1',
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2600&auto=format&fit=crop',
        author: MOCK_USERS.sofiaseed,
        exif: {
            camera: 'Canon EOS R5',
            lens: 'RF 24-70mm F2.8 L',
            aperture: 'f/2.8',
            shutterSpeed: '1/1000s',
            iso: 200,
            location: 'Malibu, CA',
        },
    },
    {
        id: 4,
        ratio: 'r-3x4',
        url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2600&auto=format&fit=crop',
        author: {
            name: 'David Kim',
            username: 'dk_photo',
            avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
            coverUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2600&auto=format&fit=crop',
            bio: 'Luz natural y sombras dramáticas.',
            followers: 120,
            following: 200,
            location: 'Berlin, Germany',
            joinDate: 'Noviembre 2024'
        },
        exif: {
            camera: 'Leica Q2',
            lens: 'Summilux 28mm f/1.7',
            aperture: 'f/4.0',
            shutterSpeed: '1/500s',
            iso: 100,
            location: 'Black Forest, Germany',
        },
    },
    {
        id: 5,
        ratio: 'r-3x2',
        url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2600&auto=format&fit=crop',
        author: {
            name: 'Alex Rivera',
            username: 'arivera',
            avatarUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop',
            coverUrl: 'https://images.unsplash.com/photo-1506744626753-1fa7603a4b69?q=80&w=2600&auto=format&fit=crop',
            bio: 'Retratos callejeros y luces neon.',
            followers: 500,
            following: 100,
            location: 'New York City',
            joinDate: 'Agosto 2024'
        },
        exif: {
            camera: 'Sony A7R IV',
            lens: 'FE 35mm F1.4 GM',
            aperture: 'f/1.8',
            shutterSpeed: '1/3200s',
            iso: 6400,
            location: 'New York City',
        },
    },
    {
        id: 6,
        ratio: 'r-9x16',
        url: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=2600&auto=format&fit=crop',
        author: MOCK_USERS.elenar,
        exif: {
            camera: 'Sony A7III',
            lens: 'FE 85mm F1.4 GM',
            aperture: 'f/2.2',
            shutterSpeed: '1/800s',
            iso: 400,
            location: 'Paris, France',
        },
    },
    {
        id: 10,
        ratio: 'r-3x4',
        url: 'https://images.unsplash.com/photo-1531124411132-7204ed22f36b?q=80&w=2600&auto=format&fit=crop',
        author: {
            name: 'Carlos Mendez',
            username: 'carlosm',
            avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
            coverUrl: 'https://images.unsplash.com/photo-1506744626753-1fa7603a4b69?q=80&w=2600&auto=format&fit=crop',
            bio: 'Arquitectura y deconstrucción visual.',
            followers: 2100,
            following: 50,
            location: 'Mexico City',
            joinDate: 'Abril 2023'
        },
        exif: {
            camera: 'Nikon Z8',
            lens: 'Z 50mm f/1.8 S',
            aperture: 'f/1.8',
            shutterSpeed: '1/4000s',
            iso: 64,
            location: 'Mexico City',
        },
    },
    {
        id: 11,
        ratio: 'r-1x1',
        url: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=2600&auto=format&fit=crop',
        author: {
            name: 'Aisha Patel',
            username: 'aisha_clicks',
            avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
            coverUrl: 'https://images.unsplash.com/photo-1506744626753-1fa7603a4b69?q=80&w=2600&auto=format&fit=crop',
            bio: 'Culturas, colores y momentos efímeros.',
            followers: 8800,
            following: 600,
            location: 'Mumbai, India',
            joinDate: 'Diciembre 2022'
        },
        exif: {
            camera: 'Fuji X100V',
            lens: '23mm F2',
            aperture: 'f/5.6',
            shutterSpeed: '1/1000s',
            iso: 200,
            location: 'Mumbai, India',
        },
    }
];

// Helper para conseguir todas las fotos de un usuario simulado
export const getPhotosByUser = (username) => {
    return MOCK_PHOTOS.filter(photo => photo.author.username === username);
};
