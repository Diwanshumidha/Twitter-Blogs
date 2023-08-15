'use client'
import { useState } from "react";


interface Blog {
  id: string;
  title: string;
  content: string;
  poster: string;
  createdAt: string;
  Role: string;
  userId: string;
  user: {
    id: string;
    name: string;
    email: string;
    emailVerified: null | string;
    image: string;
  };
}


interface BlogData {
  success: boolean;
  blogs:Blog[];
  error?: any;
}

interface FetchHookResult {
  data: BlogData; 
  loading: boolean;
  error: string | null;
  fetchData: (queryString: string) => void; 
}


function useFetchHook():FetchHookResult  {
  const [data, setData] = useState<BlogData>({ success: false, blogs: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const fetchData = async (queryString:string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/${queryString}`,{
          method:'GET'
        }
      );
      const responseData = await response.json();
        if (responseData.success === false) {
          console.log('Error Occured')
          return setError(responseData.error)
        }

      setData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
}

export default useFetchHook;
