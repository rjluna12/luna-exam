$('#app').html(`
   <div class="progress">
      <div class="indeterminate"></div>
   </div>
 `);

setTimeout(function(){
 x();
},3000);

  function x(){
  	$.ajax({
  	url:"http://www.omdbapi.com/?t=the walking dead"
   

	})
    .done(function(res){
      console.log(res);
let html = `
 <nav class="nav-extended">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Seasons
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        
      </ul>
    
    </div>
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab"><a href="/Season1">Season 1</a></li>
        <li class="tab"><a href="/Season2">Season 2</a></li>
        <li class="tab"><a href="/Season3">Season 3</a></li>
        <li class="tab"><a href="/Season4">Season 4</a></li>
      </ul>
    </div>
  </nav>

   <h1> ${res.Title} </h1>
  
   <h4>${res.Plot} </h4>
   <img src ="${res.Poster}" />
   
  `;
  $('#app').html(html);
  });
}

	

