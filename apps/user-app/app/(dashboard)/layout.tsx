"use client";

import { usePathname, useRouter } from "next/navigation";
import {ReactNode} from "react";
import { SidebarItem } from "../../components/SidebarItem";
// SidebarItem Component
// export const SidebarItem= ({
//   href,
//   title,
//   icon,
// }: {
//   href: string;
//   title: string;
//   icon: ReactNode;
// }) => {
//   const pathname = usePathname();
//   const router = useRouter();
//   const selected = pathname === href;

//   return (
//     <div
//       className={`flex items-center cursor-pointer p-3 pl-8 rounded-lg transition-colors duration-200 ${
//         selected ? "bg-[#e0e0f7] text-[#6a51a6] shadow-md" : "text-slate-600 hover:bg-slate-200"
//       }`}
//       onClick={() => router.push(href)}
//     >
//       <div className="pr-3">{icon}</div>
//       <div className="font-semibold">{title}</div>
//     </div>
//   );
// };

// Layout Component with Sidebar
export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div className="flex">
      <div className="w-72 bg-white border-r border-slate-300 min-h-screen pt-20 px-4">
        <div className="space-y-2">
          <SidebarItem href="/dashboard" icon={<HomeIcon />} title="Home" />
          <SidebarItem href="/transfer" icon={<TransferIcon />} title="Transfer" />
          <SidebarItem href="/transactions" icon={<TransactionsIcon />} title="Transactions" />
          <SidebarItem href="/p2p" icon={<SendMoney />} title="P2P Transfer" />
        </div>
      </div>
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}

// Icon Components
function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12L11.204 3.045c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}

function TransferIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
      />
    </svg>
  );
}

function TransactionsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function SendMoney() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5L19.5 4.5m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}
