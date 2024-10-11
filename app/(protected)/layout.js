import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />{" "}
          <div className="min-h-screen p-4 bg-base-300">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
