'use client';
import $axios from '@/lib/axios/axios.instance';
import { isBuyer } from '@/utils/check.role';
import { Pagination } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Loader from './Loader';
import ProductCard from './ProductCard';
import CartCard from './CartCard';
import { useParams } from 'next/navigation';

const CartList = () => {
  const [page, setPage] = useState(1);

  const params = useParams();

  const {
    isPending,
    data: cartData,
    error,
  } = useQuery({
    queryKey: ['cart-list', page],
    queryFn: async () => {
      return await $axios.get('/cart/list', {
        page: page,
        limit: 2,
      });
    },
    enabled: isBuyer(),
  });

  //product details for cart items
  const {
    data: productDetails,
    isPending: isProductLoading,
    error: productError,
  } = useQuery({
    queryKey: ['product-details'],
    queryFn: async () => {
      return await cartData.map(async (item) => {
        const response = await $axios.get(`/product/detail/${params.id}`);
        return { ...item, ...response.data };
      });
    },
  });

  const productList = cartData?.data?.cartList;

  if (isPending) {
    return <Loader isPending />;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div className="flex flex-col justify-between items-center gap-8  ">
      <div className="flex justify-center items-center gap-8 flex-wrap">
        {productList && productList.length > 0 ? (
          productList.map((item) => {
            return <CartCard key={item._id} {...item} />;
          })
        ) : (
          <p>No products</p>
        )}
      </div>

      <Pagination
        page={page}
        count={5}
        color="secondary"
        className="my-12"
        size="large"
        onChange={(_, value) => {
          setPage(value);
        }}
      />
    </div>
  );
};

export default CartList;
