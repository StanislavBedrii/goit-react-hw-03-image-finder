import Loader from 'react-loader-spinner';

const LoaderSpinner = () => {
  return (
    <div className="Loader">
      <Loader
        type="Circles"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000}
      />
    </div>
  );
};

export default LoaderSpinner;
