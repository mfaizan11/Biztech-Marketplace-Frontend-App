import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  User,
  Lock,
  Mail,
  Phone,
  Building2,
  Save,
  Eye,
  EyeOff,
} from "lucide-react";
import { authAPI } from "../services/api";
import { toast } from "sonner";

export const ProfilePage: React.FC = () => {
  const { user, setUserData } = useAuth();
  const [activeTab, setActiveTab] = useState<"profile" | "password">("profile");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    company: "",
    address: "",
  });
  useEffect(() => {
    if (user) {
      console.log("User data loaded into profile:", user); // Debug log
      setProfileData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "", // Ensure this matches the Type key
        company: user.company || "", // Ensure this matches the Type key
        address: user.address || "", // Ensure this matches the Type key
      });
    }
  }, [user]);

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Call the API
      const updatedUser = await authAPI.updateProfile(profileData);

      // Update Local Storage & Context so the UI reflects changes immediately
      // (Assuming you have access to setUserData from context, otherwise just localStorage)
      const token = localStorage.getItem("biztech_token");
      if (token) {
        setUserData(updatedUser, token);
      }

      toast.success("Profile updated successfully!");
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error: any) {
      console.error("Update failed", error);
      toast.error("Failed to update profile");
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords do not match");
      return;
    }
    console.log("Password updated");
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const getRoleLabel = (role?: string) => {
    if (!role) return "";
    return role.charAt(0).toUpperCase() + role.slice(1);
  };

  return (
    <div
      className="min-h-screen py-12 px-4"
      style={{ backgroundColor: "#F9FAFB" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 style={{ color: "#0D1B2A" }}>Profile Settings</h1>
          <p style={{ color: "#6B7280" }}>
            Manage your account information and security
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          {/* User Info Header */}
          <div className="p-6 border-b" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#2EC4B6" }}
              >
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 style={{ color: "#0D1B2A" }}>{user?.name}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className="text-xs px-3 py-1 rounded"
                    style={{ backgroundColor: "#DBEAFE", color: "#1E40AF" }}
                  >
                    {getRoleLabel(user?.role)}
                  </span>
                  <span className="text-sm" style={{ color: "#6B7280" }}>
                    {user?.email}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab("profile")}
                className={`py-4 border-b-2 transition-all ${activeTab === "profile" ? "" : "border-transparent"}`}
                style={{
                  borderColor:
                    activeTab === "profile" ? "#2EC4B6" : "transparent",
                  color: activeTab === "profile" ? "#2EC4B6" : "#6B7280",
                }}
              >
                Profile Information
              </button>
              <button
                onClick={() => setActiveTab("password")}
                className={`py-4 border-b-2 transition-all ${activeTab === "password" ? "" : "border-transparent"}`}
                style={{
                  borderColor:
                    activeTab === "password" ? "#2EC4B6" : "transparent",
                  color: activeTab === "password" ? "#2EC4B6" : "#6B7280",
                }}
              >
                Password & Security
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Profile Information Tab */}
            {activeTab === "profile" && (
              <form onSubmit={handleProfileSubmit}>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block text-sm mb-2"
                        style={{ color: "#374151" }}
                      >
                        Full Name *
                      </label>
                      <div className="relative">
                        <User
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                          style={{ color: "#9CA3AF" }}
                        />
                        <input
                          type="text"
                          required
                          value={profileData.name}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              name: e.target.value,
                            })
                          }
                          className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                          style={{ borderColor: "#E5E7EB", color: "#374151" }}
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-sm mb-2"
                        style={{ color: "#374151" }}
                      >
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                          style={{ color: "#9CA3AF" }}
                        />
                        <input
                          type="email"
                          required
                          value={profileData.email}
                          readOnly
                          disabled // Adds standard disabled styling
                          className="w-full pl-10 pr-4 py-3 border rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed focus:outline-none 
                            focus:ring-0 focus:border-gray-200"
                          style={{ borderColor: "#E5E7EB", color: "#374151" }}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-sm mb-2"
                        style={{ color: "#374151" }}
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                          style={{ color: "#9CA3AF" }}
                        />
                        <input
                          type="tel"
                          value={profileData.phone}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              phone: e.target.value,
                            })
                          }
                          className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                          style={{ borderColor: "#E5E7EB", color: "#374151" }}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-sm mb-2"
                        style={{ color: "#374151" }}
                      >
                        Company Name
                      </label>
                      <div className="relative">
                        <Building2
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                          style={{ color: "#9CA3AF" }}
                        />
                        <input
                          type="text"
                          value={profileData.company}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              company: e.target.value,
                            })
                          }
                          className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                          style={{ borderColor: "#E5E7EB", color: "#374151" }}
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label
                        className="block text-sm mb-2"
                        style={{ color: "#374151" }}
                      >
                        Address
                      </label>
                      <textarea
                        rows={3}
                        value={profileData.address}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            address: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                        style={{ borderColor: "#E5E7EB", color: "#374151" }}
                        placeholder="Your address"
                      />
                    </div>
                  </div>

                  {/* Success Message */}
                  {saveSuccess && (
                    <div
                      className="p-4 rounded-lg flex items-center gap-2"
                      style={{ backgroundColor: "#D1FAE5", color: "#065F46" }}
                    >
                      <Save className="w-5 h-5" />
                      <span>Profile updated successfully!</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-lg flex items-center gap-2 transition-all hover:opacity-90"
                      style={{ backgroundColor: "#2EC4B6", color: "white" }}
                    >
                      <Save className="w-5 h-5" />
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            )}

            {/* Password & Security Tab */}
            {activeTab === "password" && (
              <form onSubmit={handlePasswordSubmit}>
                <div className="space-y-6 max-w-xl">
                  <div>
                    <label
                      className="block text-sm mb-2"
                      style={{ color: "#374151" }}
                    >
                      Current Password *
                    </label>
                    <div className="relative">
                      <Lock
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                        style={{ color: "#9CA3AF" }}
                      />
                      <input
                        type={showCurrentPassword ? "text" : "password"}
                        required
                        value={passwordData.currentPassword}
                        onChange={(e) =>
                          setPasswordData({
                            ...passwordData,
                            currentPassword: e.target.value,
                          })
                        }
                        className="w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                        style={{ borderColor: "#E5E7EB", color: "#374151" }}
                        placeholder="Enter current password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowCurrentPassword(!showCurrentPassword)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                        style={{ color: "#9CA3AF" }}
                      >
                        {showCurrentPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div
                    className="border-t pt-6"
                    style={{ borderColor: "#E5E7EB" }}
                  >
                    <h4 className="mb-4" style={{ color: "#0D1B2A" }}>
                      New Password
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <label
                          className="block text-sm mb-2"
                          style={{ color: "#374151" }}
                        >
                          New Password *
                        </label>
                        <div className="relative">
                          <Lock
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                            style={{ color: "#9CA3AF" }}
                          />
                          <input
                            type={showNewPassword ? "text" : "password"}
                            required
                            value={passwordData.newPassword}
                            onChange={(e) =>
                              setPasswordData({
                                ...passwordData,
                                newPassword: e.target.value,
                              })
                            }
                            className="w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                            style={{ borderColor: "#E5E7EB", color: "#374151" }}
                            placeholder="Enter new password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2"
                            style={{ color: "#9CA3AF" }}
                          >
                            {showNewPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label
                          className="block text-sm mb-2"
                          style={{ color: "#374151" }}
                        >
                          Confirm New Password *
                        </label>
                        <div className="relative">
                          <Lock
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                            style={{ color: "#9CA3AF" }}
                          />
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            required
                            value={passwordData.confirmPassword}
                            onChange={(e) =>
                              setPasswordData({
                                ...passwordData,
                                confirmPassword: e.target.value,
                              })
                            }
                            className="w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                            style={{ borderColor: "#E5E7EB", color: "#374151" }}
                            placeholder="Confirm new password"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            className="absolute right-3 top-1/2 -translate-y-1/2"
                            style={{ color: "#9CA3AF" }}
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Password Requirements */}
                    <div
                      className="mt-4 p-3 rounded"
                      style={{ backgroundColor: "#F9FAFB" }}
                    >
                      <p className="text-xs mb-2" style={{ color: "#6B7280" }}>
                        Password must contain:
                      </p>
                      <ul
                        className="text-xs space-y-1"
                        style={{ color: "#6B7280" }}
                      >
                        <li>• At least 8 characters</li>
                        <li>• One uppercase letter</li>
                        <li>• One lowercase letter</li>
                        <li>• One number</li>
                      </ul>
                    </div>
                  </div>

                  {/* Success Message */}
                  {saveSuccess && (
                    <div
                      className="p-4 rounded-lg flex items-center gap-2"
                      style={{ backgroundColor: "#D1FAE5", color: "#065F46" }}
                    >
                      <Save className="w-5 h-5" />
                      <span>Password updated successfully!</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-lg flex items-center gap-2 transition-all hover:opacity-90"
                      style={{ backgroundColor: "#2EC4B6", color: "white" }}
                    >
                      <Save className="w-5 h-5" />
                      Update Password
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

