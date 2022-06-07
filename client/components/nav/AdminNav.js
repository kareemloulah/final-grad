import { useState, useEffect } from "react";
import Link from "next/link";

const AdminNav = () => {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  return (
    <div className="nav flex-column nav-pills">
      <Link href="/admin">
        <a className={`nav-link ${current === "/admin" && "active"}`}>
          Dashboard
        </a>
      </Link>
      <Link href="/admin/course/create">
        <a
          className={`nav-link ${
            current === "/admin/course/create" && "active"
          }`}
        >
          Course Create
        </a>
      </Link>

      <Link href="/admin/revenue">
        <a className={`nav-link ${current === "/admin/revenue" && "active"}`}>
          Revenue
        </a>
      </Link>
    </div>
  );
};

export default AdminNav;
