import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { GirlProfile } from '../types';
import { MapPin, Star, Video, Heart } from 'lucide-react';

// Mock data for girl profiles
const mockProfiles: GirlProfile[] = [
  {
    id: '1',
    name: 'Priya',
    age: 23,
    city: 'Mumbai',
    bio: 'Love dancing and music. Let\'s have fun conversations!',
    photo_url: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: true,
    rating: 4.8
  },
  {
    id: '2',
    name: 'Ananya',
    age: 25,
    city: 'Delhi',
    bio: 'Fashion enthusiast and travel lover. Ready to chat!',
    photo_url: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: true,
    rating: 4.9
  },
  {
    id: '3',
    name: 'Kavya',
    age: 22,
    city: 'Bangalore',
    bio: 'Tech geek by day, fun companion by night!',
    photo_url: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: false,
    rating: 4.7
  },
  {
    id: '4',
    name: 'Riya',
    age: 24,
    city: 'Chennai',
    bio: 'Artist and dreamer. Let\'s create beautiful memories!',
    photo_url: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: true,
    rating: 4.6
  },
  {
    id: '5',
    name: 'Sneha',
    age: 26,
    city: 'Pune',
    bio: 'Yoga instructor and wellness coach. Positive vibes only!',
    photo_url: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: true,
    rating: 4.9
  },
  {
    id: '6',
    name: 'Ishita',
    age: 21,
    city: 'Kolkata',
    bio: 'Literature student with a passion for deep conversations.',
    photo_url: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: false,
    rating: 4.8
  },
  {
    id: '7',
    name: 'Meera',
    age: 25,
    city: 'Hyderabad',
    bio: 'Classical dancer and music lover. Let\'s share our passions!',
    photo_url: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: true,
    rating: 4.7
  },
  {
    id: '8',
    name: 'Aisha',
    age: 23,
    city: 'Jaipur',
    bio: 'Fashion designer with a love for creativity and art.',
    photo_url: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: true,
    rating: 4.9
  },
  {
    id: '9',
    name: 'Nisha',
    age: 24,
    city: 'Ahmedabad',
    bio: 'Photographer capturing life\'s beautiful moments.',
    photo_url: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: false,
    rating: 4.6
  },
  {
    id: '10',
    name: 'Tanya',
    age: 22,
    city: 'Lucknow',
    bio: 'Medical student with a caring heart and bright smile.',
    photo_url: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: true,
    rating: 4.8
  },
  {
    id: '11',
    name: 'Simran',
    age: 26,
    city: 'Chandigarh',
    bio: 'Fitness enthusiast and nutritionist. Health is wealth!',
    photo_url: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: true,
    rating: 4.7
  },
  {
    id: '12',
    name: 'Pooja',
    age: 23,
    city: 'Indore',
    bio: 'Chef and food blogger. Let\'s talk about delicious recipes!',
    photo_url: 'https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: false,
    rating: 4.5
  },
  {
    id: '13',
    name: 'Rhea',
    age: 25,
    city: 'Goa',
    bio: 'Beach lover and adventure seeker. Life is an adventure!',
    photo_url: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: true,
    rating: 4.9
  },
  {
    id: '14',
    name: 'Divya',
    age: 24,
    city: 'Kochi',
    bio: 'Software engineer with a passion for innovation.',
    photo_url: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: true,
    rating: 4.8
  },
  {
    id: '15',
    name: 'Sakshi',
    age: 22,
    city: 'Nagpur',
    bio: 'Psychology student interested in human behavior.',
    photo_url: 'https://images.pexels.com/photos/1844012/pexels-photo-1844012.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: false,
    rating: 4.6
  },
  {
    id: '16',
    name: 'Aditi',
    age: 26,
    city: 'Surat',
    bio: 'Interior designer creating beautiful spaces.',
    photo_url: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: true,
    rating: 4.7
  },
  {
    id: '17',
    name: 'Neha',
    age: 23,
    city: 'Vadodara',
    bio: 'Marketing professional with creative ideas.',
    photo_url: 'https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: true,
    rating: 4.8
  },
  {
    id: '18',
    name: 'Shreya',
    age: 25,
    city: 'Bhopal',
    bio: 'Journalist covering stories that matter.',
    photo_url: 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: false,
    rating: 4.9
  },
  {
    id: '19',
    name: 'Kritika',
    age: 24,
    city: 'Patna',
    bio: 'Teacher spreading knowledge and positivity.',
    photo_url: 'https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: true,
    rating: 4.7
  },
  {
    id: '20',
    name: 'Manisha',
    age: 22,
    city: 'Ranchi',
    bio: 'Environmental science student caring for nature.',
    photo_url: 'https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: true,
    rating: 4.6
  },
  {
    id: '21',
    name: 'Deepika',
    age: 27,
    city: 'Thiruvananthapuram',
    bio: 'Ayurveda practitioner promoting holistic wellness.',
    photo_url: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: false,
    rating: 4.8
  },
  {
    id: '22',
    name: 'Pallavi',
    age: 23,
    city: 'Mysore',
    bio: 'Graphic designer with an eye for aesthetics.',
    photo_url: 'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: true,
    rating: 4.7
  },
  {
    id: '23',
    name: 'Swati',
    age: 25,
    city: 'Coimbatore',
    bio: 'Textile engineer with a passion for fabrics.',
    photo_url: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: true,
    rating: 4.5
  },
  {
    id: '24',
    name: 'Rashmi',
    age: 24,
    city: 'Dehradun',
    bio: 'Mountain lover and trekking enthusiast.',
    photo_url: 'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: false,
    rating: 4.9
  },
  {
    id: '25',
    name: 'Vidya',
    age: 26,
    city: 'Mangalore',
    bio: 'Banking professional with financial expertise.',
    photo_url: 'https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: true,
    rating: 4.6
  },
  {
    id: '26',
    name: 'Anjali',
    age: 23,
    city: 'Jalandhar',
    bio: 'Event planner creating memorable experiences.',
    photo_url: 'https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: true,
    rating: 4.8
  },
  {
    id: '27',
    name: 'Priyanka',
    age: 25,
    city: 'Agra',
    bio: 'History enthusiast and tour guide.',
    photo_url: 'https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: false,
    rating: 4.7
  },
  {
    id: '28',
    name: 'Sunita',
    age: 24,
    city: 'Jodhpur',
    bio: 'Fashion stylist with a royal touch.',
    photo_url: 'https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: true,
    rating: 4.9
  },
  {
    id: '29',
    name: 'Kavita',
    age: 22,
    city: 'Udaipur',
    bio: 'Handicraft artist preserving traditional arts.',
    photo_url: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: true,
    rating: 4.6
  },
  {
    id: '30',
    name: 'Shweta',
    age: 26,
    city: 'Shimla',
    bio: 'Hotel management graduate with hospitality skills.',
    photo_url: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_online: false,
    rating: 4.8
  }
];

export function HomePage() {
  const [profiles, setProfiles] = useState<GirlProfile[]>([]);
  const [filter, setFilter] = useState<'all' | 'online'>('all');
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading profiles
    setProfiles(mockProfiles);
  }, []);

  const filteredProfiles = filter === 'online' 
    ? profiles.filter(profile => profile.is_online)
    : profiles;

  const handleSelectGirl = (girlId: string) => {
    navigate(`/plans/${girlId}`);
  };

  return (
    <Layout showHeader={true}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Choose Your Perfect Match
          </h1>
          <p className="text-purple-200 text-sm md:text-lg px-4">
            Connect with verified profiles for amazing video call experiences
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-full p-1 border border-purple-500/20">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'text-purple-200 hover:text-white'
              } text-sm md:text-base`}
            >
              All Girls
            </button>
            <button
              onClick={() => setFilter('online')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'online'
                  ? 'bg-purple-600 text-white'
                  : 'text-purple-200 hover:text-white'
              } text-sm md:text-base`}
            >
              Online Now
            </button>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredProfiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all transform hover:scale-105 shadow-xl"
            >
              <div className="relative">
                <img
                  src={profile.photo_url}
                  alt={profile.name}
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  {profile.is_online ? (
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
                      Online
                    </div>
                  ) : (
                    <div className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Offline
                    </div>
                  )}
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                    <Star className="w-3 h-3 mr-1 text-yellow-400" />
                    {profile.rating}
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">{profile.name}</h3>
                    <p className="text-purple-200 text-sm md:text-base">{profile.age} years old</p>
                  </div>
                  <Heart className="w-6 h-6 text-purple-300 hover:text-pink-400 cursor-pointer transition-colors" />
                </div>

                <div className="flex items-center text-purple-200 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{profile.city}</span>
                </div>

                <p className="text-purple-100 text-sm mb-4 line-clamp-2">
                  {profile.bio}
                </p>

                <button
                  onClick={() => handleSelectGirl(profile.id)}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-2 md:py-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center text-sm md:text-base"
                >
                  <Video className="w-5 h-5 mr-2" />
                  Select & Call
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProfiles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-purple-200 text-base md:text-lg">No profiles found matching your filter.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}