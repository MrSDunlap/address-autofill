const url =
  "https://address-completion.p.rapidapi.com/v1/geocode/autocomplete?text=Wiebkestieg%201%20Hamburg&limit=1&lang=en&countrycodes=de";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "00a8e91518msh36a4ff46e35582ap17fcc4jsn3aa913fb450a",
    "X-RapidAPI-Host": "address-completion.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
