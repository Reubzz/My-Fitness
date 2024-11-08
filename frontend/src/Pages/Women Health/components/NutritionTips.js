import React from "react";


function NutritionTips() {
  return (
    <div className="nutrition-tips">
      <h2>Nutrition Tips During Your Menstrual Cycle</h2>

      <div className="nutrition-grid">
        {/* Vitamin C Rich Foods */}
        <div className="nutrition-item">
          <h3>Vitamin C Rich Foods</h3>
          <ul>
            <li>Oranges</li>
            <li>Strawberries</li>
            <li>Bell Peppers</li>
            <li>Broccoli</li>
            <li>Kale</li>
          </ul>
          <img
            src="https://chandigarhfirst.com/wp-content/uploads/2021/07/shutterstock_1679553382-750x536.jpg"
            alt="Vitamin C rich foods"
          />
        </div>

        {/* Iron Rich Foods */}
        <div className="nutrition-item">
          <h3>Iron Rich Foods</h3>
          <ul>
            <li>Spinach</li>
            <li>Red Meat</li>
            <li>Lentils</li>
            <li>Chickpeas</li>
            <li>Tofu</li>
          </ul>
          <img
            src="https://www.healthifyme.com/blog/wp-content/uploads/2019/05/healthifyme_67982657_145196893393046_7457652034209688348_n-1024x1024.jpg"
            alt="Iron rich foods"
          />
        </div>

        {/* Magnesium Rich Foods */}
        <div className="nutrition-item">
          <h3>Magnesium Rich Foods</h3>
          <ul>
            <li>Almonds</li>
            <li>Avocados</li>
            <li>Spinach</li>
            <li>Kale</li>
          </ul>
          <img
            src="https://www.healthifyme.com/blog/wp-content/uploads/2018/05/Magnesium-feature-image.jpeg"
            alt="Magnesium rich foods"
          />
        </div>

        {/* Omega-3 Fatty Acids */}
        <div className="nutrition-item">
          <h3>Omega-3 Fatty Acids</h3>
          <ul>
            <li>Salmon</li>
            <li>Chia Seeds</li>
            <li>Flaxseeds</li>
          </ul>
          <img
            src="https://plantbasedhealthprofessionals.com/wp-content/uploads/omega3.jpg"
            alt="Omega-3 fatty acids"
          />
        </div>

        {/* Complex Carbohydrates */}
        <div className="nutrition-item">
          <h3>Complex Carbohydrates</h3>
          <ul>
            <li>Sweet Potatoes</li>
            <li>Quinoa</li>
            <li>Oats</li>
            <li>Whole Grains</li>
          </ul>
          <img
            src="https://blog.lafitness.com/wp-content/uploads/2017/06/Good-Carbohydrates.jpeg"
            alt="Complex carbohydrates"
          />
        </div>

        {/* B Vitamins */}
        <div className="nutrition-item">
          <h3>B Vitamins</h3>
          <ul>
            <li>Bananas</li>
            <li>Chicken</li>
            <li>Fortified Cereals</li>
          </ul>
          <img
            src="https://edgemontnaturopathic.com/wp-content/uploads/2020/03/Bvitamin.jpg"
            alt="B vitamins"
          />
        </div>
      </div>
    </div>
  );
}

export default NutritionTips;
