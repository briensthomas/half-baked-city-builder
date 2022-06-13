import React from 'react';

export default function City({ waterfrontId, skylineId, castleId }) {
  return (
    <div className="city">
      {/* this component should take 3 props: waterfrontId, skylineId, and castleId */}
      {/* use these 3 ids in img tags load appropriate images that live in the public directory */}
      <img src={`../waterfront-${waterfrontId}`} />
      <img src={`../skyline-${skylineId}`} />
      <img src={`../castle-${castleId}`} />

    </div>
  );
}
