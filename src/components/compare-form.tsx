import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  firstUsername: z.string().min(1, "firstUsername is required"),
  secondUsername: z.string().min(1, "secondUsername is required"),
});

type CompareFormValues = z.infer<typeof formSchema>;

interface CompareFormProps {
  onCompare: (firstUsername: string, secondUsername: string) => void;
  isLoading?: boolean;
}

const CompareForm = ({ onCompare, isLoading = false }: CompareFormProps) => {
  const form = useForm<CompareFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstUsername: "",
      secondUsername: "",
    },
  });

  const onSubmit = (values: CompareFormValues) => {
    onCompare(values.firstUsername, values.secondUsername);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full max-w-5xl space-x-2"
      >
        <FormField
          control={form.control}
          name="firstUsername"
          render={({ field }) => (
            <FormItem >
              <FormControl >
                <Input
                  placeholder="Enter first username..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="secondUsername"
          render={({ field }) => (
            <FormItem >
              <FormControl >
                <Input
                  placeholder="Enter second username..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <span className="flex items-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Comparing
            </span>
          ) : (
            <span className="flex items-center gap-2">Compare</span>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default CompareForm;
