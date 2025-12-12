import "./App.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";
import { Product, User } from "./types";

const user: User = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Software Engineer",
  avatarUrl: "https://img.icons8.com/nolan/64/user-default.png",
};

const product: Product = {
  id: "1",
  name: "Wireless Headphones",
  price: 199.99,
  description: "High-quality wireless headphones with noise cancellation.",
  imageUrl:
    "https://media.istockphoto.com/id/1246138278/photo/silver-metallic-white-wireless-headphones-in-the-air-isolated-on-white-background-music.jpg?s=612x612&w=0&k=20&c=Xs150nT8O2jHQJ3tSA221BKFy--xHwfLd_kVYVGUgTY=",
  inStock: true,
};

const App = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems((prev) => [...prev, productId]);
    setShowAlert(true);
  };

  const handleEditUser = (userId: string) => {
    alert(`Editing user ${userId}`);
  };

  return (
    <div className="p-4 space-y-6">
      {/* React Logo */}
      <div className="flex justify-center">
        <img
          src={reactLogo}
          className="h-20 animate-spin-slow"
          alt="React logo"
        />
      </div>

      {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart!"
          onClose={() => setShowAlert(false)}
        >
          <p className="text-sm">
            Cart items: {cartItems.length}. You can proceed to checkout.
          </p>
        </AlertBox>
      )}

      <UserProfileCard user={user} showEmail showRole onEdit={handleEditUser}>
        <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
      </UserProfileCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProductDisplay
          product={product}
          showDescription
          showStockStatus
          onAddToCart={handleAddToCart}
        >
          <div className="text-sm text-gray-500">Free shipping available</div>
        </ProductDisplay>
      </div>
    </div>
  );
};

export default App;
