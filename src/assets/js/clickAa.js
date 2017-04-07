
function Show_Hidden(obj)
{
 if(obj.style.display=="block")
 {
  	obj.style.display='none';

 }
 else
 {
  	obj.style.display='block';
  	//增加动画
   	obj.className="animated flipInY";
}
}
	window.onload = function() {
		//获取id
		var clickAa = document.getElementById("clickAa");
 		var hiddenAa=document.getElementById("hiddenAa");
 		clickAa.onclick=function()
 		{
 		 Show_Hidden(hiddenAa);
// 			return true;
 		}
 		//详情页点击
// 		var shareArticle=document.getElementById("shareArticle");
// 		var clickShare=document.getElementById("clickShare");
// 		shareArticle.onclick=function(){
// 			 	 Show_Hidden(clickShare);
// 			 	 return true;
// 		}
	}

