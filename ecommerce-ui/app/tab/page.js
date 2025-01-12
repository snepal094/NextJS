'use client'; //hooks are not found in server components
//write 'use client'; whenever hooks are used
import { Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// hooks => react function which starts with "use" keyword
// e.g useState, useEffect, useMemo, useCallback, useRef
//  third party hooks => useDispatch, useSelector, useQuery, useMutation
//  we can also create custom hooks
// useQuery: user isn't involved, runs by itself, more compact code than useEffect
// useMutation: user is involved, actions to be taken after clicking a button
// useState => like variable which holds value and also tracks where to paint the value in dom
// useEffect => react lifecycle (mounting,updating, unmounting)
// always runs at the beginning, can be used to handle conditions
// syntax
// useEffect(callback function) //runs every time a change is observed in the page
// useEffect(callback function ,[]) //the code runs only once even when the values are changed repeatedly
// useEffect(callback function ,[value]) //runs whenever 'value' changes
// useEffect(callback function ,[value1, value2, ...])
//  popular uses => data fetching, updating dom based upon condition

const Tab = () => {
  const [value, setValue] = useState('post');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  // the main callback function in useEffect cannot be async, so we write async functions inside the function

  useEffect(() => {
    const getTodos = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setIsLoading(false);
        setData(res?.data);
        console.log(res);
      } catch (error) {
        setIsLoading(false);
        setError('Something went wrong....');
      }
    };

    getTodos();

    return () => {
      console.log('Tab is removed from dom');
    };
  }, []);

  if (isLoading) {
    return <p className="text-5xl bold underline text-gray-900">Loading....</p>;
  }

  if (error) {
    return <p className="text-3xl text-red-800">{error}</p>;
  }
  return (
    <div>
      <p className="text-3xl bold">use effect</p>
      <p className="text-3xl bold text-green-600">
        {' '}
        User has selection tab: {value}
      </p>

      <div>
        <Button
          onClick={() => {
            setValue('post');
          }}
        >
          Post
        </Button>
        <Button
          onClick={() => {
            setValue('comment');
          }}
        >
          Comment
        </Button>

        <Button
          onClick={() => {
            setValue('pic');
          }}
        >
          Pictures
        </Button>

        <div>
          {data.map((item, index) => {
            return <p key={index}>{item.title}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Tab;

//components to components communication: props
//page to page: params
//gap dosen't work without flex
