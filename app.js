(function(){
	var backlogFavList = {
		init: function(){
			console.log("init");
			var url = location.href,
					url_cut = url.split("/");
			this.p_num = url_cut[url_cut.length-1];

			var check = this.storageCheck();
			console.log(check);
			this.viwe_icon_add(check);
			if(!check){
				$("#ex-BacklogFavListAdd").on("click", $.proxy(this.storageAdd, this));
			}
		},
		viwe_icon_add: function(flag){
			var $target = $("#issuecard .key"),icon;
			if(flag){
				icon = '<img class="star star-container-add" src="https://assets.backlog.jp/R20150218/images/star.png" id="ex-BacklogFavListDel" title="リストから削除" alt="リストから削除">';
			}else{
				icon = '<img class="star star-container-add" src="https://assets.backlog.jp/R20150218/images/star_add.png" id="ex-BacklogFavListAdd" title="リストに追加" alt="リストに追加">';
			}
			$target.append(icon);
		},
		storageCheck: function(){
			var get_obj = JSON.parse(localStorage.getItem("ex-backlogFavListData")) || [],
					flag;

			for(var i = 0;i < get_obj.length;i++){
				$("#ex-BacklogFavListAdd").attr("ex-BacklogFavListAdd", "true");
				flag = get_obj[i].number === this.p_num ? true : false;
			}
			return flag;
		},
		storageAdd: function(){
			console.log("storageAdd");
			var get_obj = JSON.parse(localStorage.getItem("ex-backlogFavListData")) || [],
					add_obj = {
						"url": location.href,
						"title": $(".summary [data-bind='text: summary']").text(),
						"number": this.p_num
					};
			getObj.push(add_obj);
			localStorage.setItem("ex-backlogFavListData", JSON.stringify(getObj));
			console.log(JSON.parse(localStorage.getItem("ex-backlogFavListData")));
		}
	}
	backlogFavList.init();
})();
