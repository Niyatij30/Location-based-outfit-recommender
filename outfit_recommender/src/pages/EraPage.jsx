import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import EraCard from "../components/EraCard";
import { useLocation, useNavigation } from "react-router-dom";
import Pants from "./image/brown pants.png"
import Blouse from "./image/blue blouse.png"
import Shirt from "./image/white shirt.png"
import Skirt from "./image/green skirt .png"
import Cardigan from "./image/yellowcardigan.png"
import Dress from "./image/pink dress.png"
import "./EraPage.css"

const EraPage = () => {
  const data = [
    {
      "ItemName": "Jacket",
      'Era': "40s",
      'Color': "Brown",
      'Length': "Long",
      'Material': "Wool",
      "Link": "http://example.com/jacket_40s.jpg",
    },
    {
      "ItemName": "Blouse",
      'Era': "40s",
      'Color': "White",
      'Length': "Medium",
      'Material': "Silk",
      "Link": "http://example.com/blouse_40s.jpg",
    },
    {
      "ItemName": "Skirt",
      'Era': "40s",
      'Color': "Navy",
      'Length': "Long",
      'Material': "Cotton",
      "Link": "http://example.com/skirt_40s.jpg",
    },
    {
      "ItemName": "Dress",
      'Era': "40s",
      'Color': "Red",
      'Length': "Long",
      'Material': "Wool",
      "Link": "http://example.com/dress_40s.jpg",
    },
    {
      "ItemName": "Hat",
      'Era': "40s",
      'Color': "Black",
      'Length': "Short",
      'Material': "Felt",
      "Link": "http://example.com/hat_40s.jpg",
    },
    {
      "ItemName": "Coat",
      'Era': "40s",
      'Color': "Gray",
      'Length': "Long",
      'Material': "Wool",
      "Link": "http://example.com/coat_40s.jpg",
    },
    {
      "ItemName": "Shirt",
      'Era': "50s",
      'Color': "White",
      'Length': "Medium",
      'Material': "Cotton",
      "Link": Shirt,
    },
    {
      "ItemName": "Dress",
      'Era': "50s",
      'Color': "Pink",
      'Length': "Long",
      'Material': "Silk",
      "Link": Dress,
    },
    {
      "ItemName": "Cardigan",
      'Era': "50s",
      'Color': "Yellow",
      'Length': "Medium",
      'Material': "Wool",
      "Link": Cardigan,
    },
    {
      "ItemName": "Skirt",
      'Era': "50s",
      'Color': "Green",
      'Length': "Medium",
      'Material': "Cotton",
      "Link": Skirt,
    },
    {
      "ItemName": "Blouse",
      'Era': "50s",
      'Color': "Blue",
      'Length': "Short",
      'Material': "Silk",
      "Link": Blouse,
    },
    {
      "ItemName": "Pants",
      'Era': "50s",
      'Color': "Brown",
      'Length': "Long",
      'Material': "Wool",
      "Link": Pants,
    },
    {
      "ItemName": "Skirt",
      'Era': "60s",
      'Color': "Red",
      'Length': "Short",
      'Material': "Polyester",
      "Link": "http://example.com/skirt_60s.jpg",
    },
    {
      "ItemName": "Dress",
      'Era': "60s",
      'Color': "Orange",
      'Length': "Long",
      'Material': "Cotton",
      "Link": "http://example.com/dress_60s.jpg",
    },
    {
      "ItemName": "Trousers",
      'Era': "60s",
      'Color': "Black",
      'Length': "Long",
      'Material': "Wool",
      "Link": "http://example.com/trousers_60s.jpg",
    },
    {
      "ItemName": "Blouse",
      'Era': "60s",
      'Color': "Purple",
      'Length': "Medium",
      'Material': "Silk",
      "Link": "http://example.com/blouse_60s.jpg",
    },
    {
      "ItemName": "Jacket",
      'Era': "60s",
      'Color': "Green",
      'Length': "Short",
      'Material': "Cotton",
      "Link": "http://example.com/jacket_60s.jpg",
    },
    {
      "ItemName": "Shirt",
      'Era': "60s",
      'Color': "Blue",
      'Length': "Medium",
      'Material': "Polyester",
      "Link": "http://example.com/shirt_60s.jpg",
    },
    {
      "ItemName": "Dress",
      'Era': "90s",
      'Color': "Black",
      'Length': "Long",
      'Material': "Silk",
      "Link": "http://example.com/dress_90s.jpg",
    },
    {
      "ItemName": "T-Shirt",
      'Era': "90s",
      'Color': "White",
      'Length': "Short",
      'Material': "Cotton",
      "Link": "http://example.com/tshirt_90s.jpg",
    },
    {
      "ItemName": "Jeans",
      'Era': "90s",
      'Color': "Blue",
      'Length': "Long",
      'Material': "Denim",
      "Link": "http://example.com/jeans_90s.jpg",
    },
    {
      "ItemName": "Jacket",
      'Era': "90s",
      'Color': "Green",
      'Length': "Medium",
      'Material': "Nylon",
      "Link": "http://example.com/jacket_90s.jpg",
    },
    {
      "ItemName": "Skirt",
      'Era': "90s",
      'Color': "Pink",
      'Length': "Short",
      'Material': "Polyester",
      "Link": "http://example.com/skirt_90s.jpg",
    },
    {
      "ItemName": "Hoodie",
      'Era': "90s",
      'Color': "Gray",
      'Length': "Medium",
      'Material': "Fleece",
      "Link": "http://example.com/hoodie_90s.jpg",
    },
    {
      "ItemName": "T-Shirt",
      'Era': "2000s",
      'Color': "Blue",
      'Length': "Short",
      'Material': "Cotton",
      "Link": "http://example.com/tshirt_2000s.jpg",
    },
    {
      "ItemName": "Hoodie",
      'Era': "2000s",
      'Color': "Black",
      'Length': "Medium",
      'Material': "Fleece",
      "Link": "http://example.com/hoodie_2000s.jpg",
    },
    {
      "ItemName": "Jeans",
      'Era': "2000s",
      'Color': "Dark Blue",
      'Length': "Long",
      'Material': "Denim",
      "Link": "http://example.com/jeans_2000s.jpg",
    },
    {
      "ItemName": "Dress",
      'Era': "2000s",
      'Color': "Pink",
      'Length': "Short",
      'Material': "Silk",
      "Link": "http://example.com/dress_2000s.jpg",
    },
    {
      "ItemName": "Jacket",
      'Era': "2000s",
      'Color': "Brown",
      'Length': "Medium",
      'Material': "Leather",
      "Link": "http://example.com/jacket_2000s.jpg",
    },
    {
      "ItemName": "Skirt",
      'Era': "2000s",
      'Color': "White",
      'Length': "Short",
      'Material': "Cotton",
      "Link": "http://example.com/skirt_2000s.jpg",
    },
  ];

  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastPath = pathSegments[pathSegments.length - 1];

  const [filterData, setFilterData] = useState([]);
  const [currentEra, setCurrentEra] = useState("");

  useEffect(() => {
    setCurrentEra(lastPath); // Update currentEra when lastPath changes
  }, [lastPath]);

  useEffect(() => {
    // Filter data based on currentEra
    const filteredData = data.filter((item) => item["Era"] === currentEra);
    setFilterData(filteredData);
    console.log(filterData);
  }, [currentEra]);

  return (
    <>
      <NavBar />
      <div className="card-container">
        {filterData.map((item, index) => (
          <EraCard key = {index} data = {item}/>
        ))}
      </div>
    </>
  );
};

export default EraPage;