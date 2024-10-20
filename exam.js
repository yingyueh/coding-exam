/** 1 */
// Q1.
const customerData = [
  {
    firstName: "David",
    lastName: "Chang",
    customerID: "000000",
    note: "",
    profession: "student",
  },
  {
    firstName: "Mary",
    lastName: "Huang",
    customerID: "12345",
    note: "",
    profession: "freelancer",
  },
  {
    firstName: "Andy",
    lastName: "Yeh",
    customerID: "11111",
    note: "",
    profession: "engineer",
  },
  {
    firstName: "Matt",
    lastName: "Huang",
    customerID: "000000",
    note: "",
    profession: "systemAnalytics",
  },
  {
    firstName: "Teresa",
    lastName: "Hu",
    customerID: "000000",
    note: "",
    profession: "productOwner",
  },
];

function sortUserName(user) {
  return user.map((customer) => {
    return `${customer.firstName}${customer.lastName}${customer.customerID}`;
  });
}

console.log("userNameArr", sortUserName(customerData));

// Q2.
const professionOrder = [
  "systemAnalytics",
  "engineer",
  "productOwner",
  "freelancer",
  "student",
];

function sortByType(user) {
  return user.sort((a, b) => {
    return (
      professionOrder.indexOf(a.profession) -
      professionOrder.indexOf(b.profession)
    );
  });
}

console.log("sort by profession", sortByType(customerData));

/** 2. **/
/** Q1.
It's because .container .shop-list li.item is more specific than .container .shop-list .item (優先權較重)
**/

/** Q2.
 .container .shop-list .item:nth-child(even) {
  background-color: pink;
}

.container .shop-list .item:nth-child(odd) {
  background-color: blue;
}
 */

/** 3. **/
let items = [
  1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4,
  4, 7, 8, 8, 0, 1, 2, 3, 1,
];

function getUniqueNumber(items) {
  const uniqueNumbers = [...new Set(items)];
  return uniqueNumbers;
}

console.log("unique numbers", getUniqueNumber(items));

/** 4. **/
/** <section>is often used to represent a grouping of thematic contents, typically accompanied by a heading, while <article> is used to represent a complete and self-contained piece of content, which can be independent and reusable. 
Example:
<article>
  <header>
    <h1>Benefits of Drinking Water</h1>
    <p>Published on: October 20, 2024</p>
  </header>

  <section>
    <h2>Introduction</h2>
    <p>Drinking water regularly is crucial for maintaining good health...</p>
  </section>

  <section>
    <h2>It delivers oxygen throughout the body</h2>
    <p>
      Blood is more than 90 percentTrusted Source water, and blood carries
      oxygen to different parts of the body.
    </p>
  </section>

  <section>
    <h2>It boosts skin health</h2>
    <p>
      Water intake is associated withTrusted Source improved skin barrier. With
      dehydration, the skin can become more vulnerable to skin disorders.
    </p>
  </section>
</article>;
**/

/** 5. */
/** 
In the CSS box model, each HTML element is treated as a rectangular box by the browser engine. There are two kinds of box models, one is content box, and the other is border box. The box is composed of content, padding, border and margin. Content refers to the actual content inside the element, padding refers to the space between the content and the border, border refers to the line outside the padding which surrounds the content and the padding, and margin refres to the space outside the border, which you can use to space the element out from other elements.
**/

/** 6. */
/** One or more CSS styles can be applied to a single element. In this situation, CSS specificity, which defines the priority of styles, becomes important. The style that should be applied is determined by the specificity score of the selectors. Each selector in a rule contributes to an aggregate specificity score, and the rule with the higher score will override other rules with lower specificity.
 My first principle is to avoid the use of !important and the overuse of ID selectors. Once you introduce styles with high specificity, such as !important or IDs, it can be very difficult to override them with more important styles in the future. This makes maintaining and updating the CSS challenging. Instead, I favor using class selectors, as they provide more flexibility and make it easier to override or extend styles when needed.
  */

/** 7. */
/** Some of the semantic html elements are <header>, <nav>, <section>, <article>, <aside>, <footer> and etc. <header> is often used as a container for introductory or content navigational links, <nav> is used to define a set of navigation links, <section> is often used to represent a grouping of thematic contents, typically accompanied by a heading, <article> is used as is used to represent a complete and self-contained piece of content, which can be independent and reusable, and <footer> contains all the information that should be at the bottom of a page.   
 Examples:
 <header>
  <h1>How to Maintain a healthy lifestyle</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Tips</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Contact us</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <header>
      <h3>The Benefits of Drinking Water</h3>
      <time datetime="2024-10-18">October 18, 2024</time>
    </header>

    <section>
      <h3>Physical Health Benefits</h3>
      <p>Drinking water helps maintain hydration and regulate body temperature...</p>
    </section>

    <section>
      <h3>Mental Health Benefits</h3>
      <p>Proper hydration can improve cognitive function and mood...</p>
    </section>

    <footer>Author: John Doe</footer>
  </article>
</main>
* 
*/

/** 8. */
/** please refer to the file exam-8.html and exam-8.css to see the answer */
