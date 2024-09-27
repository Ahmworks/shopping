import axios from "axios";
import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Category } from "@mui/icons-material";

function CategoryBar({ getProducts, selected, setSelected }) {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const baseUrl = "https://fakestoreapi.com/products/categories";
    try {
      const { data } = await axios(baseUrl);
      setCategories(data);
    } catch (error) {}
  };
  useEffect(() => {
    getCategories();
  }, []);

  const handleClick = (e) => {
    setSelected(e.target.value);
    getProducts(e.target.value && `/category/${e.target.value}`);
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{ justifyContent: "center" }}
        onClick={handleClick}
        value={selected}
      >
        <FormControlLabel value="" control={<Radio />} label="All" />
        {categories.map((category, i) => (
          <FormControlLabel
            key={i}
            value={category}
            control={<Radio />}
            label={category}
            sx={{ textTransform: "capitalize" }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default CategoryBar;
