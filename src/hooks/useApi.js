import { useEffect, useState } from "react";


const useApi = (url) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)


  const fetchApi = () => {
    fetch(url)
      .then(res => res.json())
      .then(resJson => {
        setLoading(true);
        setData(resJson.data)
        console.log(resJson);
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchApi();
  },[url])

  return { loading, data }
}

export default useApi