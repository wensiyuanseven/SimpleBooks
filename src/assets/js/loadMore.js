$(function() {
		var _content = []; //临时存储li循环内容
		var lanren = {
			_default:2, //默认显示图片个数
			_loading:5,  //每次点击按钮后加载的个数
			init:function(){
				var lis = $(".lanren .hidden li");
				$(".lanren ul.list").html("");
				for(var n=0;n<lanren._default;n++){
					lis.eq(n).appendTo(".lanren ul.list");
				}
				$(".lanren ul.list img").each(function(){
					$(this).attr('src',$(this).attr('realSrc'));
				})
				for(var i=lanren._default;i<lis.length;i++){
					_content.push(lis.eq(i));
				}
				$(".lanren .hidden").html("");
			},
			loadMore:function(){
				var mLis = $(".lanren ul.list li").length;
				for(var i =0;i<lanren._loading;i++){
					var target = _content.shift();
					if(!target){
						$('.lanren .more').html("<p>全部加载完毕...</p>");
						break;
					}
					$(".lanren ul.list").append(target);
					$(".lanren ul.list img").eq(mLis+i).each(function(){
						$(this).attr('src',$(this).attr('realSrc'));
					});
				}
			}
		}
		lanren.init();
});