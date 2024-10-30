"use client";
import Image from "next/image";

export default function Header() {
  //Todo mejorar el import de esto
  return (
    <header className="h-[62px] px-4 flex items-center justify-between bg-white border-b border-gray-200">
      {/* Menú e ícono de búsqueda */}
      <div className="flex items-center gap-4">
        <svg
          width="24"
          height="22"
          viewBox="0 0 24 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0.390015H23.6346V2.9451H0V0.390015ZM0 5.1808H23.6346V7.73589H0V5.1808ZM0 9.97159H23.6346V12.5267H0V9.97159ZM4.4714 15.1967H5.69785V21.5461H4.72052V16.6787L4.76524 16.9598L3.37272 20.7285H2.55509L1.14979 17.0747L1.1945 16.6787V21.5206H0.217182V15.1967H1.41807L2.95751 19.4318L4.4714 15.1967ZM8.22738 16.1996V17.8987H10.8719V18.8952H8.22738V20.5497H11.351V21.5461H7.18618V15.1967H11.351V16.1996H8.22738ZM12.5263 15.1967H13.6633L16.3973 20.0833L16.2951 20.1983V15.1967H17.3043V21.5461H16.1609L13.4142 16.7298L13.5228 16.6148V21.5461H12.5263V15.1967ZM19.7444 21.3353C19.4057 21.1499 19.1349 20.8613 18.9715 20.5113C18.7833 20.1124 18.6914 19.6748 18.7032 19.2338V15.1967H19.7444V19.2785C19.7228 19.6302 19.8397 19.9765 20.0702 20.243C20.1882 20.3595 20.3294 20.4498 20.4845 20.5081C20.6397 20.5665 20.8054 20.5915 20.9709 20.5816C21.1383 20.5917 21.306 20.5668 21.4633 20.5085C21.6205 20.4502 21.7639 20.3598 21.8843 20.243C22.1148 19.9765 22.2318 19.6302 22.2101 19.2785V15.1967H23.2513V19.2338C23.2671 19.6737 23.1796 20.1113 22.9958 20.5113C22.825 20.8534 22.5528 21.1344 22.2165 21.3162C21.835 21.5095 21.4111 21.6039 20.9837 21.5908C20.5557 21.6109 20.1296 21.5231 19.7444 21.3353Z"
            fill="#575757"
          />
        </svg>

        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.4264 18.1096L14.0171 11.7003C14.9107 10.4843 15.3961 9.01659 15.4036 7.50765C15.4085 6.06713 14.9855 4.6576 14.1883 3.45779C13.391 2.25799 12.2555 1.32197 10.9255 0.768427C9.5956 0.214887 8.13124 0.0687638 6.71815 0.348589C5.30506 0.628415 4.0069 1.32158 2.98829 2.34019C1.96968 3.3588 1.27652 4.65696 0.996691 6.07004C0.716866 7.48313 0.862988 8.94749 1.41653 10.2774C1.97007 11.6074 2.90609 12.7429 4.1059 13.5402C5.3057 14.3374 6.71523 14.7604 8.15575 14.7555C9.67037 14.7515 11.1445 14.2659 12.365 13.369L18.7743 19.7783L20.4264 18.1096ZM3.09971 7.50765C3.0882 6.50926 3.37353 5.52995 3.91949 4.69398C4.46545 3.85801 5.24744 3.20306 6.16623 2.81223C7.08502 2.42141 8.0992 2.31232 9.08009 2.49881C10.061 2.68531 10.9644 3.15897 11.6756 3.85972C12.3869 4.56046 12.8739 5.45669 13.075 6.43469C13.2761 7.41269 13.1821 8.42839 12.805 9.35289C12.4279 10.2774 11.7847 11.069 10.9569 11.6274C10.1292 12.1857 9.15421 12.4856 8.15575 12.489C6.82569 12.4956 5.54711 11.9753 4.59963 11.0418C3.65215 10.1084 3.11286 8.83767 3.09971 7.50765Z"
            fill="#575757"
          />
        </svg>
      </div>

      {/* Texto "Tiendanimal" centrado */}
      {/* Íconos de usuario y carrito */}
      <div className="flex items-center gap-4">
        <Image
          aria-hidden
          src="/file.svg"
          alt="User icon"
          width={187}
          height={25}
        />
      </div>

      {/* Íconos de usuario y carrito */}
      <div className="flex items-center gap-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.4203 14.6835C18.6244 13.3415 20.0622 10.9457 20.0622 8.16682C20.0622 3.95009 16.6121 0.5 12.3954 0.5C8.17866 0.5 4.72857 3.95009 4.72857 8.16682C4.72857 10.9448 6.16641 13.3415 8.37043 14.6835C4.53725 16.1208 1.66202 19.475 0.895386 23.5H2.8122C3.77061 19.0915 7.69968 15.8332 12.3954 15.8332C17.0911 15.8332 21.0202 19.0915 21.9786 23.5H23.8954C23.1287 19.3792 20.254 16.025 16.4203 14.6835ZM6.64539 8.16682C6.64539 5.00438 9.23295 2.41682 12.3954 2.41682C15.5578 2.41682 18.1458 5.00438 18.1458 8.16682C18.1458 11.3292 15.5578 13.9168 12.3954 13.9168C9.23295 13.9168 6.64539 11.3292 6.64539 8.16682Z"
            fill="#575757"
          />
        </svg>

        <svg
          width="32"
          height="26"
          viewBox="0 0 32 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2180_215)">
            <path
              d="M9.01972 20.4141H23.3941C23.7508 20.4141 24.0649 20.1778 24.1607 19.8287L27.355 8.54946C27.4242 8.30777 27.3763 8.04458 27.2273 7.84048C27.0782 7.63638 26.8386 7.51822 26.5884 7.51822H7.07119L6.50154 4.92401C6.41636 4.56415 6.09161 4.30096 5.71894 4.30096H0.927482C0.485604 4.30096 0.128906 4.66082 0.128906 5.10662C0.128906 5.55242 0.485604 5.91228 0.927482 5.91228H5.08008C5.18123 6.37419 7.81653 18.314 7.9656 19.0015C8.1892 20.065 8.67899 20.4141 9.01972 20.4141ZM25.4225 9.19399L22.718 18.7437H9.63728L7.53437 9.19399H25.4225Z"
              fill="#575757"
            />
            <path
              d="M21.7224 25.6885C22.8955 25.6885 23.8466 24.729 23.8466 23.5454C23.8466 22.3618 22.8955 21.4024 21.7224 21.4024C20.5492 21.4024 19.5981 22.3618 19.5981 23.5454C19.5981 24.729 20.5492 25.6885 21.7224 25.6885Z"
              fill="#575757"
            />
            <path
              d="M10.718 25.6885C11.8911 25.6885 12.8422 24.729 12.8422 23.5454C12.8422 22.3618 11.8911 21.4024 10.718 21.4024C9.54479 21.4024 8.59375 22.3618 8.59375 23.5454C8.59375 24.729 9.54479 25.6885 10.718 25.6885Z"
              fill="#575757"
            />
          </g>
          <ellipse
            cx="25.2902"
            cy="6.70968"
            rx="6.70968"
            ry="6.70968"
            fill="#CC3872"
          />
          <path
            d="M27.6626 9.752C28.1426 9.752 28.3826 9.956 28.3826 10.364C28.3826 10.788 28.1426 11 27.6626 11H23.1026C22.8946 11 22.7306 10.94 22.6106 10.82C22.4906 10.692 22.4306 10.536 22.4306 10.352C22.4306 10.112 22.5226 9.896 22.7066 9.704L25.4426 6.764C25.7786 6.396 26.0226 6.06 26.1746 5.756C26.3346 5.444 26.4146 5.136 26.4146 4.832C26.4146 4.456 26.3066 4.168 26.0906 3.968C25.8746 3.768 25.5666 3.668 25.1666 3.668C24.8386 3.668 24.5186 3.732 24.2066 3.86C23.9026 3.98 23.5946 4.148 23.2826 4.364C23.2026 4.42 23.1226 4.468 23.0426 4.508C22.9626 4.54 22.8826 4.556 22.8026 4.556C22.6666 4.556 22.5466 4.492 22.4426 4.364C22.3466 4.236 22.2986 4.084 22.2986 3.908C22.2986 3.788 22.3186 3.684 22.3586 3.596C22.4066 3.508 22.4786 3.424 22.5746 3.344C22.9266 3.064 23.3386 2.844 23.8106 2.684C24.2826 2.516 24.7546 2.432 25.2266 2.432C26.0506 2.432 26.7066 2.64 27.1946 3.056C27.6906 3.472 27.9386 4.032 27.9386 4.736C27.9386 5.224 27.8346 5.684 27.6266 6.116C27.4186 6.54 27.0666 7.016 26.5706 7.544L24.4946 9.752H27.6626Z"
            fill="white"
          />
          <defs>
            <clipPath id="clip0_2180_215">
              <rect
                width="27.2581"
                height="21.8065"
                fill="white"
                transform="translate(0.128906 4.19354)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </header>
  );
}