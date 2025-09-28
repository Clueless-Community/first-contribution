import React, { useState } from "react";
import { Avatar, ChakraProvider } from "@chakra-ui/react";

const ContributorCard = (props) => {
  const [avatarError, setAvatarError] = useState(false);
  
  const width ={
    width: '100%',
  }

  // Multiple fallback avatar sources
  const getAvatarSrc = () => {
    if (avatarError) {
      // Use initials-based avatar as ultimate fallback
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(props.name)}&background=0D8ABC&color=fff&size=128&bold=true`;
    }
    return `https://avatars.dicebear.com/api/bottts/${encodeURIComponent(props.name)}.svg`;
  };

  const handleAvatarError = () => {
    setAvatarError(true);
  };

  return (
    <>
        <div 
          onClick={() => window.open(props.github, '_blank')} 
          className="p-3 w-full cursor-pointer group transform transition-all duration-300 hover:scale-[1.02]" 
          style={props.style}
        >
          <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden" style={width}>
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-16 relative">
              <div className="absolute -bottom-8 left-6">
                <ChakraProvider>
                  <div className="ring-4 ring-white dark:ring-gray-800 rounded-full">
                    <Avatar 
                      size="lg" 
                      name={props.name} 
                      src={getAvatarSrc()}
                      onError={handleAvatarError}
                      loading="eager"
                    />
                  </div>
                </ChakraProvider>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="pt-12 pb-6 px-6">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {props.name}
                </h2>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                  {props.branch}
                </p>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3v-8h6v8h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd"/>
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 leading-5">
                      {props.college}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 mr-3">
                    <svg className="w-3 h-3 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                  </span>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Class of {props.year}
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 pt-2 border-t border-gray-100 dark:border-gray-700">
                <a 
                  href={props.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200 group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                {props.linkedin && (
                  <a 
                    href={props.linkedin} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-600 transition-all duration-200 group"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg
                      className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default ContributorCard;
