export type TravelCategory = 'home' | 'origin' | 'hackathon' | 'travel';

export interface TravelPlace {
  name: string;
  lat: number;
  lng: number;
  category: TravelCategory;
  description?: string;
  photo?: string; // path relative to /public, e.g. "/photos/nyc.jpg"
}

export const categoryColors: Record<TravelCategory, string> = {
  home:     '#01579B',
  origin:   '#0288D1',
  hackathon:'#FF5733',
  travel:   '#C17D0A',
};

export const categoryLabels: Record<TravelCategory, string> = {
  home:     'Home / School',
  origin:   'Where I\'m From',
  hackathon:'Hackathon',
  travel:   'Travel',
};

export const travelPlaces: TravelPlace[] = [
  // Home & School
  { name: "Clarksburg, WV",          lat: 39.2806451, lng: -80.3445341, category: 'home',     description: "My hometown" },
  { name: "West Virginia University", lat: 39.6480359, lng: -79.9697147, category: 'home',     description: "Where I study Electrical & Computer Engineering" },
  { name: "Bridgeport, WV",          lat: 39.2864787, lng: -80.2561981, category: 'home' },

  // Origin
  { name: "Flint, MI",               lat: 43.0125274, lng: -83.6874562, category: 'origin',   description: "Where I was born" },

  // Hackathons
  { name: "Dartmouth College",        lat: 43.7044,    lng: -72.2887,    category: 'travel',    description: "Visited a friend" },
  { name: "Georgetown University",    lat: 38.9076089, lng: -77.0722585, category: 'hackathon', description: "HoyaHacks" },
  { name: "Carnegie Mellon University",lat:40.4432027, lng: -79.9428499, category: 'hackathon', description: "TartanHacks" },
  { name: "University of Maryland",   lat: 38.9869183, lng: -76.9425543, category: 'hackathon', description: "Bitcamp" },
  { name: "University of Delaware",   lat: 39.6809151, lng: -75.7523313, category: 'hackathon', description: "HenHacks" },
  { name: "The Ohio State University",lat: 40.0060889, lng: -83.0282624, category: 'hackathon', description: "HackOHI/O" },
  { name: "University of Pittsburgh", lat: 40.4444842, lng: -79.9612831, category: 'hackathon', description: "SteelHacks" },

  // Travel
  { name: "Philadelphia, PA",         lat: 39.9526,    lng: -75.1652,    category: 'travel' },
  { name: "New York City",            lat: 40.7127753, lng: -74.0059728, category: 'travel' },
  { name: "Toronto, Canada",          lat: 43.6548253, lng: -79.388447,  category: 'travel' },
  { name: "Niagara Falls",            lat: 43.0895577, lng: -79.0849436, category: 'travel' },
  { name: "Cincinnati, OH",           lat: 39.1031182, lng: -84.5120196, category: 'travel' },
  { name: "Deep Creek Lake, MD",      lat: 39.5116824, lng: -79.3155716, category: 'travel' },
  { name: "Charleston, WV",           lat: 38.3498195, lng: -81.6326234, category: 'travel' },
  { name: "University of Central Florida", lat: 28.6024274, lng: -81.2000599, category: 'travel' },
  { name: "Marshall University",      lat: 38.4236597, lng: -82.4247198, category: 'travel' },

  // International
  { name: "Ho Chi Minh City, Vietnam", lat: 10.8231, lng: 106.6297, category: 'travel', description: "Saigon — my favorite place I've visited" },

  // Acadia National Park area
  { name: "Acadia National Park",            lat: 44.3386,  lng: -68.2733, category: 'travel', description: "Bar Harbor, Maine" },
  { name: "Beehive Summit",                  lat: 44.3338,  lng: -68.1882, category: 'travel', description: "Beehive Trail hike in Acadia NP" },
  { name: "Sand Beach",                      lat: 44.3294,  lng: -68.1830, category: 'travel', description: "Acadia National Park, Mount Desert Island" },
  { name: "Blackwoods Campground",           lat: 44.3150,  lng: -68.2005, category: 'travel', description: "Acadia National Park" },
  { name: "Asticou Azalea Garden",           lat: 44.3080,  lng: -68.2875, category: 'travel', description: "Northeast Harbor, Mount Desert Island, Maine" },
];
