import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetchComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const uri = '호출 URI';
      const clientKey = '발급 인증키';
      const url = `${uri}${clientKey}`;
      const requestData = {
        pageNo: 1,
        numOfRows: 20,
        updBgngYmd: '20201001',
        updEndYmd: '20201231',
      };

      try {
        const response = await axios.post(url, requestData, {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <div>
          <p>Error: {error.message}</p>
        </div>
      ) : data ? (
        <pre id="content">{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DataFetchComponent;
