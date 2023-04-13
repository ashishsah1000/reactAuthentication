import React from "react";
import { getData } from "../../apis/dashboard/dashboard";

export default function Home() {
  getData();
  return <div>Welcome to home </div>;
}
