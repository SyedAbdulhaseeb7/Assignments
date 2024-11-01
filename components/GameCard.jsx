import React from 'react'

    const GameCard = ({ game }) => {
        return (
          <div className=" text-white  p-6 lg:mt-20 mt-0 lg:h-[80%] h-[60%] overflow-auto">
            <h2 className="text-3xl font-bold mb-4">{game.title}</h2>
            {game.smallImages && game.smallImages.length > 0 && (
              <div className="gallery mt-4 ">
                <hr />
                <div className='overflow-auto  no-scrollbar' >
                <div className="flex gap-2 mt-2 mb-2 ">
                  {game.smallImages.map((img, index) => (
                    <img key={index} src={img} alt={`Screenshot ${index + 1}`} width={400} className=" " />
                  ))}
                   {game.extraVideo?.map((video,index)=>(
          <video
            key={index}
            src={video}
            loop
            
    controls
           
            width={400}
          >
            Your browser does not support the video tag.
          </video>
        ))}
                </div>
           
                </div>
                <hr />    
              </div>
            )}
    
            <p className="mt-4 w-[50%]">{game.description}</p>
      
            <div className="mt-4">
              <p className="font-semibold">Release Date: <span className="text-gray-400">{game.releaseDate}</span></p>
              <p className="font-semibold">Developer: <span className="text-gray-400">{game.developer}</span></p>
              <p className="font-semibold">Publisher: <span className="text-gray-400">{game.publisher}</span></p>
              <p className="font-semibold">Reviews: <span className="text-yellow-400">{game.allReviews.rating} ({game.allReviews.count} reviews)</span></p>
              {game.price && <p className="font-semibold">Price: <span className="text-green-400">{game.price}</span></p>}
              {game.rating && <p className="font-semibold">Rating: <span className="text-red-400">{game.rating}</span></p>}
              {game.achievements && <p className="font-semibold">Achievements: <span className="text-yellow-400">{game.achievements}</span></p>}
            </div>
      
            {/* Tags */}
            <div className="tags mt-4">
              <h3 className="font-semibold">Tags:</h3>
              <ul className="flex flex-wrap gap-2 mt-2 overflow-auto no-scrollbar">
                {game.userDefinedTags.map((tag, index) => (
                  <li key={index} className="bg-zinc-900 px-2 py-1 rounded">{tag}</li>
                ))}
              </ul>
            </div>
      
            {/* Platforms */}
            {game.platforms && (
              <div className="platforms mt-4">
                <h3 className="font-semibold">Platforms:</h3>
                <ul className="flex gap-2  whitespace-nowrap overflow-auto no-scrollbar">
                  {game.platforms.map((platform, index) => (
                    <li key={index} className="bg-zinc-900 px-2 py-1 rounded">{platform}</li>
                  ))}
                </ul>
              </div>
            )}
      
            {/* Genres */}
            {game.genres && (
              <div className="genres mt-4">
                <h3 className="font-semibold">Genres:</h3>
                <ul className="flex gap-2 whitespace-nowrap no-scrollbar overflow-auto">
                  {game.genres.map((genre, index) => (
                    <li key={index} className="bg-zinc-900 px-2 py-1 rounded">{genre}</li>
                  ))}
                </ul>
              </div>
            )}
      
            {/* System Requirements */}
            {game.requirements && (
              <div className="requirements mt-4">
                <h3 className="font-semibold">System Requirements:</h3>
                <div className="mt-2">
                  <h4 className="font-semibold">Minimum</h4>
                  <ul className="bg-zinc-900 overflow-auto no-scrollbar">
                    {Object.entries(game.requirements.minimum).map(([key, value]) => (
                      <li key={key}>{key}: {value}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold mt-2">Recommended</h4>
                  <ul className="text-gray-400 whitespace-nowrap no-scrollbar overflow-auto">
                    {Object.entries(game.requirements.recommended).map(([key, value]) => (
                      <li key={key}>{key}: {value}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
      
            {/* Languages */}
            {game.languages && (
              <div className="languages mt-4">
                <h3 className="font-semibold">Supported Languages:</h3>
                <ul className="flex gap-2 mt-2 whitespace-nowrap no-scrollbar overflow-auto">
                  {game.languages.map((language, index) => (
                    <li key={index} className="bg-zinc-900 px-2 py-1 rounded ">{language}</li>
                  ))}
                </ul>
              </div>
            )}
      
            {/* Small Images */}
         
          </div>
        );
      };

export default GameCard