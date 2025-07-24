import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { GirlProfile, Plan } from '../types';
import { Clock, Star, Crown, Check, ArrowLeft } from 'lucide-react';

// Mock data for plans
const mockPlans: Plan[] = [
  {
    id: '1',
    name: 'Quick Chat',
    duration: '10 minutes',
    price: 199,
    features: ['HD Video Call', 'Basic Chat Features', 'Standard Support'],
    is_premium: false
  },
  {
    id: '2',
    name: 'Extended Talk',
    duration: '20 minutes',
    price: 345,
    features: ['HD Video Call', 'Extended Chat Time', 'Priority Support', 'Screen Recording'],
    is_premium: false
  },
  {
    id: '3',
    name: 'Deep Connection',
    duration: '30 minutes',
    price: 499,
    features: ['HD Video Call', 'Long Conversation', 'Priority Support', 'Screen Recording', 'Photo Sharing'],
    is_premium: false
  },
  {
    id: '4',
    name: 'Premium VIP',
    duration: '1 month',
    price: 2499,
    features: ['Unlimited Video Calls', 'All Premium Features', '24/7 VIP Support', 'Exclusive Content', 'Priority Matching', 'Special Gifts'],
    is_premium: true
  }
];

// Mock girl profiles (same as HomePage)
const mockGirlProfile: GirlProfile = {
  id: '1',
  name: 'Priya',
  age: 23,
  city: 'Mumbai',
  bio: 'Love dancing and music. Let\'s have fun conversations!',
  photo_url: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
  is_online: true,
  rating: 4.8
};

export function PlansPage() {
  const { girlId } = useParams<{ girlId: string }>();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [girl, setGirl] = useState<GirlProfile | null>(null);
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    // Simulate loading girl profile and plans
    setGirl(mockGirlProfile);
    setPlans(mockPlans);
  }, [girlId]);

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleProceedToPayment = () => {
    if (selectedPlan) {
      navigate(`/payment/${girlId}/${selectedPlan}`);
    }
  };

  if (!girl) {
    return (
      <Layout showHeader={true}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-white text-xl">Loading...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout showHeader={true}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/home')}
          className="flex items-center text-purple-300 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Profiles
        </button>

        {/* Girl Profile Header */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-purple-500/20">
          <div className="flex items-center space-x-6">
            <img
              src={girl.photo_url}
              alt={girl.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-purple-300"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold text-white">{girl.name}</h1>
                {girl.is_online && (
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                    Online Now
                  </div>
                )}
              </div>
              <p className="text-purple-200 mb-2">{girl.age} years old • {girl.city}</p>
              <div className="flex items-center text-purple-200 mb-2">
                <Star className="w-4 h-4 mr-1 text-yellow-400" />
                <span>{girl.rating} rating</span>
              </div>
              <p className="text-purple-100">{girl.bio}</p>
            </div>
          </div>
        </div>

        {/* Plans Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
          <p className="text-purple-200">Select the perfect plan for your conversation with {girl.name}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border transition-all cursor-pointer transform hover:scale-105 ${
                selectedPlan === plan.id
                  ? 'border-purple-400 ring-2 ring-purple-400/50'
                  : 'border-purple-500/20 hover:border-purple-400/40'
              } ${plan.is_premium ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/20' : ''}`}
              onClick={() => handlePlanSelect(plan.id)}
            >
              {plan.is_premium && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <Crown className="w-3 h-3 mr-1" />
                    PREMIUM
                  </div>
                </div>
              )}

              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center text-purple-200 mb-3">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{plan.duration}</span>
                </div>
                <div className="text-3xl font-bold text-white">
                  ₹{plan.price}
                  {plan.is_premium && <span className="text-lg text-purple-200">/month</span>}
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-purple-100 text-sm">
                    <Check className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                {selectedPlan === plan.id ? (
                  <div className="bg-purple-600 text-white py-2 px-4 rounded-lg font-medium">
                    Selected
                  </div>
                ) : (
                  <div className="text-purple-300 text-sm">Click to select</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Proceed Button */}
        {selectedPlan && (
          <div className="text-center">
            <button
              onClick={handleProceedToPayment}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 text-lg"
            >
              Proceed to Payment
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}