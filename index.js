var str_url = 'https://www.instagram.com/daniellachavezofficial/?__a=1';
var obj_instagram = fetch(str_url);
var str_biog, str_username;
var arr_posts;
var arr_copy;

obj_instagram.then((data)=>{ return data.json();})
          .then((data) => {
            str_username = data.user.username;
            str_biog = data.user.biography;
            console.log(str_username);
            console.log(str_biog);
            arr_posts = data.user.media.nodes;
            arr_copy = {...arr_posts};
             var arr_sortable = [];
             for (var post in arr_copy) {
                 arr_sortable.push([arr_copy[post].likes.count, arr_copy[post].caption,arr_copy[post].comments.count]);
             }
             arr_sortable.sort((a,b)=>{
               return b[0] - a[0];
             });
             for (var i = 0;  i < arr_sortable.length; i++) {
                console.log(`# of likes: ${arr_sortable[i][0]}, Caption: ${arr_sortable[i][1]}, # of comments: ${arr_sortable[i][2]}`);
              }

          });
