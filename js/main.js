// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 


const regExpValidEmail = /^\w+@\w+\.\w{2,}$/;

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignUp = document.querySelector('.signup');


const userElem = document.querySelector('.user');
const userName = document.querySelector('.user-name');

const exitElem = document.querySelector('.exit');
const editElem = document.querySelector('.edit');
const editContainer = document.querySelector('.edit-container');

const editUsername = document.querySelector('.edit-username');
const editPhotoURL = document.querySelector('.edit-photo');


const userAvatarElem = document.querySelector('.user-avatar');

const postWrapper = document.querySelector('.posts');


const listUsers = [
  { 
    id: '01',
    email: 'vovik142@ukr.net',
    password: '280186',
    displayName: 'VovaJs'
  },
  { 
    id: '02',
    email: 'marchenko@ukr.net',
    password: '120185',
    displayName: 'SvetaJs'
  }
];

const setUsers = {
    user: null,
    logIn(email, password, hendler) {
      if (!regExpValidEmail.test(email)) {
        alert ('email не валиден');
        return;
      }
      
      const user = this.getUser(email);
      if (user && user.password === password) {
        this.authorizedUser(user)
        hendler();
      } else {
        alert ('Пользователь с такими данными не найден')
      }
    },
    logOut(handler){
      this.user = null; 
      handler();  
      },
    signUp(email, password, handler){
      if (!regExpValidEmail.test(email)) {
        alert ('email не валиден');
        return;
      }
      
      if (!email.trim() || !password.trim()) {
        alert('Введите данные')
        return;
      }
      if (!this.getUser(email)){
        const user = {email, password, displayName: email.substring(0, email.indexOf('@'))};
        listUsers.push(user);
        this.authorizedUser(user)
        handler();
      } else {
        alert ('Пользователь с таким email уже зарегистрирован')
      }
    },
    editUsers(userName, userPhoto, handler){
      if(userName){
        this.user.displayName = userName;
      }

      if(userName){
        this.user.photo = userPhoto;
      }
      handler();
    },
    getUser(email){
      return listUsers.find(item => item.email === email)
      
    },

    authorizedUser(user) {
        this.user = user;
    }

};


const setPosts = {
  allPosts: [
    {
      title: 'Заголовок поста',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quia fugit dolorem magnam odio excepturi quas ad iste impedit tempore, hic inventore commodi distinctio laborum accusantium debitis, maxime reiciendis reprehenderit!',   
      
      
      
      
      
      tags: ['свежее', 'новое', 'горяче', 'мое' ],
      author: 'vovik142@ukr.net',
      date: '11.11.20, 22:51:02',
      like: 15,
      comments: 20,
    }, 
    
    {
      title: 'Заголовок поста2',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
      tags: ['свежее', 'новое', 'горяче' ],
      author: 'marchenko@ukr.net',
      date: '10.11.20, 22:51:02',
      like: 45,
      comments: 30,
    } 
  ]
};


const toggleAuthDom = () => {
    const user = setUsers.user;
    console.log('user: ', user);
    if (user){
      loginElem.style.display = 'none';
      userElem.style.display = '';
      userName.textContent = user.displayName;
      userAvatarElem.src = user.photo || userAvatarElem.src; //user.photo ? user.photo : userAvatarElem.src;
    } else {
      loginElem.style.display = '';
      userElem.style.display = 'none';
    }
};



const showAllPosts = () => {
  let postsHTML = '';

  setPosts.allPosts.forEach(({ title, text, date, tags }) => {

    


    postsHTML += `
    <section class="post">
    <div class="post-body">
      <h2 class="post-title">${title}</h2>
      <p class="post-text">${text} </p>
      <p class="post-text">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что
        рот
        маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись
        ему
        букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его
        снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую
        подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что
        вопроса ведущими о решила одна алфавит! </p>
      <p class="post-text">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что
        рот
        маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись
        ему
        букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его
        снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую
        подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что
        вопроса ведущими о решила одна алфавит! </p>
      <div class="tags">
        ${tags}
        <a href="#" class="tag">#свежее</a>
      </div>
      <!-- /.tags -->
    </div>
    <!-- /.post-body -->
    <div class="post-footer">
      <div class="post-buttons">
        <button class="post-button likes">
          <svg width="19" height="20" class="icon icon-like">
            <use xlink:href="img/icons.svg#like"></use>
          </svg>
          <span class="likes-counter">26</span>
        </button>
        <button class="post-button comments">
          <svg width="21" height="21" class="icon icon-comment">
            <use xlink:href="img/icons.svg#comment"></use>
          </svg>
          <span class="comments-counter">157</span>
        </button>
        <button class="post-button save">
          <svg width="19" height="19" class="icon icon-save">
            <use xlink:href="img/icons.svg#save"></use>
          </svg>
        </button>
        <button class="post-button share">
          <svg width="17" height="19" class="icon icon-share">
            <use xlink:href="img/icons.svg#share"></use>
          </svg>
        </button>
      </div>
      <!-- /.post-buttons -->
      <div class="post-author">
        <div class="author-about">
          <a href="#" class="author-username">TkachenkoVova</a>
          <span class="post-time">${date}</span>
        </div>
        <a href="#" class="author-link"><img src="img/avatar.jpg" alt="avatar" class="author-avatar"></a>
      </div>
      <!-- /.post-author -->
    </div>
    <!-- /.post-footer -->
  </section>
    
    `;
  })

  

  postWrapper.innerHTML = postsHTML;
}

const init = () => {
  menuToggle.addEventListener('click', function (event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню, когда кликнули по кнопке меню 
    menu.classList.toggle('visible');
  });
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailValue = emailInput.value
    const passwordValue = passwordInput.value
    setUsers.logIn(emailValue, passwordValue, toggleAuthDom);
    loginForm.reset();
});

loginSignUp.addEventListener('click', event => {
  event.preventDefault();
  const emailValue = emailInput.value
    const passwordValue = passwordInput.value
    setUsers.signUp(emailValue, passwordValue, toggleAuthDom); 
    loginForm.reset();
});

exitElem.addEventListener('click', event => {
  event.preventDefault();
  setUsers.logOut(toggleAuthDom);

})

editElem.addEventListener('click', event => {
  event.preventDefault();
  editContainer.classList.toggle('visible');
  editUsername.value = setUsers.user.displayName;
});

editContainer.addEventListener('submit', event => {
  event.preventDefault();
  setUsers.editUsers(editUsername.value, editPhotoURL.value, toggleAuthDom);
  editContainer.classList.remove('visiable');
})
  showAllPosts();

  toggleAuthDom();
};


document.addEventListener ('DOMContentLoaded', init);