"use client";
import React from "react";
import { Link } from "react-router-dom";
import {
  Gauge,
  Settings,
  LogOut,
  FolderDot,
  ListChecks,
  UsersRound,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Separator } from "@/components/ui/separator";
import { useLocation } from "react-router-dom";
import { Drawer } from "vaul";
import { Skeleton } from "@/components/ui/skeleton";
import Text from "@/components/text";

interface ISidenav {
  children: React.ReactNode;
  className?: string;
}

interface ISidebarContent {
  role: "admin" | "project manager" | "team member";
}

const Sidebar = ({ children, className }: ISidenav) => {
  const pathname = useLocation();
  const currentPath = pathname.pathname;

  const baseClass =
    "flex items-center gap-x-3 border-[1px] p-2 rounded cursor-pointer transition-all ease-linear duration-150 my-2";
  const hoverClass =
    "hover:border-[1px] hover:border-[#e5e7eb] hover:bg-slate-50";
  const sidebarItemsClass = `${baseClass} border-transparent ${hoverClass}`;
  const currentPathClass = `${baseClass} bg-slate-50`;

  const SidebarContent = ({ role }: ISidebarContent) => {
    let resolvedPath = "";

    role == "admin"
      ? (resolvedPath = "/admin")
      : role == "project manager"
      ? (resolvedPath = "/manager")
      : (resolvedPath = "");

    return (
      <div className="border-r-[1px] flex flex-col justify-between h-full p-3">
        <section className="-mx-1">
          <section className="flex items-center gap-x-2 mt-3 mb-4 mx-1">
            <img src={"/logo.svg"} width={24} height={24} alt="Task flow" />
            <h1 className="font-bold text-[18px]">Task flow</h1>
          </section>
          <Link
            className={
              currentPath.includes("dashboard")
                ? currentPathClass
                : sidebarItemsClass
            }
            to={`${resolvedPath}/dashboard`}
          >
            <Gauge strokeWidth={1.5} size={20} />
            <Text>Dashboard</Text>
          </Link>
          <Link
            className={
              currentPath.includes("projects")
                ? currentPathClass
                : sidebarItemsClass
            }
            to={`${resolvedPath}/projects`}
          >
            <FolderDot strokeWidth={1.5} size={20} />
            <Text>Projects</Text>
          </Link>
          <Link
            className={
              currentPath.includes("tasks")
                ? currentPathClass
                : sidebarItemsClass
            }
            to={`${resolvedPath}/tasks`}
          >
            <ListChecks strokeWidth={1.5} size={20} />
            <Text>Tasks</Text>
          </Link>
          <Link
            className={
              currentPath.includes("users")
                ? currentPathClass
                : sidebarItemsClass
            }
            to={`${resolvedPath}/members`}
          >
            <UsersRound strokeWidth={1.5} size={20} />
            <Text>Members</Text>
          </Link>
        </section>

        <section>
          <section className="bottom">
            <Link
              className={
                currentPath.includes("settings")
                  ? currentPathClass
                  : sidebarItemsClass
              }
              to={"#"}
            >
              <Settings strokeWidth={1.5} size={20} />
              <Text>Settings</Text>
            </Link>
            <section className={sidebarItemsClass}>
              <LogOut strokeWidth={1.5} size={20} />
              <Text>Logout</Text>
            </section>
          </section>

          <section className="mt-5">
            <Separator />

            {false ? (
              <Skeleton className="w-full flex items-center gap-x-3 p-2  my-2">
                <div>
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[250px]" />
                </div>
              </Skeleton>
            ) : (
              <div className="w-full flex items-center gap-x-3 p-2 cursor-pointer">
                <img
                  src={"https://api.dicebear.com/7.x/micah/svg?seed=emmysoft"}
                  width={35}
                  height={35}
                  alt="User profile"
                  className="rounded-full"
                />

                <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                  <strong className="overflow-hidden text-ellipsis whitespace-nowrap">
                    Emmysoft
                  </strong>
                  <p
                    className="text-[13px] text-slate-600 overflow-hidden text-ellipsis whitespace-nowrap
                  "
                  >
                    adedoyine535@gmail.com
                  </p>
                </div>
              </div>
            )}
          </section>
        </section>
      </div>
    );
  };

  return (
    <div className="h-screen w-screen flex ">
      <section className="md:flex hidden">
        <SidebarContent role={"team member"} />
      </section>

      <section className="md:hidden ">
        <Drawer.Root direction="left">
          <div
            className={`border-b-[1px] border-secondary container-fluid backdrop-filter z-[100] backdrop-blur-md fixed top-0 right-0 left-0 ${className}`}
          >
            <section className="w-full flex items-center justify-between p-1">
              <Drawer.Trigger asChild>
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-primary focus:outline-none"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className={`h-7 w-7`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </Drawer.Trigger>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  {false ? (
                    <Skeleton className="w-10 h-10 rounded-full" />
                  ) : (
                    <img
                      src={
                        "https://api.dicebear.com/7.x/micah/svg?seed=emmysoft"
                      }
                      width={35}
                      height={35}
                      alt="User profile"
                      className="mx-2 rounded-full"
                    />
                  )}
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuLabel>My Profile</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </section>
          </div>

          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-white flex flex-col justify-between h-full w-3/4 mt-24 fixed bottom-0 z-[1000]">
              <SidebarContent role={"team member"} />
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </section>

      <section className="p-3 w-full md:w-3/4 lg:w-11/12 overflow-y-auto ">
        <section className="md:hidden">
          <br />
          <br />
        </section>
        {children}
      </section>
    </div>
  );
};

export default Sidebar;
