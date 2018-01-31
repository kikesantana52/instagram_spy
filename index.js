let str_url = 'https://www.instagram.com/daniellachavezofficial/?__a=1';
const obj_instagram = fetch(str_url);

var arr_copy;

obj_instagram.then((data)=>{ return data.json();})
.then((data) => {
  const {username : str_username, biography :str_biog} = data.user;
  console.log(str_username);
  console.log(str_biog);
  let arr_posts = [...data.user.media.nodes];
  arr_posts.sort((a,b)=>{
    return b.likes.count - a.likes.count;
  });
  arr_posts.forEach((post)=>{
    console.log(`Likes: ${post.likes.count}, Caption: ${post.caption}, Comments: ${post.comments.count}`);
  });
});
