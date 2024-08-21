import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

        <div className="mb-6 flex items-center gap-x-3 my-2">
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

        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total Users</TableCell>
              <TableCell className="text-right">
                {filteredUsers.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Sidebar>
    </div>
  );
};

export default Member;
