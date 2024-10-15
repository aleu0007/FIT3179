function changeContent(section) {
  const contentMap = {
    section1: {
      title: "Cost of an Energy Sufficient Meal",
      cost: "$0.83",
      text: `Global average calculated using the cheapest starchy staple available multiplied
      by quantities needed for 2,330 calories a day. 
      <br> <br>
      This type of diet is <strong> not suitable 
      in the long term </strong> as without nutrients health and wellbeing will decline.
      <br> <br>
      People who cannot afford energy sufficient meals are concentrated in <strong>low-income countries</strong>.`,
      chart: "js/scatter_energy_sufficient_price.json"
    },
    section2: {
      title: "Cost of a Nutrient Balanced Meal",
      cost: "$2.46",
      text: `Global average determined by adding together the most affordable selection of food items 
        that satisfy the energy and intake needs for 23 essential macro and micronutrients. 
        <br> <br>
        In low-income countries, more than <strong>three quarters</strong> of the population cannot afford a nutrient adequate meal. 
        <br> <br>
        In middle-income countries, more than <strong>half</strong> cannot afford it, but in high-income countries, only less than 1 percent cannot afford a nutrient adequate meal.`,
      chart: "js/scatter_nutrient_sufficient_price.json"
    },
    section3: {
      title: "Cost of a Healthy Meal",
      cost: "$3.31",
      text: `Global average calculated by meeting dietary requirements to protect long term health and prevent malnutrition.
        <br> <br>
        <strong>90%</strong> of low income countries population cannot afford a healthy meal.
        <strong>70%</strong> of middle income countries population cannot afford a healthy meal.
        <br> <br>
        Costs <strong> 1.3 times </strong> more than a nutrient balanced meal
        <br>
        Costs <strong> 4 times </strong> more than an energy sufficient meal`,
      chart: "js/scatter_healthy_meal_price.json"
    }
  };

  // Check if the section exists in contentMap
  if (contentMap[section]) {
    document.getElementById('content-title').innerText = contentMap[section].title;
    document.getElementById('content-cost').innerText = contentMap[section].cost;
    document.getElementById('content-text').innerHTML = contentMap[section].text; // Change to innerHTML

    // Clear previous chart
    document.getElementById('dynamic-chart').innerHTML = '';

    // Embed new chart
    vegaEmbed('#dynamic-chart', contentMap[section].chart, {"actions": false}).catch(console.error);
  } else {
    console.error(`Section ${section} not found in contentMap.`);
  }

  // Update active section
  const sections = document.querySelectorAll('.navbar div');
  sections.forEach(sectionDiv => {
    sectionDiv.classList.remove('active');
  });
  document.querySelector(`.navbar div[onclick="changeContent('${section}')"]`).classList.add('active');
}
