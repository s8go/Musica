import React, { useState, useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Nav = ({getSearchResult}) => {
  const Navigate = useNavigate();
  const [showMenu, setMenu] = useState(false);
  const [active, setActive] = useState("");
  const ref = useRef(null);



  return (
    <>
      <nav
        className={` bg-[#1D2123] md:bg-transparent
         md:flex flex-col justify-center items-center ${
           showMenu ? "flex" : "hidden"
         }  w-full h-screen  py-8  fixed z-[1001]  md:left-4 top-8 md:top-28 md:w-[5%] md:h-[57%] md:my-8 min-w-fit`}
      >
        <ul className=" md:bg-[#1A1E1F] md:rounded-full md:w-12  w-full py-3 md:py-0">
          <li className=" flex w-1/2 m-auto pt-12 md:pt-4  md:flex-col items-center justify-evenly md:justify-center text-2xl md:text-xs md:mx-auto py-2 md:py-4 md:m-2 hover:text-gray-300 duration-500 ">
            <NavLink
              className={"flex"}
              to={"/home"}
              onClick={() => {
                setActive("home");
              }}
            >
              <div>
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.38171 18.0503V15.239C6.3817 14.5266 6.96099 13.9478 7.67852 13.9433H10.3132C11.0339 13.9433 11.6182 14.5234 11.6182 15.239V18.0421C11.6182 18.66 12.1203 19.1622 12.7427 19.1667H14.5401C15.3796 19.1688 16.1855 18.8392 16.7799 18.2507C17.3742 17.6621 17.7083 16.8629 17.7083 16.0294V8.0437C17.7083 7.37045 17.4077 6.73183 16.8875 6.29989L10.781 1.45142C9.7136 0.603372 8.18905 0.630768 7.15323 1.51661L1.17805 6.29989C0.633305 6.7191 0.307716 7.35961 0.291626 8.0437V16.0213C0.291626 17.7584 1.71006 19.1667 3.45978 19.1667H5.21623C5.51587 19.1688 5.80399 19.0522 6.01664 18.8426C6.2293 18.633 6.34889 18.3478 6.34888 18.0503H6.38171Z"
                    fill={active === "home" ? "#FACD66" : "#EFEEE0"}
                    fillOpacity={active !== "home" ? "0.25" : ""}
                  />
                </svg>
              </div>

              <p className="md:hidden text-[#EFEEE0] text-sm w-[100px] text-left ml-8">
                home
              </p>
            </NavLink>
          </li>

          <li className=" flex  w-1/2 m-auto  md:flex-col items-center justify-evenly md:justify-center text-2xl md:text-xs md:mx-auto py-2 md:py-4 md:m-2 hover:text-gray-300 duration-500 ">
            <NavLink
              className={"flex justify-between"}
              to={"collection"}
              onClick={() => {
                setActive("collection");
              }}
            >
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4166 0.681667C16.1233 0.599167 15.8208 0.5625 15.5 0.5625H4.49998C4.17915 0.5625 3.87665 0.599167 3.58331 0.681667C2.00665 1.09417 0.833313 2.53333 0.833313 4.22917V9.72917C0.833313 11.7458 2.48331 13.3958 4.49998 13.3958H15.5C17.5166 13.3958 19.1666 11.7458 19.1666 9.72917V4.22917C19.1666 2.53333 17.9933 1.09417 16.4166 0.681667ZM13.6666 5.17333V9.04167C13.6666 10.0867 12.8141 10.9392 11.7691 10.9392C10.7241 10.9392 9.87165 10.0867 9.87165 9.04167C9.87165 7.99667 10.7241 7.14417 11.7691 7.14417C11.9525 7.14417 12.1266 7.18083 12.2916 7.22667V6.07167L9.22081 6.90583V9.84833C9.22081 9.8575 9.22081 9.86667 9.21165 9.87583C9.20248 10.9117 8.34998 11.755 7.31415 11.755C6.26915 11.755 5.41665 10.9025 5.41665 9.84833C5.41665 8.79417 6.26915 7.95083 7.31415 7.95083C7.49748 7.95083 7.67165 7.9875 7.84581 8.03333V6.38333V4.9625C7.84581 4.17417 8.34081 3.5325 9.09248 3.33083L11.5216 2.66167C12.3008 2.45083 12.7958 2.6525 13.0708 2.86333C13.3458 3.07417 13.6666 3.48667 13.6666 4.3025V5.17333Z"
                  fill={active === "collection" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "collection" ? "0.25" : ""}
                />
              </svg>

              <p className="md:hidden text-[#EFEEE0] text-sm w-[100px] text-left ml-8">
                collection
              </p>
            </NavLink>
          </li>

          <li className=" flex w-1/2 m-auto  md:flex-col items-center bg justify-evenly md:justify-center text-2xl md:text-xs md:mx-auto py-2 md:py-4 md:m-2 hover:text-gray-300 duration-500 ">
            <NavLink
              className={"flex justify-between"}
              to="videos"
              onClick={() => {
                setActive("videos");
              }}
            >
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5833 0.583328H5.41665C5.17831 0.583328 4.94915 0.592495 4.72915 0.629162C2.36415 0.904162 0.833313 2.65499 0.833313 5.16666V11.5833C0.833313 14.3333 2.66665 16.1667 5.41665 16.1667H14.5833C17.3333 16.1667 19.1666 14.3333 19.1666 11.5833V5.16666C19.1666 2.41666 17.3333 0.583328 14.5833 0.583328ZM6.22331 10.6667C4.95831 10.6667 3.93165 9.63999 3.93165 8.37499C3.93165 7.10999 4.95831 6.08333 6.22331 6.08333C7.48831 6.08333 8.51498 7.10999 8.51498 8.37499C8.51498 9.63999 7.48831 10.6667 6.22331 10.6667ZM12.1816 10.8958H11.7233C11.3475 10.8958 11.0358 10.5842 11.0358 10.2083C11.0358 9.83249 11.3475 9.52083 11.7233 9.52083H12.1816C12.5575 9.52083 12.8691 9.83249 12.8691 10.2083C12.8691 10.5842 12.5575 10.8958 12.1816 10.8958ZM15.39 10.8958H14.9316C14.5558 10.8958 14.2441 10.5842 14.2441 10.2083C14.2441 9.83249 14.5558 9.52083 14.9316 9.52083H15.39C15.7658 9.52083 16.0775 9.83249 16.0775 10.2083C16.0775 10.5842 15.7658 10.8958 15.39 10.8958ZM15.39 7.22916H11.7233C11.3475 7.22916 11.0358 6.91749 11.0358 6.54166C11.0358 6.16583 11.3475 5.85416 11.7233 5.85416H15.39C15.7658 5.85416 16.0775 6.16583 16.0775 6.54166C16.0775 6.91749 15.7658 7.22916 15.39 7.22916Z"
                  fill={active === "videos" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "videos" ? "0.25" : ""}
                />
              </svg>

              <p className="md:hidden text-[#EFEEE0] text-sm w-[100px] text-left ml-8">
                videos
              </p>
            </NavLink>
          </li>

          <li className=" flex w-1/2 m-auto md:flex-col items-center justify-evenly md:justify-center text-2xl md:text-xs md:mx-auto py-2 md:py-4 md:m-2 hover:text-gray-300 duration-500 ">
            <NavLink
              className={"flex justify-between"}
              to="radio"
              onClick={() => {
                setActive("radio");
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3125 7.205H1.83337V14.8408C1.83337 14.8958 1.83337 14.9508 1.84254 14.9967H10.3125V7.205Z"
                  fill={active === "radio" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "radio" ? "0.25" : ""}
                />
                <path
                  d="M7.04919 5.83H10.3125V1.83333H7.07669V5.71999C7.07669 5.75666 7.05836 5.79333 7.04919 5.83Z"
                  fill={active === "radio" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "radio" ? "0.25" : ""}
                />
                <path
                  d="M5.70168 5.72V1.98C3.66668 2.40166 2.33751 3.75833 1.95251 5.83H5.72001C5.71085 5.79333 5.70168 5.75666 5.70168 5.72Z"
                  fill={active === "radio" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "radio" ? "0.25" : ""}
                />
                <path
                  d="M14.8683 1.83333H11.6875V5.83H14.8683V1.83333Z"
                  fill={active === "radio" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "radio" ? "0.25" : ""}
                />
                <path
                  d="M16.2341 5.83001H20.0475C19.6625 3.74001 18.315 2.37417 16.2433 1.97084V5.80251C16.2433 5.81167 16.2341 5.82084 16.2341 5.83001Z"
                  fill={active === "radio" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "radio" ? "0.25" : ""}
                />
                <path
                  d="M16.2433 20.0292C18.2508 19.635 19.5708 18.3517 20.0016 16.3717H16.2433V20.0292Z"
                  fill={active === "radio" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "radio" ? "0.25" : ""}
                />
                <path
                  d="M14.8683 16.3717H11.6875V20.1667H14.8683V16.3717Z"
                  fill={active === "radio" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "radio" ? "0.25" : ""}
                />
                <path
                  d="M11.6875 14.9967H20.1575C20.1667 14.9508 20.1667 14.8958 20.1667 14.8408V7.205H11.6875V14.9967Z"
                  fill={active === "radio" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "radio" ? "0.25" : ""}
                />
                <path
                  d="M10.3125 16.3717H7.07666V20.1667H10.3125V16.3717Z"
                  fill={active === "radio" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "radio" ? "0.25" : ""}
                />
                <path
                  d="M1.99829 16.3717C2.42912 18.3333 3.73079 19.6167 5.70162 20.02V16.3717H1.99829Z"
                  fill={active === "radio" ? "#FACD66" : "#EFEEE0"}
                  fillOpacity={active !== "radio" ? "0.25" : ""}
                />
              </svg>
              <p className="md:hidden text-[#EFEEE0] text-sm w-[100px] text-left ml-8">
                radio
              </p>
            </NavLink>
          </li>
        </ul>

        <ul className="md:bg-[#1A1E1F] w-full  mt-0 md:mt-8 md:rounded-full md:w-12 m-auto md:h-auto py-3 md:py-0 pb-8">
          <li className=" flex w-1/2 m-auto md:pt-8  md:flex-col items-center justify-evenly md:justify-center text-2xl md:text-xs md:mx-auto md:m-2 hover:text-gray-300 duration-500 ">
            <NavLink
              className={"flex justify-between"}
              to="/profile"
              onClick={() => {
                setActive("profile");
              }}
            >
              <div>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1.83333C8.59837 1.83333 6.64587 3.78583 6.64587 6.18749C6.64587 8.54333 8.48837 10.45 10.89 10.5325C10.9634 10.5233 11.0367 10.5233 11.0917 10.5325C11.11 10.5325 11.1192 10.5325 11.1375 10.5325C11.1467 10.5325 11.1467 10.5325 11.1559 10.5325C13.5025 10.45 15.345 8.54333 15.3542 6.18749C15.3542 3.78583 13.4017 1.83333 11 1.83333Z"
                    fill={active === "profile" ? "#FACD66" : "#EFEEE0"}
                    fillOpacity={active !== "profile" ? "0.25" : ""}
                  />
                  <path
                    d="M15.6566 12.9708C13.0991 11.2658 8.9283 11.2658 6.35246 12.9708C5.1883 13.75 4.54663 14.8042 4.54663 15.9317C4.54663 17.0592 5.1883 18.1042 6.3433 18.8742C7.62663 19.7358 9.3133 20.1667 11 20.1667C12.6866 20.1667 14.3733 19.7358 15.6566 18.8742C16.8116 18.095 17.4533 17.05 17.4533 15.9133C17.4441 14.7858 16.8116 13.7408 15.6566 12.9708Z"
                    fill={active === "profile" ? "#FACD66" : "#EFEEE0"}
                    fillOpacity={active !== "profile" ? "0.25" : ""}
                  />
                </svg>
              </div>

              <p className="md:hidden text-[#EFEEE0] text-sm w-[100px] text-left ml-8">
                profile
              </p>
            </NavLink>
          </li>

          <li className=" flex w-1/2 m-auto  md:pt-4  md:flex-col items-center justify-evenly md:justify-center text-2xl md:text-xs md:mx-auto py-2 md:py-4 md:m-2 hover:text-gray-300 duration-500 ">
            <NavLink
              className={"flex justify-between"}
              onClick={() => {
                setActive("logout");
              }}
            >
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.53498 0.833333C11.8107 0.833333 13.6666 2.6575 13.6666 4.90333V9.29417H8.07072C7.66967 9.29417 7.35257 9.60583 7.35257 10C7.35257 10.385 7.66967 10.7058 8.07072 10.7058H13.6666V15.0875C13.6666 17.3333 11.8107 19.1667 9.51633 19.1667H4.9743C2.6893 19.1667 0.833313 17.3425 0.833313 15.0967V4.9125C0.833313 2.6575 2.69862 0.833333 4.98363 0.833333H9.53498ZM15.9952 6.83768C16.2702 6.55352 16.7193 6.55352 16.9943 6.82852L19.671 9.49602C19.8085 9.63352 19.8818 9.80768 19.8818 10.0002C19.8818 10.1835 19.8085 10.3668 19.671 10.4952L16.9943 13.1627C16.8568 13.3002 16.6735 13.3735 16.4993 13.3735C16.316 13.3735 16.1327 13.3002 15.9952 13.1627C15.7202 12.8877 15.7202 12.4385 15.9952 12.1635L17.4618 10.706H13.6668V9.29435H17.4618L15.9952 7.83685C15.7202 7.56185 15.7202 7.11268 15.9952 6.83768Z"
                    fill={active === "logout" ? "#FACD66" : "rgb(80, 80, 80)"}
                  />
                </svg>
              </div>

              <p className="md:hidden text-[#EFEEE0] text-sm w-[100px] text-left ml-8">
                logout
              </p>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex justify-between bg-[#1D2123]  fixed top-0 left-0 w-full px-4 py-2 min-w-fit z-[1001]">
        <div className="flex  items-center  justify-between md:justify-start ">
          <div
            className="cursor-pointer "
            onClick={() => {
              setActive("videos");
              setMenu(!showMenu);
            }}
          >
            <div
              className={`${
                showMenu ? "rotate-45 origin-left w-4" : "w-4"
              } md:hidden mr-4 bg-white h-[.1em]`}
            ></div>
            <div
              className={`${
                showMenu ? "-rotate-45 origin-center w-4 -translate-x-1" : "w-4"
              } md:hidden mr-4 bg-white  h-[.1em] mt-1`}
            ></div>
         
          </div>
          <div
            className="flex cursor-pointer ml-1 "
            onClick={() => Navigate("/")}
          >
          
            <div>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0601 0.587295L8.86476 2.13795C8.60683 2.19295 8.37555 2.3347 8.20947 2.53956C8.04339 2.74441 7.95254 3.00001 7.95207 3.26373V15.6468C7.42708 15.4645 6.87516 15.3717 6.3194 15.3724C3.80633 15.3724 1.76898 17.2177 1.76898 19.4941C1.76898 21.7704 3.80633 23.6158 6.31947 23.6158C8.04656 23.6158 9.77399 22.677 10.492 21.0764C11.116 19.6854 10.8698 18.0132 10.8698 16.5213V6.62223L20.779 4.32072C20.7449 1.87246 18.4654 0.0689939 16.0601 0.587361L16.0601 0.587295Z"
                  fill="#FACD66"
                />
                <path
                  d="M16.0565 11.998V25.2556C16.0563 25.2872 16.0488 25.3184 16.0345 25.3466C16.0202 25.3748 15.9996 25.3993 15.9742 25.4182C15.9488 25.437 15.9194 25.4497 15.8882 25.4552C15.8571 25.4607 15.8251 25.4589 15.7948 25.4499C15.349 25.3225 14.8875 25.2581 14.4238 25.2585C11.9107 25.2585 9.87341 27.1039 9.87341 29.3802C9.87341 31.6566 11.9107 33.502 14.4238 33.502C16.1509 33.502 17.8784 32.5632 18.5964 30.9626C19.2204 29.5716 18.9743 27.8993 18.9743 26.4075V15.6245C18.9744 15.5481 19.0004 15.474 19.048 15.4143C19.0957 15.3545 19.1621 15.3127 19.2366 15.2956L28.8834 13.055C28.9331 13.0433 28.9848 13.043 29.0346 13.0541C29.0844 13.0651 29.1311 13.0873 29.1712 13.1189C29.2112 13.1506 29.2436 13.1908 29.266 13.2367C29.2883 13.2826 29.3 13.3329 29.3002 13.384V24.2421C29.3 24.2737 29.2925 24.3048 29.2782 24.3331C29.2639 24.3613 29.2433 24.3858 29.2179 24.4046C29.1925 24.4235 29.1631 24.4362 29.1319 24.4417C29.1008 24.4472 29.0688 24.4454 29.0385 24.4364C28.5926 24.309 28.1312 24.2446 27.6675 24.245C25.1544 24.245 23.1171 26.0904 23.1171 28.3667C23.1171 30.6431 25.1544 32.4884 27.6674 32.4884C29.1883 32.4884 30.7005 31.7011 31.5534 30.413C32.3799 29.1648 32.2183 27.8537 32.2179 26.4434C32.2171 23.9282 32.2171 21.413 32.2179 18.8979V8.84266C32.2174 8.69091 32.1829 8.54119 32.1171 8.40447C32.0512 8.26776 31.9556 8.14751 31.8372 8.05253C31.7189 7.95755 31.5808 7.89026 31.433 7.85557C31.2853 7.82089 31.1317 7.81969 30.9834 7.85208L16.9692 10.8722C16.7113 10.9272 16.48 11.069 16.3139 11.2738C16.1478 11.4787 16.057 11.7343 16.0565 11.998Z"
                  fill="#A4C7C6"
                />
                <path
                  d="M27.3081 13.384C27.3079 13.3329 27.2962 13.2826 27.2739 13.2367C27.2515 13.1908 27.2191 13.1506 27.1791 13.1189C27.139 13.0873 27.0923 13.0651 27.0425 13.0541C26.9927 13.043 26.941 13.0433 26.8913 13.055L17.2445 15.2956C17.17 15.3127 17.1036 15.3545 17.0559 15.4143C17.0083 15.474 16.9823 15.5481 16.9822 15.6245V26.4075C16.9822 27.8993 17.2283 29.5716 16.6043 30.9626C16.0241 32.256 14.7847 33.1169 13.419 33.3998C13.7497 33.4676 14.0864 33.5018 14.4239 33.502C16.151 33.502 17.8785 32.5632 18.5965 30.9626C19.2205 29.5716 18.9744 27.8993 18.9744 26.4075V15.6245C18.9745 15.5481 19.0005 15.474 19.0481 15.4143C19.0958 15.3545 19.1622 15.3127 19.2367 15.2956L27.3081 13.4209V13.384ZM14.0623 25.2727C13.8491 25.2878 13.6371 25.3165 13.4276 25.3588C13.5546 25.3847 13.6799 25.4147 13.8027 25.4499C13.8316 25.4584 13.862 25.4604 13.8917 25.4557C13.9214 25.451 13.9497 25.4398 13.9745 25.4228C13.9994 25.4058 14.0201 25.3836 14.0353 25.3576C14.0505 25.3316 14.0597 25.3026 14.0623 25.2726V25.2727ZM32.218 26.4434C32.2172 23.9282 32.2172 21.413 32.218 18.8979V8.84266C32.2175 8.69091 32.183 8.54119 32.1172 8.40447C32.0513 8.26776 31.9557 8.14751 31.8373 8.05253C31.719 7.95755 31.5809 7.89026 31.4331 7.85557C31.2854 7.82089 31.1318 7.81969 30.9835 7.85208L29.8857 8.08868C29.9927 8.18298 30.0784 8.29901 30.137 8.42902C30.1956 8.55902 30.2259 8.70004 30.2258 8.84266V26.4434C30.2262 27.8536 30.3878 29.1648 29.5613 30.413C28.8792 31.4207 27.8345 32.1263 26.6449 32.3826C26.9813 32.4528 27.324 32.4883 27.6676 32.4884C29.1883 32.4884 30.7006 31.7011 31.5535 30.413C32.38 29.1648 32.2184 27.8537 32.218 26.4434ZM27.306 24.2591C27.0928 24.2742 26.8808 24.303 26.6712 24.3453C26.7983 24.3712 26.9236 24.4012 27.0464 24.4364C27.0752 24.4449 27.1056 24.4469 27.1353 24.4422C27.165 24.4375 27.1933 24.4263 27.2182 24.4093C27.243 24.3923 27.2638 24.3701 27.279 24.3441C27.2942 24.3181 27.3034 24.2891 27.306 24.2591Z"
                  fill="#9CBCBB"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className=" flex flex-row text-xl text-gray-400 p-2 md:ml-20 md:w-full ">
          <input
            type="text"
            name = "search"
            ref={ref}
            placeholder="Search artist"
            className="block relative md:bg-transparent bg-gray-700 text-left text-sm text-white p-1 pl-12 pr-4 md:w-full w-full rounded-full bg-transparent placeholder:text-gray-500 focus:outline-none"
         onChange={()=>getSearchResult(ref.current.value)}
         />
          <div className="hidden md:block w-fit mt-5 absolute top-1 ml-4">
            <svg
              width="20"
              height="15"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z"
                stroke="white"
                strokeOpacity="0.25"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.25 26.25L20.8125 20.8125"
                stroke="white"
                strokeOpacity="0.25"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="block md:hidden">
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
