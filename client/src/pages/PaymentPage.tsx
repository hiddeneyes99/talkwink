import React from 'react';
import { useLocation, useParams } from 'wouter';
import { Layout } from '../components/Layout';
import { ArrowLeft, CreditCard, Shield, Lock } from 'lucide-react';

export function PaymentPage() {
  const { girlId, planId } = useParams();
  const [, setLocation] = useLocation();

  return (
    <Layout showHeader={true}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => setLocation(`/plans/${girlId}`)}
          className="flex items-center text-purple-300 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Plans
        </button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Payment Gateway</h1>
          <p className="text-purple-200">Complete your payment to start your video call</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20">
          <div className="text-center mb-8">
            <CreditCard className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Payment Integration</h2>
            <p className="text-purple-200">
              This page will be integrated with your preferred payment gateway
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-medium mb-1">Secure Payment</h3>
              <p className="text-purple-200 text-sm">256-bit SSL encryption</p>
            </div>
            <div className="text-center">
              <Lock className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-medium mb-1">Privacy Protected</h3>
              <p className="text-purple-200 text-sm">Your data is safe with us</p>
            </div>
            <div className="text-center">
              <CreditCard className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-medium mb-1">Multiple Options</h3>
              <p className="text-purple-200 text-sm">Cards, UPI, Net Banking</p>
            </div>
          </div>

          <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-white font-bold mb-4">Payment Methods Available:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-purple-200 text-sm">Credit Card</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-purple-200 text-sm">Debit Card</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-purple-200 text-sm">UPI</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-purple-200 text-sm">Net Banking</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-purple-200 mb-4">
              Selected Plan ID: <span className="text-white font-medium">{planId}</span>
            </p>
            <p className="text-purple-200 mb-6">
              Girl ID: <span className="text-white font-medium">{girlId}</span>
            </p>
            
            <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-4 mb-6">
              <p className="text-yellow-200 text-sm">
                <strong>Note:</strong> Payment gateway integration will be implemented based on your requirements. 
                Popular options include Razorpay, PayU, or Stripe for Indian market.
              </p>
            </div>

            <button
              onClick={() => alert('Payment gateway will be integrated here')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 text-lg"
            >
              Proceed to Payment Gateway
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}