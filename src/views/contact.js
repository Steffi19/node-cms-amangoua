import React, {Component} from 'react';
import Header from '../views/header.js';
import Footer from '../views/footer.js';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div id="grid_page" class="grid-page">
          <h1 class="title">Contact</h1>
          
      <div id='formulaire'>
      <form action="/email" method="POST" name="me_contacter">
          <p>
             <span id='case-nom'>Nom : <input type='text' name='nom' placeholder="Votre nom" size="30"/> </span>
             <span id='case-prenom'> Prénom :  <input type='text' name='prenom' placeholder="Votre prénom" size="30" /> </span> 
          </p>
          <br/>
             <div id='case-courriel'> Votre adresse mail : <input type='email' name='adresse_mail' placeholder="Votre courriel" size="50"/> </div>
          <p/>
          <br/>
          <br/>
          <div id='zoneTexte'>  Veuillez entrer votre message ici : <textarea name='texte' id='texte'>  </textarea> </div>
          <br/>
          <div id='envoyer'> <input type="submit" value="ENVOYER"/> </div>
      
      </form>
      </div>          
          
        </div>
        <Footer/>
      </div>
    );
  }
};
