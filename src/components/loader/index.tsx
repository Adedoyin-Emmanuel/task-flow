import { ClipLoader } from "react-spinners";

interface ILoader {
  loading: boolean;
  overlay?: boolean;
  small?: boolean;
}
const Loader = ({ loading, overlay = true, small = false }: ILoader) => {
  let size = small ? 20 : 30;
  if (loading && overlay) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-65 z-50">
        <ClipLoader loading={loading} color="0F172A" size={size} />
      </div>
    );
  } else {
    return <ClipLoader loading={loading} color="0F172A" size={size} />;
  }
};

export default Loader;
