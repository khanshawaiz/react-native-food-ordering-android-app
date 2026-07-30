import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

export const UseInsertOrderSubcription = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const ordersSubscription = supabase
      .channel('custom-insert-channel')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'orders' },
        (payload) => {
          console.log('✅ Change received!', payload);
          // This will invalidate both ['orders'] and ['orders', { archived: false }]
          queryClient.invalidateQueries({ queryKey: ['orders'] });
        }
      )
      .subscribe((status, err) => {
        console.log('📡 Insert Subscription status:', status, err);
      });

    return () => {
      ordersSubscription.unsubscribe();
    };
  }, []);
};

export const UseUpdateOrderSubscription = (id: number) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const ordersSubscription = supabase
      .channel('custom-filter-channel')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'orders',
          filter: `id=eq.${id}`,
        },
        (payload) => {
          queryClient.invalidateQueries({ queryKey: ['orders', id] });
        }
      )
      .subscribe((status, err) => {
        console.log('📡 Update Subscription status:', status, err);
      });

    return () => {
      ordersSubscription.unsubscribe();
    };
  }, [id]);
};