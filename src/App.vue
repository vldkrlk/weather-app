<script setup lang="ts">
import WeatherApi from "./api/weather";

const api = new WeatherApi();
api.getCurrentWeather().then((data) => {
  console.log(data);
});
</script>
<template>
  <div class="wrap">
    <div class="side-bar">
      <section class="section today-section">
        <div>
          <button class="search-btn">
            <div>
              <img src="./assets/svg/search.svg" />
            </div>
            <div>
              <span>Search for places...</span>
            </div>
          </button>
        </div>
        <div class="today-section__ico-block">
          <img class="today-section__ico" src="./assets/svg/ico.svg" />
        </div>
        <div class="today-info">
          <div class="today-info__main">
            <div class="today-info__degrees">
              <span class="today-info__degrees-text">
                <span class="today-info__degree">9</span>
                <span class="today-info__degree-unit">°C</span>
              </span>
            </div>
            <div class="today-info__text">
              <div class="today-info__city">
                <span>Kyiv, UA</span>
              </div>
              <div class="today-info__date">
                <div>
                  <span class="today-info__date-day">Monday,</span>
                  <span class="today-info__date-time">14:21</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="content">
      <div class="content-main">
        <header class="content-main__header">
          <div class="content-main__header-body">
            <a class="title-btn">Today</a>
            <a class="title-btn title-btn_active">Week</a>
          </div>
          <div>
            <div>
              <button></button>
              <button></button>
            </div>
          </div>
        </header>
        <div class="content-days">
          <div class="content-days__item">
            <h3>Mon</h3>
            <div>
              <svg
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.4688 10.1562V4.0625H34.5312V10.1562H30.4688ZM41.9129 12.1343L44.9598 6.85696L48.478 8.88821L45.4311 14.1655L41.9129 12.1343ZM32.5 46.7188C40.3528 46.7188 46.7188 40.3528 46.7188 32.5C46.7188 24.6472 40.3528 18.2812 32.5 18.2812C24.6472 18.2812 18.2812 24.6472 18.2812 32.5C18.2812 40.3528 24.6472 46.7188 32.5 46.7188ZM32.5 50.7812C42.5965 50.7812 50.7812 42.5965 50.7812 32.5C50.7812 22.4035 42.5965 14.2188 32.5 14.2188C22.4035 14.2188 14.2188 22.4035 14.2188 32.5C14.2188 42.5965 22.4035 50.7812 32.5 50.7812ZM54.8438 30.4688H60.9375V34.5312H54.8438V30.4688ZM56.1119 16.5221L50.8346 19.569L52.8658 23.0872L58.1432 20.0404L56.1119 16.5221ZM16.5221 8.88821L19.569 14.1655L23.0872 12.1343L20.0404 6.85696L16.5221 8.88821ZM12.1342 23.0872L6.85683 20.0404L8.88808 16.5221L14.1654 19.569L12.1342 23.0872ZM30.4688 54.8438V60.9375H34.5312V54.8438H30.4688ZM10.1562 30.4688H4.0625V34.5312H10.1562V30.4688ZM6.85672 44.9596L12.1341 41.9128L14.1653 45.431L8.88797 48.4779L6.85672 44.9596ZM19.5691 50.8348L16.5223 56.1121L20.0405 58.1434L23.0874 52.8661L19.5691 50.8348ZM44.9596 58.1434L41.9128 52.8661L45.431 50.8348L48.4779 56.1121L44.9596 58.1434ZM50.8347 45.431L56.112 48.4779L58.1433 44.9596L52.8659 41.9128L50.8347 45.431Z"
                  fill="url(#paint0_linear_10_1155)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_10_1155"
                    x1="32.5"
                    y1="4.0625"
                    x2="32.5"
                    y2="60.9375"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EFC977" />
                    <stop offset="1" stop-color="#E07256" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="content-days__item-degree">
              <div class="content-days__item-degree-body">
                <span>°5</span>
                <span class="gray">°8</span>
              </div>
            </div>
          </div>
          <div class="content-days__item">
            <h3>Tue</h3>
            <div>
              <svg
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.2812 47.4242C9.98871 44.3144 4.0625 36.078 4.0625 26.4062C4.0625 14.0661 13.7099 4.0625 25.6106 4.0625C35.4839 4.0625 43.8061 10.9479 46.3552 20.3407C46.6428 20.322 46.9328 20.3125 47.2251 20.3125C54.7982 20.3125 60.9375 26.6784 60.9375 34.5312C60.9375 42.3841 54.7982 48.75 47.2251 48.75C47.0555 48.75 46.8867 48.7467 46.7188 48.7405V44.6875H47.334V44.6867C52.4792 44.6255 56.875 40.2401 56.875 34.5312C56.875 28.782 52.417 24.375 47.2251 24.375C45.7584 24.375 44.3501 24.7268 43.0844 25.3612C43.02 24.1794 42.8466 23.0277 42.5748 21.917L42.5687 21.9194C40.6435 13.9141 33.686 8.125 25.6106 8.125C16.0911 8.125 8.125 16.1697 8.125 26.4062C8.125 33.8439 12.3303 40.1243 18.2812 43.0028V47.4242Z"
                  fill="url(#paint0_linear_10_1163)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M34.8725 33.4045L38.2527 35.658L32.2329 44.6875H42.5662L31.4382 60.0955L28.145 57.7169L34.621 48.75H24.6421L34.8725 33.4045Z"
                  fill="url(#paint1_linear_10_1163)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M41.3581 54.6902C40.9364 55.6782 40.6268 56.7344 40.627 57.706C40.6276 59.4906 41.9922 60.9375 43.6749 60.9375C45.3578 60.9375 46.7214 59.4906 46.7208 57.706C46.7206 56.7976 46.3789 55.7215 45.9245 54.6918C45.0212 52.6449 43.6719 50.7812 43.6719 50.7812C43.6719 50.7812 42.2589 52.5801 41.3581 54.6902Z"
                  fill="url(#paint2_linear_10_1163)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.0144 54.6902C18.5926 55.6782 18.2831 56.7344 18.2834 57.706C18.2839 59.4906 19.6485 60.9375 21.3312 60.9375C23.0141 60.9375 24.3776 59.4906 24.377 57.706C24.3768 56.7976 24.0352 55.7215 23.5808 54.6918C22.6775 52.6449 21.3281 50.7812 21.3281 50.7812C21.3281 50.7812 19.9152 52.5801 19.0144 54.6902Z"
                  fill="url(#paint3_linear_10_1163)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_10_1163"
                    x1="32.5"
                    y1="4.0625"
                    x2="32.5"
                    y2="48.75"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#95B6F6" />
                    <stop offset="1" stop-color="#5193DE" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_10_1163"
                    x1="33.6042"
                    y1="33.4045"
                    x2="33.6042"
                    y2="60.0955"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F5BD52" />
                    <stop offset="1" stop-color="#F5DA79" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_10_1163"
                    x1="43.6719"
                    y1="50.7812"
                    x2="43.6719"
                    y2="60.9375"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#95B6F6" />
                    <stop offset="1" stop-color="#5193DE" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_10_1163"
                    x1="21.3281"
                    y1="50.7812"
                    x2="21.3281"
                    y2="60.9375"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#95B6F6" />
                    <stop offset="1" stop-color="#5193DE" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="content-days__item-degree">
              <div class="content-days__item-degree-body">
                <span>°5</span>
                <span class="gray">°8</span>
              </div>
            </div>
          </div>
          <div class="content-days__item">
            <h3>Wed</h3>
            <div>
              <svg
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.4688 4.0625V10.1562H34.5312V4.0625H30.4688ZM41.8689 43.196C44.8417 40.5899 46.7188 36.764 46.7188 32.5C46.7188 24.6472 40.3528 18.2812 32.5 18.2812C24.6472 18.2812 18.2812 24.6472 18.2812 32.5C18.2812 32.788 18.2898 33.074 18.3067 33.3578C16.9158 33.8467 15.6172 34.5317 14.4442 35.3795C14.2958 34.4415 14.2188 33.4799 14.2188 32.5C14.2188 22.4035 22.4035 14.2188 32.5 14.2188C42.5965 14.2188 50.7812 22.4035 50.7812 32.5C50.7812 37.5141 48.7626 42.0568 45.4935 45.3596C44.4612 44.4037 43.2301 43.6593 41.8689 43.196ZM54.8438 30.4688H60.9375V34.5312H54.8438V30.4688ZM56.1119 16.5221L50.8347 19.569L52.8659 23.0872L58.1431 20.0404L56.1119 16.5221ZM41.9128 12.1343L44.9597 6.85695L48.478 8.8882L45.4311 14.1656L41.9128 12.1343ZM16.5221 8.8882L19.569 14.1656L23.0872 12.1343L20.0404 6.85695L16.5221 8.8882ZM12.1342 23.0872L6.85683 20.0404L8.88808 16.5221L14.1654 19.569L12.1342 23.0872ZM10.1562 30.4688H4.0625V34.5312H10.1562V30.4688ZM56.1121 48.4778L50.8347 45.4309L52.8659 41.9128L58.1433 44.9597L56.1121 48.4778Z"
                  fill="url(#paint0_linear_10_1157)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.3594 56.8746C23.4158 56.8746 23.4723 56.8742 23.5286 56.8734H38.4581C38.4841 56.8738 38.5101 56.8742 38.5361 56.8746H38.5938V56.8748C41.9593 56.8748 44.6875 54.1464 44.6875 50.781C44.6875 47.4155 41.9593 44.6873 38.5938 44.6873C37.0309 44.6873 35.6056 45.2755 34.527 46.2428C34.5355 46.0639 34.5398 45.8841 34.5398 45.7031C34.5398 44.3314 34.2926 43.0176 33.8402 41.8035C35.2584 41.051 36.8763 40.6248 38.5938 40.6248C44.2028 40.6248 48.75 45.172 48.75 50.781C48.75 56.3901 44.2028 60.9373 38.5938 60.9373C38.569 60.9373 38.5442 60.9371 38.5194 60.9371H23.4382V60.9369C23.4118 60.9369 23.3856 60.9371 23.3594 60.9371C14.9457 60.9371 8.125 54.1164 8.125 45.7027C8.125 37.2889 14.9457 30.4683 23.3594 30.4683C30.0058 30.4683 35.6582 34.7244 37.7394 40.6601C36.337 40.7769 35.0157 41.1785 33.8333 41.807C32.2522 37.5578 28.1594 34.5308 23.3594 34.5308C17.1893 34.5308 12.1875 39.5326 12.1875 45.7027C12.1875 51.8726 17.1893 56.8746 23.3594 56.8746Z"
                  fill="url(#paint1_linear_10_1157)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_10_1157"
                    x1="32.5"
                    y1="4.0625"
                    x2="32.5"
                    y2="48.4778"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EFC977" />
                    <stop offset="1" stop-color="#E07256" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_10_1157"
                    x1="28.4375"
                    y1="30.4683"
                    x2="28.4375"
                    y2="60.9373"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#B2D4F7" />
                    <stop offset="1" stop-color="#D9E2F3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="content-days__item-degree">
              <div class="content-days__item-degree-body">
                <span>°5</span>
                <span class="gray">°8</span>
              </div>
            </div>
          </div>
          <div class="content-days__item">
            <h3>Thu</h3>
            <div>
              <svg
                width="71"
                height="71"
                viewBox="0 0 71 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31.4261 35.5024L21.0394 41.5775L12.8062 37.7982L11.1161 41.5162L16.7348 44.0952L13.6442 45.9028L15.6557 49.4323L18.7458 47.6251L18.1414 53.8432L22.1647 54.2192L23.0504 45.1074L33.4419 39.0295V51.2479L26.089 56.5846L28.4753 59.8726L33.4419 56.2677V59.875H37.5044V56.2675L42.4715 59.8726L44.8578 56.5846L37.5044 51.2477V39.0575L47.9193 45.149L48.8051 54.262L52.8286 53.8859L52.2239 47.6668L55.3146 49.4746L57.3262 45.9451L54.2361 44.1375L59.8539 41.5588L58.1637 37.841L49.9314 41.6198L39.4723 35.5024L49.8991 29.4038L58.1858 33.2077L59.876 29.4899L54.2038 26.8861L57.3303 25.0573L55.3189 21.5279L52.2519 23.3216L52.8507 17.1628L48.8272 16.7867L47.9473 25.8394L37.5044 31.9473V19.7935L44.9049 14.4223L42.5188 11.1345L37.5044 14.7737V11.125H33.4419V14.705L28.5227 11.1345L26.1363 14.4223L33.4419 19.7247V31.9754L23.0823 25.9162L22.1908 16.7445L18.1675 17.1206L18.7777 23.3984L15.6516 21.57L13.6401 25.0996L16.7068 26.8932L11.1422 29.4477L12.8323 33.1655L21.0115 29.4109L31.4261 35.5024Z"
                  fill="url(#paint0_linear_10_1140)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_10_1140"
                    x1="35.4959"
                    y1="11.125"
                    x2="35.4959"
                    y2="59.875"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#B2D4F7" />
                    <stop offset="1" stop-color="#D9E2F3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="content-days__item-degree">
              <div class="content-days__item-degree-body">
                <span>°5</span>
                <span class="gray">°8</span>
              </div>
            </div>
          </div>
          <div class="content-days__item">
            <h3>Fri</h3>
            <div>
              <svg
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.4688 10.1562V4.0625H34.5312V10.1562H30.4688ZM41.9129 12.1343L44.9598 6.85696L48.478 8.88821L45.4311 14.1655L41.9129 12.1343ZM32.5 46.7188C40.3528 46.7188 46.7188 40.3528 46.7188 32.5C46.7188 24.6472 40.3528 18.2812 32.5 18.2812C24.6472 18.2812 18.2812 24.6472 18.2812 32.5C18.2812 40.3528 24.6472 46.7188 32.5 46.7188ZM32.5 50.7812C42.5965 50.7812 50.7812 42.5965 50.7812 32.5C50.7812 22.4035 42.5965 14.2188 32.5 14.2188C22.4035 14.2188 14.2188 22.4035 14.2188 32.5C14.2188 42.5965 22.4035 50.7812 32.5 50.7812ZM54.8438 30.4688H60.9375V34.5312H54.8438V30.4688ZM56.1119 16.5221L50.8346 19.569L52.8658 23.0872L58.1432 20.0404L56.1119 16.5221ZM16.5221 8.88821L19.569 14.1655L23.0872 12.1343L20.0404 6.85696L16.5221 8.88821ZM12.1342 23.0872L6.85683 20.0404L8.88808 16.5221L14.1654 19.569L12.1342 23.0872ZM30.4688 54.8438V60.9375H34.5312V54.8438H30.4688ZM10.1562 30.4688H4.0625V34.5312H10.1562V30.4688ZM6.85672 44.9596L12.1341 41.9128L14.1653 45.431L8.88797 48.4779L6.85672 44.9596ZM19.5691 50.8348L16.5223 56.1121L20.0405 58.1434L23.0874 52.8661L19.5691 50.8348ZM44.9596 58.1434L41.9128 52.8661L45.431 50.8348L48.4779 56.1121L44.9596 58.1434ZM50.8347 45.431L56.112 48.4779L58.1433 44.9596L52.8659 41.9128L50.8347 45.431Z"
                  fill="url(#paint0_linear_10_1156)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_10_1156"
                    x1="32.5"
                    y1="4.0625"
                    x2="32.5"
                    y2="60.9375"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EFC977" />
                    <stop offset="1" stop-color="#E07256" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="content-days__item-degree">
              <div class="content-days__item-degree-body">
                <span>°5</span>
                <span class="gray">°8</span>
              </div>
            </div>
          </div>
          <div class="content-days__item">
            <h3>Sat</h3>
            <div>
              <svg
                width="71"
                height="71"
                viewBox="0 0 71 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31.4261 35.5024L21.0394 41.5775L12.8062 37.7982L11.1161 41.5162L16.7348 44.0952L13.6442 45.9028L15.6557 49.4323L18.7458 47.6251L18.1414 53.8432L22.1647 54.2192L23.0504 45.1074L33.4419 39.0295V51.2479L26.089 56.5846L28.4753 59.8726L33.4419 56.2677V59.875H37.5044V56.2675L42.4715 59.8726L44.8578 56.5846L37.5044 51.2477V39.0575L47.9193 45.149L48.8051 54.262L52.8286 53.8859L52.2239 47.6668L55.3146 49.4746L57.3262 45.9451L54.2361 44.1375L59.8539 41.5588L58.1637 37.841L49.9314 41.6198L39.4723 35.5024L49.8991 29.4038L58.1858 33.2077L59.876 29.4899L54.2038 26.8861L57.3303 25.0573L55.3189 21.5279L52.2519 23.3216L52.8507 17.1628L48.8272 16.7867L47.9473 25.8394L37.5044 31.9473V19.7935L44.9049 14.4223L42.5188 11.1345L37.5044 14.7737V11.125H33.4419V14.705L28.5227 11.1345L26.1363 14.4223L33.4419 19.7247V31.9754L23.0823 25.9162L22.1908 16.7445L18.1675 17.1206L18.7777 23.3984L15.6516 21.57L13.6401 25.0996L16.7068 26.8932L11.1422 29.4477L12.8323 33.1655L21.0115 29.4109L31.4261 35.5024Z"
                  fill="url(#paint0_linear_10_1140)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_10_1140"
                    x1="35.4959"
                    y1="11.125"
                    x2="35.4959"
                    y2="59.875"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#B2D4F7" />
                    <stop offset="1" stop-color="#D9E2F3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="content-days__item-degree">
              <div class="content-days__item-degree-body">
                <span>°5</span>
                <span class="gray">°8</span>
              </div>
            </div>
          </div>
          <div class="content-days__item">
            <h3>Sun</h3>
            <div>
              <svg
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.4688 10.1562V4.0625H34.5312V10.1562H30.4688ZM41.9129 12.1343L44.9598 6.85696L48.478 8.88821L45.4311 14.1655L41.9129 12.1343ZM32.5 46.7188C40.3528 46.7188 46.7188 40.3528 46.7188 32.5C46.7188 24.6472 40.3528 18.2812 32.5 18.2812C24.6472 18.2812 18.2812 24.6472 18.2812 32.5C18.2812 40.3528 24.6472 46.7188 32.5 46.7188ZM32.5 50.7812C42.5965 50.7812 50.7812 42.5965 50.7812 32.5C50.7812 22.4035 42.5965 14.2188 32.5 14.2188C22.4035 14.2188 14.2188 22.4035 14.2188 32.5C14.2188 42.5965 22.4035 50.7812 32.5 50.7812ZM54.8438 30.4688H60.9375V34.5312H54.8438V30.4688ZM56.1119 16.5221L50.8346 19.569L52.8658 23.0872L58.1432 20.0404L56.1119 16.5221ZM16.5221 8.88821L19.569 14.1655L23.0872 12.1343L20.0404 6.85696L16.5221 8.88821ZM12.1342 23.0872L6.85683 20.0404L8.88808 16.5221L14.1654 19.569L12.1342 23.0872ZM30.4688 54.8438V60.9375H34.5312V54.8438H30.4688ZM10.1562 30.4688H4.0625V34.5312H10.1562V30.4688ZM6.85672 44.9596L12.1341 41.9128L14.1653 45.431L8.88797 48.4779L6.85672 44.9596ZM19.5691 50.8348L16.5223 56.1121L20.0405 58.1434L23.0874 52.8661L19.5691 50.8348ZM44.9596 58.1434L41.9128 52.8661L45.431 50.8348L48.4779 56.1121L44.9596 58.1434ZM50.8347 45.431L56.112 48.4779L58.1433 44.9596L52.8659 41.9128L50.8347 45.431Z"
                  fill="url(#paint0_linear_10_1155)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_10_1155"
                    x1="32.5"
                    y1="4.0625"
                    x2="32.5"
                    y2="60.9375"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EFC977" />
                    <stop offset="1" stop-color="#E07256" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="content-days__item-degree">
              <div class="content-days__item-degree-body">
                <span>°5</span>
                <span class="gray">°8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-highlights">
        <h2>Todays highlights</h2>
        <div class="todays-highlights">
          <div class="todays-highlights__item"></div>
          <div class="todays-highlights__item"></div>
          <div class="todays-highlights__item"></div>
          <div class="todays-highlights__item"></div>
          <div class="todays-highlights__item"></div>
          <div class="todays-highlights__item"></div>
          <div class="todays-highlights__item_map"></div>
        </div>
      </div>
    </div>
  </div>
</template>
