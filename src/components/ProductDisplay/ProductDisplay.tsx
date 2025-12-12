import React from "react";
import { ProductDisplayProps } from "../../types/index.ts";

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children,
}) => {
  const { id, name, price, description, imageUrl, inStock } = product;

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-white shadow rounded-lg border border-gray-200">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={name}
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded"
        />
      )}

      <div className="flex-1">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-md font-medium text-gray-900">${price.toFixed(2)}</p>

        {showDescription && (
          <p className="mt-2 text-sm text-gray-700">{description}</p>
        )}

        {showStockStatus && (
          <p
            className={`mt-1 text-sm font-medium ${
              inStock ? "text-green-600" : "text-red-600"
            }`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </p>
        )}

        {children && (
          <div className="mt-2 text-sm text-gray-500">{children}</div>
        )}
      </div>

      {onAddToCart && (
        <button
          type="button"
          disabled={!inStock}
          onClick={() => onAddToCart(id)}
          className={`self-start px-3 py-1 text-sm font-medium rounded ${
            inStock
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
