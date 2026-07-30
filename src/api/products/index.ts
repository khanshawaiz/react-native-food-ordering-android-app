import { supabase } from "@/lib/supabase";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useProductList = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const { data, error } = await supabase.from('products').select('*');
            if (error) {
                throw new Error(error.message);
            }
            return data;
        },
    });
};

export const useProduct = (id: number, enabled: boolean = true) => {
  return useQuery({
    queryKey: ['products', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .maybeSingle();
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
    enabled,
  });
};

export const useInsertProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data: any) => {
            const { error, data: newProduct } = await supabase
                .from('products')
                .insert(data)
                .select()
                .single();
            if (error) throw new Error(error.message);
            return newProduct;
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['products'] });
        }
    });
};

export const useUpdateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ id, ...data }: any) => {
            const { error, data: updatedProduct } = await supabase
                .from('products')
                .update(data)
                .eq('id', id)
                .select()
                .single();
            if (error) throw new Error(error.message);
            return updatedProduct;
        },
        onSuccess: async (_, { id }) => {
            await queryClient.invalidateQueries({ queryKey: ['products'] });
            await queryClient.invalidateQueries({ queryKey: ['products', id] });
        }
    });
};

export const useDeleteProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id: number) => {
            const { error } = await supabase.from('products').delete().eq('id', id);
            if (error) throw new Error(error.message);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['products'] });
        }
    });
};
