'use client';
import Loader from '@/components/Loader';
import $axios from '@/lib/axios/axios.instance';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const CartPage = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ['cart-list'],
    queryFn: async () => {
      return await $axios.get('/cart/list');
    },
  });

  const cartList = data?.data?.cartList;

  if (isPending) {
    return <Loader />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="flex flex-col justify-between items-center gap-8">
      <div className="flex justify-center items-center gap-8 flex-wrap">
        {cartList && cartList.length > 0 ? (
          cartList.map((item) => {
            return <ProductCard key={item._id} {...item} />;
          })
        ) : (
          <p>No products</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
