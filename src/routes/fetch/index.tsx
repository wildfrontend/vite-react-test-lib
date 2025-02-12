import Fetch from '../../components/fetch';

const FetchPage: React.FC = () => {
  return (
    <div className="flex justify-center">
      <Fetch url="loading" />
    </div>
  );
};

export default FetchPage;
