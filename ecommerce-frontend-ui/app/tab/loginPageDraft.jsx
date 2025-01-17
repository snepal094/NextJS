import React from 'react';

const LogIn = () => {
  return (
    <div
      className="text-[2rem] text-red-800 uppercase sm:hidden bg-slate-600"
      style={{ fontFamily: 'times-new-roman' }}
    >
      {
        //an example of styling using tailwind
        // className="text-[2rem]"
        // className="text-5xl"
        //tailwind uses predefined utility classes
        //sm:hidden==> sm: up until 640px, so div is hidden when screen>640px
        //to make your website responsive, start designing for small screens, then move on to bigger screens
        //can use style={{}} along with tailwind, it can overwrite
      }
      LogIn
    </div>
  );
};

export default LogIn;
