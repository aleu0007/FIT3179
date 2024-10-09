// js/navbar.js

function changeContent(section) {
  const contentMap = {
    section1: {
      title: "Cost of an Energy Sufficient Meal",
      text: "Content for Section 1 goes here.",
      chart: "js/scatter_energy_sufficient_price.json"
    },
    section2: {
      title: "Cost of a Nutrient Sufficient Meal",
      text: "Content for Section 2 goes here.",
      chart: "js/scatter_nutrient_sufficient_price.json"
    },
    section3: {
      title: "Cost of a Healthy Meal",
      text: "Content for Section 3 goes here.",
      chart: "js/scatter_healthy_meal_price.json"
    }
  };

  // Check if the section exists in contentMap
  if (contentMap[section]) {
    document.getElementById('content-title').innerText = contentMap[section].title;
    document.getElementById('content-text').innerText = contentMap[section].text;

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
