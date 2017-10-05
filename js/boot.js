
var boot = function(game){
	console.log("%cStarting my awesome game", "color:white; background:red");
};
  
boot.prototype = {
	preload: function(){
         
	},
  	create: function(){
		game.load.video('introVideo','assets/Title.mp4');
		var video = game.add.video('introVideo');
		video.play(true);
		video.addToWorld();
	}
}