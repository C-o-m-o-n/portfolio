import { useState } from 'react';
import { useRouter } from 'next/router';

export default function OptionCards() {
  const [selectedOption, setSelectedOption] = useState(String || null);
  const router = useRouter();

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    if (selectedOption) {
      router.push('/next-page'); // Replace with your next page route
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {['Option 1', 'Option 2', 'Option 3', 'Option 4'].map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`cursor-pointer p-6 bg-white rounded-lg shadow-md hover:bg-blue-100 ${
              selectedOption === option ? 'border-2 border-blue-500' : ''
            }`}
          >
            {option}
          </div>
        ))}
      </div>
      <button
        onClick={handleNextClick}
        disabled={!selectedOption}
        className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${
          !selectedOption ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
        }`}
      >
        Next
      </button>
    </div>
  );
}
