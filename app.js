(function(){
	var backlogFavList = {
		init: function(){
			console.log("init");
			var url = location.href,
					url_cut = url.split("/");
			this.p_num = url_cut[url_cut.length-1];
			var check = this.storageCheck();
			this.viwe_icon_add(check);
			console.log(JSON.parse(localStorage.getItem("ex-backlogFavListData")));
			if(url.match(/view/g)){
				if(!check){
					$("#ex-BacklogFavListAdd").on("click", $.proxy(this.storageAdd, this));
				}
			}else{
				this.listCreate();
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
			var get_obj = JSON.parse(localStorage.getItem("ex-backlogFavListData")) || [];

			for(var i = 0;i < get_obj.length;i++){
				$("#ex-BacklogFavListAdd").attr("ex-BacklogFavListAdd", "true");
				return get_obj[i].number === this.p_num ? true : false;
			}
		},
		storageAdd: function(){
			console.log("storageAdd");
			var id = $("#hello a").attr("href").split("/");
					get_obj = JSON.parse(localStorage.getItem("ex-backlogFavListData")) || [],
					add_obj = {
						"id": id[id.length-1],
						"url": location.href,
						"title": $(".summary [data-bind='text: summary']").text(),
						"number": this.p_num
					};
			get_obj.push(add_obj);
			localStorage.setItem("ex-backlogFavListData", JSON.stringify(getObj));
			console.log(JSON.parse(localStorage.getItem("ex-backlogFavListData")));
		},
		listCreate: function(){
			console.log("listCreate");
			var $list = $("#issue-menu .Tab-nav"),
					cp_ele = $list.children().eq(1);
			cp_ele.clone()
				.appendTo($list)
				.addClass("ex-backlogFavListTab")
				.find("a")
				.attr("id", "switch-fav-list")
				.text("リスト");
		}
	}
	backlogFavList.init();
})();
