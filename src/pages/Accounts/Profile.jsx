import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { FaUser, FaShoppingBag, FaWallet, FaBell, FaHeart, FaMapMarkerAlt, FaCreditCard, FaLifeRing } from "react-icons/fa";
import { MdFamilyRestroom, MdPointOfSale } from "react-icons/md";
import "../../styles/Profile.css";

const Profile = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="max-w-md mx-auto p-6">
      {/* Profile Header */}
      <div className="bg-green-500 text-white rounded-xl p-4 flex items-center gap-4">
        <img src={user.profilePic || "https://via.placeholder.com/50"} alt="Profile" className="w-12 h-12 rounded-full" />
        <div>
          <h2 className="text-lg font-semibold">Hello, {user.name}</h2>
          <p className="text-sm">{user.email}</p>
        </div>
      </div>

      {/* Profile Options */}
      <div className="bg-white shadow-lg rounded-xl mt-4 p-4">
        <ul className="space-y-3">
          <ProfileItem icon={<FaUser />} label="Profile Info" to="/account" />
          <ProfileItem icon={<MdFamilyRestroom />} label="Family" to="/account/family" />
          <ProfileItem icon={<FaShoppingBag />} label="My Order" to="/account/orders" />
          <ProfileItem icon={<FaWallet />} label="My Wallet" to="/account/wallet" />
          <ProfileItem icon={<MdPointOfSale />} label="TFS+ Points" to="/points" />
          <ProfileItem icon={<FaBell />} label="Subscribe Products" to="/subscriptions" />
          <ProfileItem icon={<FaHeart />} label="My Wishlist" to="/account/wishlist" />
          <ProfileItem icon={<FaMapMarkerAlt />} label="Address" to="/account/address" />
          <ProfileItem icon={<FaCreditCard />} label="Payment Method" to="/payment-method" />
          <ProfileItem icon={<FaLifeRing />} label="Help and Support" to="/support" />

          {/* Logout Button */}
          <li className="flex items-center gap-3 text-red-500 cursor-pointer" onClick={handleLogout}>
            <FiLogOut className="text-lg" />
            <span>Log out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Reusable Profile Item with Link
const ProfileItem = ({ icon, label, to }) => (
  <li>
    <Link to={to} className="flex items-center gap-3 text-gray-700 cursor-pointer hover:text-green-600 transition">
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </Link>
  </li>
);

export default Profile;
