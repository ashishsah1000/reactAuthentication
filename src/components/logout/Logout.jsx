import React from "react";
import { logout } from "../../apis/authentication/authentication";

export default function Logout() {
  logout();
  return <div>Logged out successfully</div>;
}
