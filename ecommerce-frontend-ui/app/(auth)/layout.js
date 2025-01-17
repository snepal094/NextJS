export const metadata = {
  title: 'Auth',
  description: 'LogIn and Register page.',
};

const AuthLayout = ({ children }) => {
  return (
    <div className={`h-screen w-full flex justify-center items-center`}>
      {children}
      {
        //in this folder, children: login page (login/page.jsx) and register page (register/page.jsx)
        //layout.js is implemented in all pages of the folder. in this case, the folder is (auth)
        //code common in all pages of the parent folder are written here
        //this file is read before route is loaded
      }
    </div>
  );
};

export default AuthLayout;
