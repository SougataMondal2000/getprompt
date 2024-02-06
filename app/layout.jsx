import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "getPromts",
  description: "get useful promts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="text-white">
        <div className="">
          <div></div>
        </div>
        <main className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
