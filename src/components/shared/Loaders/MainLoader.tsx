import BounceLoader from 'react-spinners/BounceLoader';
import { useSelector } from 'react-redux';

const MainLoader = () => {
    const isLoading = useSelector((state) => state.mainLoader.isLoading);
    return (
        <>
            {isLoading ? (
                <div className="loader-spinner-bx">
                    <BounceLoader
                        color="#004EFF"
                        loading={isLoading}
                        size={50}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            ) : (
                <div></div>
            )}
        </>
    );
}

export default MainLoader;
