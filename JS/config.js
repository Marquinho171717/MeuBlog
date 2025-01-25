
/**
 * Chaves de conexão ccom o Firebase.
 * ATENÇÃO! Sempre troque essas chaves pelas chaves do seu projeto.
 **/

const firebaseConfig = {
  apiKey: "AIzaSyB7Md7BM9t3dW73g1pcKeikZXbmYjyzphw",
  authDomain: "meu-blog-b3ace.firebaseapp.com",
  projectId: "meu-blog-b3ace",
  storageBucket: "meu-blog-b3ace.firebasestorage.app",
  messagingSenderId: "21586969982",
  appId: "1:21586969982:web:ede6f2c0fc36d17e761f2f"
};


/**
 * Configuração do site;
 **/
const site = {

  /**
    * Nome do site usado na tag <title>...</title> e nas interações dinâmicas
    **/
  nome: "Meu Blog Estático",

  /**
   * Logotipo do site, usado na tag <header>...</title>
   */
  logo: "img/logo.png",

  /**
   * Controla a ação ao clicar no link do usuário logado no menu principal
   * Se `true`, exibe o perfil do usuário → perfil.html
   * Se `false`, faz logout direto
   **/
  verPerfil: true,

  /**
   * Ano de lançamento do site
   **/
  ano: 2022,

  /**
   * Licensa do site usada no rodapé
   **/
  licensa: `
  <i class="fa-regular fa-copyright fa-rotate-180 fa-fw"></i>
  <span>Copyleft <span id="footerAno"></span> Joca da Silva</span>
  `

}

