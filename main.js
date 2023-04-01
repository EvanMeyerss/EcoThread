 // Get the button element and data element
const myButton = document.getElementById("myButton");
const myData = document.getElementById("myData");
 
// Add a click event listener to the button
myButton.addEventListener("click", function() {
  // Get the current URL
  //const currentUrl = window.location.href;

//Determines the user's current URL and outputs related data
chrome.tabs.query(
    {active: true, lastFocusedWindow: true},
    tabs => {
     let url = tabs[0].url
  
    if (url.includes("hm")) {
            myData.textContent = "The majority of H&M products are manufactured in China and Bangladesh, emitting between approximately 9 and 13 million kilograms of CO2 when shipped to the United States. Though it has traditionally been considered a higher contributor to overall carbon emissions in the fashion industry, the brand has recently vowed to decrease greenhouse gas emissions by 56% by 2030 and 90% by 2040. On the Fashion Transparency Index for the year of 2022, it was rated between 61 and 70 percent.";
        } 
         else if (url.includes("shein")) {
            myData.textContent = "Shein products are produced in Guangzhou, China, emitting around 9 million kilograms of CO2 when shipped to the United States. It is infamous for allegedly requiring its workers to work almost double the hours of a standard work week in the United States without proper compensation and is additionally rumored to steal designs from independent creators. On the Fashion Transparency Index for the year of 2022, it was rated between 0 and 10 percent.";
        }
        else if (url.includes("forever")) {
            myData.textContent = "Around sixty percent of Forever 21 products are manufactured in China, emitting approximately 9 million kilograms of CO2 when shipped to the United States. In 2012, Forever 21 faced lawsuits surrounding allegations that employees were underaged and not paid minimum wage, and the brand was sued by the United States Department of Labor for not providing information on workers’ wages. On the Fashion Transparency Index for the year of 2021, it was rated between 0 and 10 percent.";
        }
        else if (url.includes("urban")) {
            myData.textContent = "Around sixty percent of Forever 21 products are manufactured in China, emitting approximately 9 million kilograms of CO2 when shipped to the United States. On the Fashion Transparency Index for the year of 2021, it was rated between 11 and 20 percent.";
        }
        else if (url.includes("ae")) {
            myData.textContent = "The majority of American Eagle products are manufactured in China and Bangladesh, emitting between approximately 9 and 13 million kilograms of CO2 when shipped to the United States. On the Fashion Transparency Index for the year of 2022, it was rated between 11 and 20 percent.";
        }
        else if (url.includes("hollister")) {
            myData.textContent = "The majority of Hollister products are manufactured in China, Cambodia, and Vietnam, emitting between approximately 8 and 12 million kilograms of CO2 when shipped to the United States. On the Fashion Transparency Index for the year of 2022, it was rated between 11 and 20 percent.";
        }
        else if (url.includes("abercrombie")) {
            myData.textContent = "The majority of Abercrombie and Fitch products are manufactured in China and the Philippines, emitting between approximately 8 and 9 million kilograms of CO2 when shipped to the United States. On the Fashion Transparency Index for the year of 2022, it was rated between 11 and 20 percent.";
        }
        else if (url.includes("oldnavy")) {
            myData.textContent = "The majority of Old Navy products are manufactured in Bangladesh, Cambodia, and China, emitting between approximately 8 and 13 million kilograms of CO2 when shipped to the United States. On the Fashion Transparency Index for the year of 2022, it was rated between 41 and 50 percent.";
        }
        else if (url.includes("gap")) {
            myData.textContent = "The majority of GAP products are manufactured in Bangladesh, Cambodia, and China, emitting between approximately 9 million kilograms of CO2 when shipped to the United States. On the Fashion Transparency Index for the year of 2022, it was rated between 41 and 50 percent.";
        }
        else if (url.includes("nike")) {
            myData.textContent = "The majority of Nike products are manufactured in Vietnam and China, emitting between approximately 9 and 12 million kilograms of CO2 when shipped to the United States. On the Fashion Transparency Index for the year of 2022, it was rated between 51 and 60 percent.";
        }
        else {
            myData.textContent = "Currently no data available for this brand";
}
    });
});