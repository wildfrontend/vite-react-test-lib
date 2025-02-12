import Fetch from '../../components/fetch';

const FetchPage: React.FC = () => {
  return (
    <div className="flex justify-center">
      <Fetch url="https://dummyjson.com/products/1" />
    </div>
  );
};

export default FetchPage;
