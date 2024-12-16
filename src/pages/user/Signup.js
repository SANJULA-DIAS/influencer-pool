import React, { useState } from 'react';
import { X, Upload, Plus, Trash2, PartyPopper } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('');
  const [showSocialMedia, setShowSocialMedia] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    profileName: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    aboutYou: '',
    profilePicture: null
  });

  const [socialMediaProfiles, setSocialMediaProfiles] = useState([
    {
      platform: '',
      username: '',
      followers: '',
      engagement: '',
      proof: null
    }
  ]);

  const platforms = [
    'Instagram',
    'TikTok',
    'YouTube',
    'Twitter',
    'Facebook',
    'LinkedIn'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        profilePicture: e.target.files[0]
      }));
    }
  };

  const handleSocialMediaChange = (index, field, value) => {
    const updatedProfiles = [...socialMediaProfiles];
    updatedProfiles[index] = {
      ...updatedProfiles[index],
      [field]: value
    };
    setSocialMediaProfiles(updatedProfiles);
  };

  const handleSocialMediaFileChange = (index, e) => {
    if (e.target.files && e.target.files[0]) {
      const updatedProfiles = [...socialMediaProfiles];
      updatedProfiles[index] = {
        ...updatedProfiles[index],
        proof: e.target.files[0]
      };
      setSocialMediaProfiles(updatedProfiles);
    }
  };

  const addSocialMediaProfile = () => {
    setSocialMediaProfiles([
      ...socialMediaProfiles,
      {
        platform: '',
        username: '',
        followers: '',
        engagement: '',
        proof: null
      }
    ]);
  };

  const removeSocialMediaProfile = (index) => {
    if (socialMediaProfiles.length > 1) {
      setSocialMediaProfiles(socialMediaProfiles.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userType === 'influencer' && step === 2) {
      if (!showSocialMedia) {
        setShowSocialMedia(true);
      } else {
        setStep(3);
      }
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8 relative">
        <button 
          onClick={() => navigate('/')}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <div className="mb-12">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => step === 3 ? null : setStep(1)}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-red-500 text-white' : 'bg-gray-200'} ${step === 3 ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <span className="text-sm">01</span>
            </button>
            <div className="flex-1 h-[2px] mx-4 bg-gray-200">
              <div className={`h-full ${step >= 2 ? 'bg-red-500' : ''}`} style={{width: step >= 2 ? '100%' : '0%'}} />
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-red-500 text-white' : 'bg-gray-200'}`}>
              <span className="text-sm">02</span>
            </div>
            <div className="flex-1 h-[2px] mx-4 bg-gray-200">
              <div className={`h-full ${step >= 3 ? 'bg-red-500' : ''}`} style={{width: step >= 3 ? '100%' : '0%'}} />
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-red-500 text-white' : 'bg-gray-200'}`}>
              <span className="text-sm">03</span>
            </div>
          </div>
        </div>

        {step === 1 && (
          <>
            <h2 className="text-2xl font-medium text-center text-gray-800 mb-8">First select the user type</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => {
                  setUserType('business');
                  setStep(2);
                }}
                className="p-6 border rounded-lg hover:border-red-500 transition-colors group"
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=500"
                  alt="Business"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-lg font-medium text-center text-gray-700 group-hover:text-red-500">
                  A brand or Business
                </p>
              </button>
              <button
                onClick={() => {
                  setUserType('influencer');
                  setStep(2);
                }}
                className="p-6 border rounded-lg hover:border-red-500 transition-colors group"
              >
                <img
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=500"
                  alt="Influencer"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-lg font-medium text-center text-gray-700 group-hover:text-red-500">
                  An Influencer
                </p>
              </button>
            </div>
          </>
        )}

        {step === 2 && userType === 'influencer' && !showSocialMedia && (
          <>
            <h2 className="text-2xl font-medium text-center text-gray-800 mb-8">Personal Information</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Profile Name</label>
                  <input
                    type="text"
                    name="profileName"
                    value={formData.profileName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">About You</label>
                <textarea
                  name="aboutYou"
                  value={formData.aboutYou}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  rows={4}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    id="profilePicture"
                    accept="image/*"
                  />
                  <label
                    htmlFor="profilePicture"
                    className="cursor-pointer flex items-center justify-center"
                  >
                    <Upload className="w-6 h-6 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-500">
                      {formData.profilePicture ? formData.profilePicture.name : 'Upload profile picture'}
                    </span>
                  </label>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/2 bg-gray-100 text-gray-800 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Next
                </button>
              </div>
            </form>
          </>
        )}

        {step === 2 && userType === 'influencer' && showSocialMedia && (
          <>
            <h2 className="text-2xl font-medium text-center text-gray-800 mb-8">Social Media Information</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {socialMediaProfiles.map((profile, index) => (
                <div key={index} className="p-6 border rounded-lg space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-800">Profile {index + 1}</h3>
                    {socialMediaProfiles.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeSocialMediaProfile(index)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash2 size={20} />
                      </button>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
                    <select
                      value={profile.platform}
                      onChange={(e) => handleSocialMediaChange(index, 'platform', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Platform</option>
                      {platforms.map((platform) => (
                        <option key={platform} value={platform}>{platform}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                    <input
                      type="text"
                      value={profile.username}
                      onChange={(e) => handleSocialMediaChange(index, 'username', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Follower Count</label>
                    <input
                      type="number"
                      value={profile.followers}
                      onChange={(e) => handleSocialMediaChange(index, 'followers', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Engagement Rate (%)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={profile.engagement}
                      onChange={(e) => handleSocialMediaChange(index, 'engagement', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Proof</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                      <input
                        type="file"
                        onChange={(e) => handleSocialMediaFileChange(index, e)}
                        className="hidden"
                        id={`proof-${index}`}
                        accept="image/*"
                      />
                      <label
                        htmlFor={`proof-${index}`}
                        className="cursor-pointer flex items-center justify-center"
                      >
                        <Upload className="w-6 h-6 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-500">
                          {profile.proof ? profile.proof.name : 'Upload screenshot'}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={addSocialMediaProfile}
                className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-red-500 hover:text-red-500 flex items-center justify-center"
              >
                <Plus size={20} className="mr-2" />
                Add Another Profile
              </button>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowSocialMedia(false)}
                  className="w-1/2 bg-gray-100 text-gray-800 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Next
                </button>
              </div>
            </form>
          </>
        )}

        {step === 2 && userType === 'business' && (
          <>
            <h2 className="text-2xl font-medium text-center text-gray-800 mb-2">Business Information</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/2 bg-gray-100 text-gray-800 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Next
                </button>
              </div>
            </form>
          </>
        )}

        {step === 3 && (
          <div className="text-center px-4">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <PartyPopper className="w-8 h-8 text-red-500" />
              </div>
            </div>

            <h2 className="text-2xl font-medium text-[#1e3a8a] mb-4">
              Welcome <span className="text-red-500">to Influencer Pool {formData.firstName}</span>
            </h2>

            {userType === 'business' ? (
              <p className="text-gray-600 mb-12 max-w-md mx-auto">
                Your account has been created successfully. Complete your profile by adding your company details, campaign goals, and budget to start collaborating with top influencers.
              </p>
            ) : (
              <p className="text-gray-600 mb-12 max-w-md mx-auto">
                Your account has been created successfully. Complete your profile by adding your services, pricing and availability to start collaborating with top brands.
              </p>
            )}

<button
  onClick={() => {
    if (userType === 'business') {
      navigate('/influencerdashboard');
    } else if (userType === 'influencer') {
      navigate('/dashboard');
    }
  }}
  className="w-full max-w-md mx-auto px-6 py-3 border-2 border-[#1e3a8a] text-[#1e3a8a] rounded-lg hover:bg-[#1e3a8a] hover:text-white transition-colors duration-300"
>
  Go To Dashboard
</button>

          </div>
        )}
      </div>
    </div>
  );
}

export default SignupForm;