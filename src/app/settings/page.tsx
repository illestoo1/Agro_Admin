'use client'
import { useState } from "react";
import { cn } from "@/lib/utils";

const settingsTabs = [
  { id: "platform", label: "Platform Settings" },
  { id: "roles", label: "Role Permissions" },
  { id: "api", label: "API Integrations" },
  { id: "notifications", label: "Notifications Preferences" },
  { id: "resetPassword", label: "Reset Password" }
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("platform");

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      
      <div className="flex space-x-4 border-b pb-2">
        {settingsTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-4 py-2 rounded-t-lg border-b-2 transition-all",
              activeTab === tab.id ? "border-blue-500 text-blue-600" : "border-transparent text-gray-600 hover:text-gray-800"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {activeTab === "platform" && <PlatformSettings />}
        {activeTab === "roles" && <RolePermissions />}
        {activeTab === "api" && <APIIntegrations />}
        {activeTab === "notifications" && <NotificationPreferences />}
        {activeTab === "resetPassword" && <ResetPassword />}
      </div>
    </div>
  );
}

function PlatformSettings() {
  return <div>Change site-wide configurations like currency, tax rates, and delivery policies.</div>;
}

function RolePermissions() {
  return <div>Assign permissions to admins and staff.</div>;
}

function APIIntegrations() {
  return <div>Manage logistics company APIs for order tracking and updates.</div>;
}

function NotificationPreferences() {
  return <div>Set up automated alerts and email preferences.</div>;
}

function ResetPassword() {
  return <div>Reset password functionality goes here.</div>;
}
