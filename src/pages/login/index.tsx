import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Loader from "@/components/loader";
import { toast } from "sonner";
import React from "react";
import { Axios } from "@/config/axios";
import useAuth from "@/store/useAuth";

const Login = () => {
  const formSchema = z.object({
    email: z.string().email({ message: "Invalid email format." }),
    password: z.string().min(6).max(20, {
      message:
        "Password must be at least 6 characters and at most 20 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = React.useState(false);
  const { login } = useAuth((state) => ({ login: state.login }));

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);

      await Axios.get("/sanctum/csrf-cookie");
      const response = await Axios.post("/api/auth/login", values);

      login(response.data.data.user);
      toast.success(response.data.message);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response?.data.message || error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader loading={loading} />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-11/12 md:w-1/2 xl:w-1/4"
        >
          <h3 className="text-2xl capitalize font-bold">Login</h3>
          <p className="text-sm text-gray-600">
            Welcome back! Please login to your account.
          </p>

          <br />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email address"
                    {...field}
                    type="email"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    {...field}
                    type="password"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full my-4" disabled={loading}>
            Login
          </Button>

          <span className="text-sm text-gray-600">
            No account?{" "}
            <Link to="/auth/signup" className="text-primary underline">
              Create an account
            </Link>
          </span>
        </form>
      </Form>
    </div>
  );
};

export default Login;
