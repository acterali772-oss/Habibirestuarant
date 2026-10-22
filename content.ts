export const BRAND = {
  name: 'Habibi',
  fullName: 'Habibi Restaurant Muzaffarabad',
  tagline: 'The Proud Brand of Kashmir',
  whatsappNumber: '03090003070',
  whatsappUrl: 'https://wa.me/923090003070',
  email: 'Habibirestaurantajk@gmail.com',
  emailUrl: 'mailto:Habibirestaurantajk@gmail.com',
};

export type MenuCategory = {
  id: string;
  label: string;
  image: string;
  alt: string;
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'kids-deal',
    label: 'Kids Deal',
    image: '/menu-images/Pizza/IMG-20261020-WA0074.jpg',
    alt: 'Habibi Kids Meals menu',
  },
  {
    id: 'all-time-deal',
    label: 'All Time Deal',
    image: '/menu-images/Rolls%20and%20Drinks/IMG-20261020-WA0072.jpg',
    alt: 'Habibi All Time Deals menu',
  },
  {
    id: 'rolls-drinks',
    label: 'Rolls and Drinks',
    image: '/menu-images/Habibi%20Starters/IMG-20261020-WA0070.jpg',
    alt: 'Habibi Rolls and Drinks menu',
  },
  {
    id: 'sandwich-pasta',
    label: 'Sandwich and Pasta',
    image: '/menu-images/Sandwich%20and%20Pasta/IMG-20261020-WA0073.jpg',
    alt: 'Habibi Sandwiches and Pastas menu',
  },
  {
    id: 'habibi-delights',
    label: 'Habibi Delights',
    image: '/menu-images/All%20Time%20Deal/IMG-20261020-WA0071.jpg',
    alt: 'Habibi Delights menu',
  },
  {
    id: 'new-deal-04-poster',
    label: 'Deal 04 — Bazinga Meal',
    image: '/menu-images/New%20Menu%20Items/IMG-20261021-WA0012%20copy.jpg',
    alt: 'Habibi Deal 04 menu poster with two Bazinga burgers, fries, and drinks',
  },
  {
    id: 'new-deal-04-menu',
    label: 'Deal 04 — Add-ons',
    image: '/menu-images/New%20Menu%20Items/IMG-20261021-WA0013%20copy.jpg',
    alt: 'Habibi Deal 04 menu poster with add-ons',
  },
  {
    id: 'new-deal-03',
    label: 'Deal 03 — Beef Busters',
    image: '/menu-images/New%20Menu%20Items/IMG-20261021-WA0015%20copy.jpg',
    alt: 'Habibi Deal 03 menu poster with beef busters, fries, and drinks',
  },
  {
    id: 'new-all-time-deals',
    label: 'All Time Deals — New Poster',
    image: '/menu-images/New%20Menu%20Items/IMG-20261021-WA0014.jpg',
    alt: 'Habibi All Time Deals menu poster',
  },
];

export const DELIVERY_IMAGE =
  '/menu-images/New%20Menu%20Items/IMG-20261021-WA0016.jpg';

export const LOGO_ARTWORK = '/assets/IMG-20261021-WA0017.jpg';

export const ZESTRY_IMAGE =
  'https://i.postimg.cc/MpZHm8L9/WA-1792494728988.jpg';

export const GALLERY_IMAGES = [
  {
    src: '/gallery-images/IMG-20261020-WA0066.jpg',
    alt: 'Habibi Restaurant pizza and pasta dining experience',
  },
  {
    src: '/gallery-images/IMG-20261020-WA0063.jpg',
    alt: 'Habibi Restaurant food and guests',
  },
  {
    src: '/gallery-images/IMG-20261020-WA0065.jpg',
    alt: 'Habibi Restaurant burgers and dining',
  },
  {
    src: '/gallery-images/IMG-20261020-WA0064.jpg',
    alt: 'Habibi Restaurant burgers and food presentation',
  },
];

export type Branch = {
  name: string;
  address: string;
  phone: string;
  mapsUrl?: string;
};

export const BRANCHES: Branch[] = [
  {
    name: 'Habibi 2 — Upper Adda',
    address: 'Opposite Kashmir Surgical, CMH Road',
    phone: '03090003070',
    mapsUrl: 'https://share.google/A16z3hx2QIh01wCg3',
  },
  {
    name: 'Habibi 3 — Lower Plate',
    address: 'Neelum Road, near Red Fort Plate',
    phone: '03091113070',
    mapsUrl: 'https://share.google/oDoKKemznFR03yPet',
  },
  {
    name: 'Habibi 4 — Upper Chatter',
    address: 'Near Ali Akbar Awan School, Muzaffarabad',
    phone: '03097863070',
    mapsUrl: 'https://share.google/IgL9C7ZtUjax777WI',
  },
  {
    name: 'Habibi 5 — Mazmaan Khana',
    address: 'Near Superior College, Rubani Road',
    phone: '03040295000',
    mapsUrl: 'https://share.google/oqj7gQthI3prMa8kE',
  },
  {
    name: 'Zeestry',
    address: 'Near Upper Adda, Kashmir Surgical Hospital, CMH Road',
    phone: '03293375557',
  },
];

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/share/1DJANZodHM/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/habibirestaurantajk/',
};

export const HOME_REFERENCE =
  'https://images.pexels.com/photos/31970815/pexels-photo-31970815.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
