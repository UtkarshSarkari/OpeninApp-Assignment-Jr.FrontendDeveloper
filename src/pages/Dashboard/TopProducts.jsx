import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export default function TopProducts() {
  const [options, setOptions] = useState({
    labels: [],
  });

  const [series, setSeries] = useState([55, 31, 14]);

  useEffect(() => {
    const label = [];
    const discount = [];

    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        // console.log(response);
        const slicedProducts = response.data.products.slice(0, 4);
        // console.log(slicedProducts);
        slicedProducts.map((item) => {
          label.push(item.brand);
          discount.push(item.discountPercentage);
        });

        setOptions({
          labels: label,
        });
        setSeries(discount);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex flex-col xl:w-[480px] lg:w-[430px] max-xs:w-[100%] h-[256px] justify-center items-center flex-shrink-0 rounded-[20px] border-[2px] border-[#e0e0e0] bg-white lg:mt-0 max-xs:mt-10 lg:shadow-none max-xs:shadow-xl">
      <div className="flex items-center justify-between w-full">
        <span className="text-black font-montserrat text-[18px] font-bold ml-[40px] mb-[23.84px]">
          Top products
        </span>
        <span className="mr-[56px] mb-[23.84px] w-[97px] text-secondary-text font-montserrat text-[12px] font-normal">
          May - June 2021
        </span>
      </div>
      <div className="flex justify-center items-center">
        <Chart
          type="donut"
          width={300}
          height={160}
          series={series}
          options={options}
        />
      </div>
    </div>
  );
}
