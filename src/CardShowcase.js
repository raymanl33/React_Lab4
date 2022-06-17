import { ObjectFlags } from "typescript";
import "./showcase.css";

export default function CardShowCase(props) {
 console.log(props.formData);
 const {fullName,
      aboutMe,
      githubURL,
      twitterURL,
      favouriteBooks,
      HTML,
      CSS,
      JS,
      Git,
      React,
      NodeJS} = props.formData;

  // Put each technology into technologies array 
  const technologies = [HTML, CSS, JS, Git, React, NodeJS]

  // Create an techArry that contains the name of each technology in string
  const techArry = ["HTML", "CSS", "JS", "Git", "React", "NodeJS"]

  // Create a default technologies object that set the default boolean value to false
  const technologiesObj = {HTML: false, CSS: false, JS: false, Git: false, React:false, NodeJS: false}

  // Loop through the technologies array and update technologiesObj
  let index = 0;
  technologies.forEach(element => {
     
    technologiesObj[techArry[index]] = element;
    index ++;
  });

  // Split firstname and lastname
  const splitName = fullName.split(" ")

  // Split favourite books and authors by comma
  const favouritesArry = favouriteBooks.split(",")


  // bookTitleIndex will only get the even value index 
  let bookTitleIndex = 0;
  // authorIndex will only get the odd value index
  let authorIndex = 1;

  // Loop through the favouritesArry loop and push it to favouriteObj
  // Example: favouriteObj = {bookTitle: Harry Potter, author: JK Rowling}
  let obj = {}
  const favouriteObj = []
  for (let i = 0; i < favouritesArry.length/2; i++) {
    let bookTitle = favouritesArry[bookTitleIndex];
    let author = favouritesArry[authorIndex];
    obj.bookTitle = [bookTitle], 
    obj.author = [author];
    favouriteObj.push(obj);
    obj = {};
    bookTitleIndex = bookTitleIndex + 2;
    authorIndex = authorIndex + 2
  }

  favouriteObj.map(test => console.log(test))
  return (
    <div className="pageBody">
      <main class="has-dflex-center">
        <section>
          <div class="lx-container-85">
            <div class="lx-row align-stretch">
              <div class="lx-column is-3">
                <div class="lx-row">
                  <div class="lx-card">
                    <div class="lx-row">
                      <div class="has-dflex-center bs-md pic">
                        <img
                          src="https://github.com/luxonauta.png"
                          alt="Armaan"
                        />
                      </div>
                      <div class="infos">
                        <span>
                          <i class="fas fa-user-circle"></i>&nbsp;&nbsp; 
                          {fullName}
                        </span>
                        <span>
                          <i class="fas fa-briefcase"></i>&nbsp;&nbsp;Full Stack
                          Developer
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="lx-card">
                    <div class="lx-row">
                      <h1 class="title">Connect with {splitName[0]}</h1>
                      <div class="mini-cards">
                        <a
                          class="has-dflex-center bs-md"
                          href={githubURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i class="fab fa-github-alt"></i>
                        </a>
                        <a
                          class="has-dflex-center bs-md"
                          href={twitterURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i class="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lx-column">
                <div class="lx-row">
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-info-circle"></i>&nbsp;Welcome to {splitName[0]}'s corner of the Internet
                    </h1>
                  </div>
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-hand-point-right"></i>&nbsp;About me
                    </h1>
                    <div class="text">
                      <p>
                        {aboutMe}
                      </p>
                     
                    </div>
                  </div>
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-terminal"></i>&nbsp;Technologies
                    </h1>
                  
                    <div class="mini-cards">
                    {Object.keys(technologiesObj).map(keys => 
                    { if (technologiesObj[keys] === true){
                      {if (keys === "HTML"){
                        return  <span class="has-dflex-center bs-md" title={keys}>
                      <i class={`fab fa-${keys.toLowerCase()}5`}></i>
                      </span>
                      }}
                      {if (keys === "CSS"){
                        return  <span class="has-dflex-center bs-md" title={keys}>
                      <i class={`fab fa-${keys.toLowerCase()}3-alt`}></i>
                      </span>
                      }}
                      {if (keys === "JS"){
                        return  <span class="has-dflex-center bs-md" title={keys}>
                      <i class={`fab fa-${keys.toLowerCase()}`}></i>
                      </span>
                      }}
                      {if (keys === "Git"){
                        return  <span class="has-dflex-center bs-md" title={keys}>
                      <i class={`fab fa-${keys.toLowerCase()}-alt`}></i>
                      </span>
                      }}
                      {if (keys === "NodeJS"){
                        return  <span class="has-dflex-center bs-md" title={keys}>
                      <i class={`fab fa-node-js`}></i>
                      </span>
                      }}
                      {if (keys === "React"){
                        return  <span class="has-dflex-center bs-md" title={keys}>
                      <i class={`fab fa-${keys.toLowerCase()}`}></i>
                      </span>
                      }}
                      
                    }}
                   )}
                   
                    </div>
                  </div>
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-book"></i>&nbsp;My favorite books
                    </h1>
                    <div class="text">
                    
                      <ol>
                           {favouriteObj.map(favourite =>
                           {if (favourite.author != undefined && favourite.bookTitle != ""){
                            return <li>
                            <p>
                              <b>{favourite.bookTitle}</b>&nbsp;- {favourite.author}
                            </p>
                         </li>
                           }}
                           )}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
