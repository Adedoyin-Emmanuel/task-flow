import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";
import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IMember {
  className?: string;
}

const Member = ({ className }: IMember) => {
  const users = [
    { id: 1, name: "John Doe", role: "Admin", email: "john.doe@example.com" },
    {
      id: 2,
      name: "Jane Smith",
      role: "Project Manager",
      email: "jane.smith@example.com",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Team Member",
      email: "michael.brown@example.com",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      role: "Team Member",
      email: "sarah.wilson@example.com",
    },
    {
      id: 5,
      name: "Robert Johnson",
      role: "Project Manager",
      email: "robert.johnson@example.com",
    },
  ];

  const [roleFilter, setRoleFilter] = React.useState("All");

  const filteredUsers =
    roleFilter === "All"
      ? users
      : users.filter((user) => user.role === roleFilter);

  return (
    <div className={cn("", className)}>
      <Sidebar>
        <h2 className="text-2xl font-bold capitalize">Members</h2>

        <div className="mb-6">
          <label className="mr-4">Filter by Role:</label>

          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="Project Manager">Project Manager</SelectItem>
                <SelectItem value="Team Member">Team Member</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <table className="min-w-full bg-white shadow rounded-md">
          <thead>
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Name
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Role
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.role}</td>
                <td className="py-3 px-4">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Sidebar>
    </div>
  );
};

export default Member;
