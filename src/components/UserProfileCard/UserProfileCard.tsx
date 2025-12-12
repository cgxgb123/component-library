import React from "react";
import { UserProfileCardProps } from "../../types/index.ts";

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = false,
  showRole = false,
  onEdit,
  children,
}) => {
  const { id, name, email, role, avatarUrl } = user;

  return (
    <div className="flex gap-4 p-4 bg-white shadow rounded-lg border border-gray-200">
      {avatarUrl && (
        <img
          src={avatarUrl}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
      )}

      <div className="flex-1">
        <h2 className="text-lg font-semibold">{name}</h2>

        {showEmail && (
          <p className="text-sm text-gray-600" data-testid="user-email">
            {email}
          </p>
        )}

        {showRole && (
          <p className="text-sm text-gray-600" data-testid="user-role">
            {role}
          </p>
        )}

        {children && <div className="mt-2">{children}</div>}
      </div>

      {onEdit && (
        <button
          type="button"
          onClick={() => onEdit(id)}
          className="self-start px-3 py-1 text-sm font-medium rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};
