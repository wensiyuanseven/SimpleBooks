		window.onload=function(){
			// 调用封装函数 json对象写数据
			page({
				// 容器id
				id:'div1',
				// 当前页
				nowNum:1,
				// 总页数
				allNum:4,
				// 回调函数
				callBack:function(now,all){
					
					// alert("xscf");
				}
			});
		};
		// 写一个封装函数
		function page(opt){
			// 如果不写id 直接终断执行
			if (!opt.id) {return false};
			// 获取id
			var obj=document.getElementById(opt.id);

			// 如果当前页默认不写 给它一个初始值为1
			var nowNum=opt.nowNum||1;
			// 如果总页数不写 给它一个默认值为5
			var allNum=opt.allNum||5;
			// 如果没有回调函数 直接执行空函数
			var callBack=opt.callBack||function(){};
			// 首页
			if(nowNum>=4&&allNum>=6){
				var oA=document.createElement("a");
				oA.href="#1";
				oA.innerHTML="首页";
				obj.appendChild(oA);
			}
			// 上一页
			if(nowNum>=2){
				var oA=document.createElement("a");
				oA.href="#"+(nowNum-1);
				oA.innerHTML="上一页"
				obj.appendChild(oA);
			}
			// 如果当前页数<=5
			if(allNum<=5){
				for(var i=1;i<=allNum;i++){
					var oA=document.createElement('a');
					oA.href='#'+i;	
					// 区分当前页
					if (i==nowNum) {
						oA.innerHTML=i;
					}else{
						oA.innerHTML='['+ i +']';
					}			
					// 把它添加到容器当中
					obj.appendChild(oA);
				}

			}
			// 当前页数>5
			else{
				for(var i=1; i<=5;i++){				
					var oA=document.createElement('a');
					// 对第一页和第二页进行特殊处理
					if(nowNum==1||nowNum==2){
						oA.href="#"+i;
						if(nowNum==i){
							oA.innerHTML=i;
						}else{
							oA.innerHTML="["+i+"]";
						}
					}
					//对最后两页进行处理
					else if((allNum-nowNum==0)||(allNum-nowNum==1)){
						oA.href="#"+(allNum-5+i);
						// 倒数第一项
						if((allNum-nowNum==0)&&i==5){
							oA.innerHTML=(allNum-5+i);
						}else if ((allNum-nowNum==1)&&i==4){
							oA.innerHTML=(allNum-5+i);
						}
						else{
							oA.innerHTML="["+(allNum-5+i)+"]";
						}

					}
					//对中间的页数进行处理
					else{
						oA.href="#"+(nowNum-3+i);
						// 当前页
						if(i==3){
							oA.innerHTML=nowNum-3+i; 	
						}else{

							oA.innerHTML="["+(nowNum-3+i)+"]"; 	
						}
					}	
					obj.appendChild(oA);				

				}
			}
			// 下一页
			if((allNum-nowNum)>=1){
				var oA=document.createElement("a");
				oA.href="#"+(nowNum+1);
				oA.innerHTML="下一页"
				obj.appendChild(oA);

			}
			// 尾页
			if(allNum-nowNum>=3&&allNum>=6){
				var oA=document.createElement("a");
				oA.href="#"+allNum;
				oA.innerHTML="尾页"
				obj.appendChild(oA);
			}
			// 执行会回调函数
			callBack(nowNum,allNum);
			var aa=obj.getElementsByTagName("a");
			for(var i=0;i<aa.length;i++){
				aa[i].onclick=function(){
					//得到相对路径 获取当前页码
					var nowNum=parseInt(this.getAttribute('href').substring(1));
					// 让当前容器清空
					obj.innerHTML="";
					// 重新执行函数
					page({
						id:obj.id,
						nowNum:nowNum,
						// 之前传过来的allNum
						allNum:allNum,
						// 当点击的时候重新触发回调函数
						callBack:callBack
					});
				// 阻止默认事件
				return false;
				}
			}
		}