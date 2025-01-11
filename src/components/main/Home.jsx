import React, { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import PaginationComponent from "./Pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Home = ({ isLoggedIn }) => {
  const slides = ["Slide 1", "Slide 2"];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
      })
      .catch((error) => console.error("Error loading product data:", error));
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const heartClick = () => {
    if (isLoggedIn) {
      navigate("/wishlist");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="p-5">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-64 bg-gray-300 flex items-center justify-center"
            >
              <img src="src/components/img/slide.png" alt="슬라이드 이미지" />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 -translate-y-24 left-4 transform text-white"
        onClick={prevSlide}
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-24 text-white"
        onClick={nextSlide}
      >
        <FaChevronRight size={24} />
      </button>

      <br />
      <h1 className="text-2xl font-semibold mb-6">인기 카테고리 트렌드</h1>
      <div className="grid grid-cols-[repeat(3,_1fr)] gap-2 ">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center bg-white p-4 rounded-md relative border border-gray-200"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-32 w-auto mb-4 object-contain"
              />
              <i
                className="text-2xl text-black cursor-pointer absolute bottom-[5.5rem] right-[3rem] hover:text-red-500"
                onClick={heartClick}
              >
                <FiHeart />
              </i>
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-sm text-[#4a5568] mb-2">
                {product.description}
              </p>
              <p className="text-lg font-bold mb-2">${product.price}</p>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-lg">Loading products...</p>
        )}
      </div>

      {/* 페이지네이션 */}
      <PaginationComponent
        totalItems={productList.length}
        itemsPerPage={productsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
