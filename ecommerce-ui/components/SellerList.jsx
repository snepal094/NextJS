import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';
import $axios from '@/lib/axios/axios.instance';
import { CircularProgress, Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import Loader from './Loader';

// const SellerList = () => {
//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const res = await $axios.post('/product/seller/list', {
//           page: 1,
//           limit: 10,
//         });
//         console.log(res);
//       } catch (error) {
//         console.log('error aayo');
//       }
//     };
//     getProducts();
//   }, []);

//   return <div>SellerList</div>
// };

// const SellerList = () => {
//   const { isPending, data, error } = useQuery({
//     queryKey: ['seller-product-list'],
//     queryFn: async () => {
//       return await $axios.post('/product/seller/list', {
//         page: 1,
//         limit: 10,
//         searchText: '',
//       });
//     },
//   });

//   const productList = data?.data?.productList || [];

//   if (isPending) {
//     return <CircularProgress />;
//   }

//   return (
//     <>
//       <div className="card-center">
//         {productList.length ? (
//           productList?.map((item) => {
//             return (
//               <ProductCard
//                 key={item._id}
//                 {...item}
//                 // _id={item._id}
//                 // brand={item.brand}
//                 // name={item.name}
//                 // price={item.price}
//                 // description={item.description}
//                 // image={item.image}
//               />
//             );
//           })
//         ) : (
//           <p className="text-3xl bold text-red-500">No products</p>
//         )}
//       </div>
//     </>
//   );
// };

const SellerList = () => {
  const [productList, setProductList] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getSellerProduct = async () => {
      try {
        setIsPending(true);
        const res = await $axios.post('/product/seller/list', {
          page: page,
          limit: 2,
        });
        setIsPending(false);
        setProductList(res?.data?.productList);
      } catch (error) {
        setError('Something went wrong.');
        setIsPending(false);
      }
    };

    getSellerProduct();
  }, [page]);

  if (isPending) {
    // return <CircularProgress />;
    return <Loader />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="flex flex-col justify-between items-center gap-8">
      <div className="flex justify-between items-center gap-8 flex-wrap">
        {productList.map((item) => {
          return <ProductCard key={item._id} {...item} />;
        })}
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

export default SellerList;
