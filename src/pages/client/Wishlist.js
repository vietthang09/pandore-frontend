import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/outline";

import { sendGetRequest, sendPostRequest } from "../../util/fetchAPI";
import { baseURL } from "../../util/constants";
import { useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem";
import { showToast } from "../../util/helper";

export default function Wishlist() {
  const userRedux = useSelector((state) => state.user);
  const [products, setProducts] = useState([]);
  const [reloadWishlist, setReloadWishlist] = useState(false);
  async function getProducts() {
    const response = await sendGetRequest(
      `${baseURL}/wishlist/user/${userRedux.user.user_id}`
    );
    if (response.status == "success") {
      setProducts(response.data);
    } else {
      showToast("ERROR", response.message);
    }
  }

  const removeFromWishlistHandler = async (id) => {
    var requestData = {
      data: {
        id: id,
      },
    };
    const response = await sendPostRequest(
      `${baseURL}/wishlist/delete`,
      requestData
    );
    if (response.status == "success") {
      showToast("SUCCESS", "Product removed successful");
      setReloadWishlist(true);
    } else {
      showToast("ERROR", response.message);
    }
  };
  useEffect(() => {
    getProducts();
    setReloadWishlist(false);
  }, [reloadWishlist]);
  return (
    <div className="container-fluid my-24">
      <div className="row px-xl-5">
        <div className="col-12">
          <nav className="breadcrumb bg-light mb-30">
            <Link className="breadcrumb-item text-dark" href="#">
              Home
            </Link>
            <span className="breadcrumb-item active">Favourite</span>
          </nav>
        </div>
      </div>

      <div className="row px-xl-5 gap-4">
        {products.map((product, index) => {
          return (
            <div className="relative">
              <ProductItem product={product} />
              <TrashIcon
                className="absolute top-0 right-0 w-6 text-red-500 cursor-pointer"
                onClick={() => removeFromWishlistHandler(product.wishlist_id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
