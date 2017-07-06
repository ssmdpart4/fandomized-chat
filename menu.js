if (!mainRoom.isInitialized) return;
$(document).ready(function(){
	function openMenu(child){
		var name = child.attributes.name,
			avatar = child.attributes.avatarSrc,
			editCount = child.attributes.editCount,
			$menu = $('<nav class="ChatMenu ChatUserMenu chat-user-menu" id="ChatUserMenu" />'),
			$header = $('<header class="ChatMenuHeader ChatUserMenuHeader" />'),
			actions = {
				normalActions: {
					viewProfile: {
						title: 'View Profile',
						action: '/wiki/User:$1'
					},
					viewContributions: {
						title: 'View Contributions',
						action: '/wiki/Special:Contributions/$1'
					},
					privateMessage: {
						title: 'Private Message',
						action: function(event, user){
							if (typeof user !== 'undefined' && typeof user == 'string'){
								mainRoom.openPrivateChat([user]);
							} else if (typeof user !== 'undefined' && typeof user == 'object'){
								if (user instanceof Array){
									mainRoom.openPrivateChat(user);
								} else {
									return;
								}
							} else {
								return;
							}
						}
					},
					hideMessages: {
						title: 'Hide Messages',
						action: function(event, user){
							var elems = ['.Chat li[data-user="$1"]', '.Rail .User[data-user="$1"]'],
								$elems = $(elems.join(', ').replace(/\$1/g, user));
							if ($elems.length > 0){
								$elems.each(function(index){
									$(this).fadeOut();
								});
							}
						}
					}
				},
				moderatorActions: {
					kickUser: {
						title: 'Kick',
						action: function(event, user){
						}
					},
					banUser: {
						title: 'Ban',
						action: function(event, user){
						}
					},
					promoteUser: {
						title: 'Promote',

						action: function(event, user){
						}
					}
				}
			};
});
