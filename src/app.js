(function(){
  const {hash} = window.location;
  const paths = [];
  paths[""] = login;
  paths["#/login"] = login;
  paths["#/signup"] = signup;
  paths["#/game"] = game;
  paths["#/404"] = err404; 

  if(paths[hash] === undefined){
    paths["#/404"]();
    return;
  }

  paths[hash]();
})();