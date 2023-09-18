import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import toast from "react-hot-toast";

export default function BarChart() {
  const [options, setOptions] = useState({
    color: ["#98d89e", "#ee8484"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Price",
      data: [],
    },
    {
      name: "Stock",
      data: [],
    },
  ]);

  useEffect(() => {
    const price = [];
    const stock = [];
    const title = [];

    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        // console.log(response);
        const slicedProducts = response.data.products.slice(0, 4);
        console.log(slicedProducts);
        slicedProducts.map((item) => {
          price.push(item.price);
          stock.push(item.stock);
          title.push(item.title);
        });

        setOptions({
          color: ["#98d89e", "#ee8484"],
          chart: {
            background: "transparent",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            categories: title,
          },
          legend: {
            position: "top",
          },
          grid: {
            show: false,
          },
        });
        setSeries([
          {
            name: "Price",
            data: price,
          },
          {
            name: "Stock",
            data: stock,
          },
        ]);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to fetch data.");
      });
  }, []);

  return (
    <div className="xl:w-[1000px] lg:w-[900px] max-xs:w-[85%] h-[359px] flex-shrink-0 rounded-[20px] border-[2px] border-[#e0e0e0] bg-white mt-[40.83px] lg:shadow-none max-xs:shadow-xl">
      <div className="xl:w-[1000px] lg:w-[900px] h-[359px] ml-[40px] pt-[30px]">
        <span className="w-[93px] text-black font-montserrat text-[18px] font-bold">
          Activities
        </span>
        <hr />
        <Chart
          options={options}
          series={series}
          type="bar"
          height="80%"
          width="90%"
        />
      </div>
    </div>
  );
}
