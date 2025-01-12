import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";
import "./HeadStyle.css";

const keywords = [
  "캐주얼 오버핏 흑청 자켓",
  "소가죽 메리제인 플랫슈즈",
  "클레어 몰드 스트랩 샌들",
  "베이직 스틸레토힐",
  "핀덕 스트레이트 일자 팬츠",
  "멀티 포켓 캐주얼 크로스백",
  "미니 토트 크로스백",
  "데일리 포켓 백팩",
  "캐시미어 울 라운드 니트",
  "어바웃 벨트 숄더백",
  "뉴 보부상 숄더백",
  "프리미엄 숏 패딩 점퍼",
  "베이직 라운드 가디건",
];

const categories = {
  new: ["가죽자켓", "코트", "경량패팅", "단독", "인플루언서 PICK"],
  best: ["스트릿", "캐주얼", "미니멀", "레트로"],
  sale: ["타임세일", "간절기 아우터", "마감 임박", "신규 오픈", "단독 상품"],
};

const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredKeywords, setFilteredKeywords] = useState([]);
  const [isOpen, setOpen] = useState(null);

  const toggleMenu = (menu) => {
    setOpen(isOpen === menu ? null : menu);
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term) {
      const filtered = keywords.filter((keyword) =>
        keyword.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredKeywords(filtered);
    } else {
      setFilteredKeywords([]);
    }
  };

  const handleSearchSelect = (selectedKeyword) => {
    setSearchTerm(selectedKeyword);
    setFilteredKeywords([]);
    navigate(`/search?query=${selectedKeyword}`);
  };

  return (
    <>
      <div className="flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-[1000] bg-[#f3f3f3]">
        <div className="flex items-center relative">
          <input
            type="text"
            className="ml-2 sm:w-[45rem] lg:w-[80rem] py-3 px-4 rounded-2xl text-base"
            placeholder="검색어를 입력해주세요"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <FiSearch className="absolute right-[2rem] text-[#888] text-lg" />
        </div>

        {/* 자동완성 목록 */}
        {filteredKeywords.length > 0 && (
          <ul className="suggestions-list show">
            {filteredKeywords.map((keyword, index) => (
              <li
                key={index}
                className="suggestion-item"
                onClick={() => handleSearchSelect(keyword)}
              >
                {keyword}
              </li>
            ))}
          </ul>
        )}

        <div className="flex justify-between gap-2">
          <button
            onClick={() => navigate("/login")}
            aria-label="로그인"
            className="text-black text-[1.56rem] leading-8 cursor-pointer m-[10px]"
          >
            <FiUser />
          </button>

          <button
            onClick={() => navigate("/login")}
            aria-label="찜 목록"
            className="text-black text-[1.56rem] leading-8 cursor-pointer m-[10px]"
          >
            <FiHeart />
          </button>
          <button
            onClick={() => navigate("/cart")}
            aria-label="장바구니"
            className="text-black text-[1.56rem] leading-8 cursor-pointer m-[10px]"
          >
            <FiShoppingCart />
          </button>
        </div>
      </div>

      {/* 카테고리 메뉴 */}
      <div className="mt-16 -ml-4 -mr-4 p-4 bg-[#f3f3f3]">
        <ul className="flex justify-start m-0 p-0">
          <li
            onClick={() => toggleMenu("new")}
            className="ml-2 py-2 px-4 cursor-pointer text-base bg-transparent text-black mr-4"
          >
            신상품
          </li>
          <li
            onClick={() => toggleMenu("best")}
            className="py-2 px-4 cursor-pointer text-base bg-transparent text-black mr-4"
          >
            베스트
          </li>
          <li
            onClick={() => toggleMenu("sale")}
            className="py-2 px-4 cursor-pointer text-base bg-transparent text-black mr-4"
          >
            세일
          </li>
        </ul>

        {isOpen && (
          <ul className="flex justify-start mt-4  mx-0  mb-0">
            {categories[isOpen].map((item, index) => (
              <li
                key={index}
                className="py-2 px-4 cursor-pointer text-sm bg-[#ffffff] rounded ml-2"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
