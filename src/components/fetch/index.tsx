import axios from 'axios';
import React, { useCallback, useState } from 'react';


const Fetch: React.FC<{ url: string }> = ({ url }) => {
  const [payload, setPayload] = useState();
  const [error, setError] = useState<any>();
  const fetchProduct = useCallback(async () => {
    try {
      const res = await axios.get(url);
      setPayload(res.data);
    } catch (error) {
      setError(error);
    }
  }, [url]);

  return (
    <div className="flex flex-col gap-8">
      <div className="card bg-neutral w-full shadow-xl">
        <div className="card-body" >
          <h2 className="card-title">fetch url: {url}</h2>
          {payload ? (
            <pre data-testid="fetch-payload">{JSON.stringify(payload, null, 2)}</pre>
          ) : (
            <p>Click button to fetch data</p>
          )}
          <div className="card-actions justify-end">
            <button className="btn btn-primary" disabled={!!payload} onClick={fetchProduct}>
              Fetch data
            </button>
          </div>
        </div>
      </div>
      {error && (
        <div role="alert" className="alert alert-error">
          <span>Error:{JSON.stringify(error, null, 2)}</span>
        </div>
      )}
    </div>
  );
};

export default Fetch;
