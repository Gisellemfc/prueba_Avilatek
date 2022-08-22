import React from 'react';

function Nav() {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex-none">
        <img src="./back.png" />
      </div>
      <div className="flex flex-row gap-3">
        <img src="./home.png" />
        <img src="./logout.png" />
      </div>
    </div>
  );
}

export default Nav;
