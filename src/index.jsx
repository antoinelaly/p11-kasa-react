import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Lerouter'

/**
 * pas à obliger nos visiteurs à télécharger l'intégralité de l'application avant de pouvoir l'utiliser. > webpack, @babel
 * regrouper sous forme de fractionnement de code. importations dynamiques. 
 */

ReactDOM.render(
<App />,
document.getElementById('root')
);