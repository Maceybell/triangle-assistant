let angleALabel = document.getElementById("aang");
let angleBLabel = document.getElementById("bang");
let angleCLabel = document.getElementById("cang");
let sideALabel = document.getElementById("sidea");
let sideBLabel = document.getElementById("sideb");
let sideCLabel = document.getElementById("sidec");
let sideAInput = document.getElementById("a");
let sideBInput = document.getElementById("b");
let sideCInput = document.getElementById("c");
let triangle = document.getElementById("tri");
let invalid = document.getElementById("inv");
let description = document.getElementById("descr");
let arrow = document.getElementById("arrow");

Calculate = () => {
  // Calibrating side values
  let sideA = sideAInput.value;
  let sideB = sideBInput.value;
  let sideC = sideCInput.value;

  // Checking Complete Input Fields
  if ((sideA !== "") & (sideB !== "") & (sideC !== "")) {
    sideA = parseInt(sideA);
    sideB = parseInt(sideB);
    sideC = parseInt(sideC);
    console.log(sideA);
    console.log(sideA + sideB);

    // Checking triangle validity
    if (
      (sideA + sideB > sideC) &
      (sideA + sideC > sideB) &
      (sideB + sideC > sideA)
    ) {
      triangle.classList.remove("hide");
      invalid.classList.add("hide");

      // Identifying the triangle type (sides)
      let sideArr = [sideA, sideB, sideC];
      let filteredSides = sideArr.filter(
        (item, index) => sideArr.indexOf(item) === index
      );
      let sideType = "";
      if (filteredSides.length === 1) {
        sideType = "equilateral";
      } else if (filteredSides.length === 2) {
        sideType = "isosceles";
      } else {
        sideType = "scalene";
      }

      //Labeling the sides on image
      sideALabel.innerText = `${sideA}`;
      sideBLabel.innerText = `${sideB}`;
      sideCLabel.innerText = `${sideC}`;

      // Calculating and labeling the angles
      let a = sideA;
      let b = sideB;
      let c = sideC;

      let angleA = (
        Math.acos((b * b + c * c - a * a) / (2 * b * c)) *
        (180 / Math.PI)
      ).toFixed(1);
      angleALabel.innerText = `${angleA}°`;

      let angleB = (
        Math.acos((a * a + c * c - b * b) / (2 * a * c)) *
        (180 / Math.PI)
      ).toFixed(1);
      angleBLabel.innerText = `${angleB}°`;

      let angleC = (
        Math.acos((a * a + b * b - c * c) / (2 * a * b)) *
        (180 / Math.PI)
      ).toFixed(1);
      angleCLabel.innerText = `${angleC}°`;

      //Identifying the triangle type (angles)

      let angleType = "";
      if ((angleA < 90.0) & (angleB < 90.0) & (angleC < 90.0)) {
        angleType = "an acute";
      } else if ((angleA == 90.0) | (angleB == 90.0) | (angleC == 90.0)) {
        angleType = "a right";
      } else if ((angleA > 90.0) | (angleB > 90.0) | (angleC > 90.0)) {
        angleType = "an obtuse";
      } else {
        console.log(angleA, angleB, angleC);
      }

      // heron's formula to find area and height (in order to style triangle in css)

      let semiperimeter = (sideA + sideB + sideC) / 2;
      console.log(semiperimeter);

      let area = Math.sqrt(
        semiperimeter *
          (semiperimeter - sideA) *
          (semiperimeter - sideB) *
          (semiperimeter - sideC)
      );

      console.log(area);

      let height = (2 * area) / sideA;
      console.log(height + "height");

      height = parseInt(height);

      moveLeft = parseInt(Math.sqrt(sideB * sideB - height * height));

      console.log(`moving left ${moveLeft} px `);

      moveRight = parseInt(Math.sqrt(sideC * sideC - height * height));

      //describing the triangle
      description.innerText =
        `This is ${angleType}, ${sideType} triangle.` +
        "\n" +
        `Angle A: ${angleA}°` +
        "\n" +
        `Angle B: ${angleB}°` +
        "\n" +
        `Angle C: ${angleC}°` +
        "\n" +
        `Height: ${height}` +
        "\n" +
        `Area: ${area}°` +
        "\n" +
        `Semiperimeter: ${semiperimeter} `;

      //sizing the css triangle and moving the labels
      sideALabel.style.top = `${height}px`;
      sideBLabel.style.top = `${height / 2}px`;
      sideBLabel.style.right = `${moveLeft}px`;
      sideCLabel.style.top = `${height / 2}px`;
      sideCLabel.style.left = `${moveRight}px`;
      angleBLabel.style.top = `${height - 20}px`;
      angleBLabel.style.left = `${moveRight - 20}px`;
      angleCLabel.style.right = `${moveLeft - 20}px`;
      angleCLabel.style.top = `${height - 20}px`;
      arrow.style.borderBottomWidth = `${height}px`;
      arrow.style.borderLeftWidth = `${moveLeft}px`;
      arrow.style.borderRightWidth = `${moveRight}px`;
    } else {
      triangle.classList.add("hide");
      description.innerText = `This is not a valid triangle. (Hint: any two sides added together should
        be greater than the third side)`;
      invalid.classList.remove("hide");
      console.log("Not a valid triangle");

      // triangle trivia if triangle dimensions are invalid

      const trivia = ["The Leaning Tower of Pisa leans at an angle of 3.99°. Physicists say it would fall if it maintained an angle greater than 5.44°", "Doritos resemble an isosceles triangle.", "The Flatiron building in New York was built on a triangular piece of land. They made it a triangular prism to capitalize on the alotted room.", "A triangle pointed up represents stability, balance and movement in design.","The triangle instrument has one angle left open, keeping the instrument from having a definite pitch. It is also made fun of a lot.", "Some officials claim the vertices of the Bermuda Triangle are in Florida, Puerto Rico and Bermuda, though others have argued different locations as well. It is probably the world's most haunted triangle." ]

      let randomIndex = Math.floor(Math.random() * trivia.length)
      let randomTrivia = trivia[randomIndex]

      invalid.innerText = `${randomTrivia}`
    }
  }
};

sideAInput.addEventListener("input", Calculate);
sideBInput.addEventListener("input", Calculate);
sideCInput.addEventListener("input", Calculate);
