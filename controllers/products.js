const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const queryObject = {};
  const { company, name, sort, select } = req.query;


  // advanced search 
  
  if (company) {
    queryObject.company = {
      $regex: company,
      $options: "i",
    };
  }
  if (name) {
    queryObject.name = {
      $regex: name,
      $options: "i",
    };
  }

  let apiData = Product.find(queryObject);

  // for sorting

  if (sort) {
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }

  // for selection of particular  fields

  if (select) {
    let selectList = select.split(",").join(" ");
    apiData = apiData.select(selectList);
    // console.log(select); //output = name,price
    // console.log(selectList); //output = name price
  }

  // console.log(company)
  // console.log(queryObject)
  // console.log(req.query);

  //  Pagination

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit);
  let skip = (page - 1) * limit;
  apiData = apiData.skip(skip).limit(limit);

  const myData = await apiData;
  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query);
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
