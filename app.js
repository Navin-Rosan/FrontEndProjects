let data = {
    "currentUser": {
      "image": { 
        "png": "./interactive-comments-sectio-mainn/images/avatars/image-juliusomo.png",
        "webp": "./interactive-comments-section-main/images/avatars/image-juliusomo.webp"
      },
      "username": "juliusomo"
    },
    "comments": [
      {
        "id": 1,
        "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        "createdAt": "1 month ago",
        "score": 12,
        "user": {
          "image": { 
            "png": "./interactive-comments-section-main/images/avatars/image-amyrobson.png",
            "webp": "./interactive-comments-section-main/images/avatars/image-amyrobson.webp"
          },
          "username": "amyrobson"
        },
        "replies": []
      },
      {
        "id": 2,
        "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        "createdAt": "2 weeks ago",
        "score": 5,
        "user": {
          "image": { 
            "png": "./interactive-comments-section-main/images/avatars/image-maxblagun.png",
            "webp": "./interactive-comments-section-main/images/avatars/image-maxblagun.webp"
          },
          "username": "maxblagun"
        },
        "replies": [
          {
            "id": 3,
            "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            "createdAt": "1 week ago",
            "score": 4,
            "replyingTo": "maxblagun",
            "user": {
              "image": { 
                "png": "./interactive-comments-section-main/images/avatars/image-ramsesmiron.png",
                "webp": "./interactive-comments-section-main/images/avatars/image-ramsesmiron.webp"
              },
              "username": "ramsesmiron"
            }
          },
          {
            "id": 4,
            "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            "createdAt": "2 days ago",
            "score": 2,
            "replyingTo": "ramsesmiron",
            "user": {
              "image": { 
                "png": "./interactive-comments-section-main/images/avatars/image-juliusomo.png",
                "webp": "./interactive-comments-section-main/images/avatars/image-juliusomo.webp"
              },
              "username": "juliusomo"
            }
          }
        ]
      }
    ]
}

  let container = document.createElement('div');
  container.classList.add('container');
  document.querySelector('body').appendChild(container);
  let cards;

  // var for main comments
  let cmt_main = [];
  let cmtCards = [];
  let ranges = [];
  let plus = [];
  let scores = [];
  let minus = [];
  let comments = [];
  let head = [];
  let body = [];
  let profiles = [];
  let replys = [];
  let profileImgs = [];
  let proH3 = [];
  let profilePara = [];
  let repImgs = [];
  let repH3 = [];
  let plusImg = [];
  let minusImg = [];

// var for comments replied 
  let cmtReplyCards = [];
  let reply_ranges = [];
  let reply_plus = [];
  let reply_scores = [];
  let reply_minus = [];
  let reply_comments = [];
  let reply_head = [];
  let reply_body = [];
  let reply_to = [];
  let reply_content = [];
  let reply_profiles = [];
  let reply_replys = [];
  let reply_profileImgs = [];
  let reply_proH3 = [];
  let reply_profilePara = [];
  let reply_repImgs = [];
  let reply_repH3 = [];
  let reply_plusImg = [];
  let reply_minusImg = [];
  let isCurren_user = [];
  let delReply = [];
  let delRepCont = [];
  let delImg = [];
  let cmtId = 0;

function insertComments(){
  
  cards = document.createElement('div');
  cards.classList.add('cards');
  container.appendChild(cards);
    for(let i=0; i<data.comments.length; i++){
        cmt_main[i] = document.createElement('div');
        cmt_main[i].classList.add('cmt-main');
        cmtCards[i] = document.createElement('div');
        cmtCards[i].classList.add('cmt-card');
        ranges[i] = document.createElement('div');
        ranges[i].classList.add('range');
        plus[i] = document.createElement('div');
        plus[i].classList.add('plus');
        plusImg[i] = document.createElement('img');
        plusImg[i].src = './interactive-comments-section-main/images/icon-plus.svg';

        scores[i] = document.createElement('div');
        scores[i].classList.add('num');
        scores[i].innerHTML = data.comments[i].score
        minus[i] = document.createElement('div');
        minus[i].classList.add('minus');
        minusImg[i] = document.createElement('img');
        minusImg[i].src = './interactive-comments-section-main/images/icon-minus.svg';

        cards.appendChild(cmt_main[i]);
        cmt_main[i].appendChild(cmtCards[i]);
        cmtCards[i].appendChild(ranges[i]);
        ranges[i].appendChild(plus[i]);
        plus[i].appendChild(plusImg[i])
        ranges[i].appendChild(scores[i]);
        ranges[i].appendChild(minus[i]);
        minus[i].appendChild(minusImg[i]);

        comments[i] = document.createElement('div');
        comments[i].classList.add('cmt');
        head[i] = document.createElement('div');
        head[i].classList.add('head');
        body[i] = document.createElement('div');
        body[i].classList.add('body');
        body[i].innerHTML = data.comments[i].content;
        profiles[i] = document.createElement('div');
        profiles[i].classList.add('profile');
        profileImgs[i] = document.createElement('img');
        profileImgs[i].src = data.comments[i].user.image.webp;
        proH3[i] = document.createElement('h3');
        proH3[i].innerHTML = data.comments[i].user.username;
        profilePara[i] = document.createElement('p');
        profilePara[i].innerHTML = data.comments[i].createdAt;
        replys[i] = document.createElement('div');
        replys[i].classList.add('reply');
        repImgs[i] = document.createElement('img');
        repImgs[i].src = './interactive-comments-section-main/images/icon-reply.svg';
        repH3[i] = document.createElement('h3');
        repH3[i].innerHTML = 'reply'

        cmtCards[i].appendChild(comments[i]);
        comments[i].appendChild(head[i]);
        comments[i].appendChild(body[i]);
        head[i].appendChild(profiles[i]);
        profiles[i].appendChild(profileImgs[i]);
        profiles[i].appendChild(proH3[i]);
        profiles[i].appendChild(profilePara[i]);
        head[i].appendChild(replys[i]);
        replys[i].appendChild(repImgs[i]);
        replys[i].appendChild(repH3[i]);

        // replys[i].addEventListener('click',reply(replys[i]));

        console.log(cmt_main[i])  
    
        if(data.comments[i].replies[0] != null) {  //checking comments have replies --- elements for reply comments
          
          for(let j=0; data.comments[i].replies[j] != null; j++){
            cmtReplyCards[j] = document.createElement('div');
            cmtReplyCards[j].classList.add('cmt-reply-card');
            cmt_main[i].appendChild(cmtReplyCards[j]);
            reply_ranges[j] = document.createElement('div');
            reply_ranges[j].classList.add('range');
            reply_plus[j] = document.createElement('div');
            reply_plus[j].classList.add('plus');
            reply_plusImg[j] = document.createElement('img');
            reply_plusImg[j].src = './interactive-comments-section-main/images/icon-plus.svg';

            reply_scores[j] = document.createElement('div');
            reply_scores[j].classList.add('num');
            reply_scores[j].innerHTML = data.comments[i].replies[j].score
            reply_minus[j] = document.createElement('div');
            reply_minus[j].classList.add('minus');
            reply_minusImg[j] = document.createElement('img');
            reply_minusImg[j].src = './interactive-comments-section-main/images/icon-minus.svg';
            // reply_cards.appendChild(cmt_main[j]);
            // reply_cmt_main[j].appendChild(reply_cmtCards[j]);
            cmtReplyCards[j].appendChild(reply_ranges[j]);
            reply_ranges[j].appendChild(reply_plus[j]);
            reply_plus[j].appendChild(reply_plusImg[j])
            reply_ranges[j].appendChild(reply_scores[j]);
            reply_ranges[j].appendChild(reply_minus[j]);
            reply_minus[j].appendChild(reply_minusImg[j]);
            
            reply_comments[j] = document.createElement('div');
            reply_comments[j].classList.add('cmt');
            reply_head[j] = document.createElement('div');
            reply_head[j].classList.add('head');
            reply_body[j] = document.createElement('div');
            reply_body[j].classList.add('body');
            reply_to[j] = document.createElement('span');
            reply_to[j].innerHTML = data.comments[i].replies[j].replyingTo;
            reply_content[j] = document.createElement('p');
            reply_content[j].innerHTML = data.comments[i].replies[j].content;
            reply_profiles[j] = document.createElement('div');
            reply_profiles[j].classList.add('profile');
            reply_profileImgs[j] = document.createElement('img');
            reply_profileImgs[j].src = data.comments[i].replies[j].user.image.webp;
            reply_proH3[j] = document.createElement('h3');
            reply_proH3[j].innerHTML = data.comments[i].replies[j].user.username;
            reply_profilePara[j] = document.createElement('p');
            reply_profilePara[j].innerHTML = data.comments[i].replies[j].createdAt;
            reply_replys[j] = document.createElement('div');
            reply_replys[j].classList.add('reply');
            reply_repImgs[j] = document.createElement('img');
            reply_repImgs[j].src = './interactive-comments-section-main/images/icon-reply.svg';
            reply_repH3[j] = document.createElement('h3');
            reply_repH3[j].innerHTML = 'reply'
            cmtReplyCards[j].appendChild(reply_comments[j]);
            reply_comments[j].appendChild(reply_head[j]);
            reply_comments[j].appendChild(reply_body[j]);
            reply_body[j].appendChild(reply_content[j]);
            reply_content[j].prepend(reply_to[j]);
            reply_head[j].appendChild(reply_profiles[j]);
            reply_profiles[j].appendChild(reply_profileImgs[j]);
            reply_profiles[j].appendChild(reply_proH3[j]);
            reply_profiles[j].appendChild(reply_profilePara[j]);
            reply_head[j].appendChild(reply_replys[j]);
            reply_replys[j].appendChild(reply_repImgs[j]);
            reply_replys[j].appendChild(reply_repH3[j]);
            if(reply_proH3[j].innerHTML === data.currentUser.username){
              isCurren_user[j] = document.createElement('span');
              isCurren_user[j].innerHTML = 'you';
              reply_profiles[j].insertBefore(isCurren_user[j],reply_profilePara[j]);
              reply_repImgs[j].src = './interactive-comments-section-main/images/icon-edit.svg';
              reply_repH3[j].innerHTML = 'Edit';
              delReply[j] = document.createElement('div');
              delRepCont[j] = document.createElement('p');
              delRepCont[j].innerHTML = 'Delete';
              delImg[j] = document.createElement('img');
              delImg[j].src = './interactive-comments-section-main/images/icon-delete.svg';
              reply_replys[j].prepend(delReply[j]);
              delReply[j].appendChild(delImg[j]);
              delReply[j].appendChild(delRepCont[j]);

              delReply[j].addEventListener('click',()=>{
                delReply[j].parentElement.parentElement.parentElement.parentElement.remove();
              });

              // reply_repH3[j].addEventListener('click',()=>{
              //   let wrapperCmt = document.createElement('div');
              //   wrapperCmt.classList.add('add-cmt');
              //   let replyerImg = document.createElement('img');
              //   replyerImg.src = data.currentUser.image.webp;
              //   let replyText = document.createElement('textarea');
              //   replyText.setAttribute('id','comment');
                
              //   replyText.placeholder = 'Leave the comments';
              //   replyText.value = reply_repH3[j].parentElement.parentElement.nextElementSibling.lastChild.lastChild;
              //   console.log(reply_repH3[j].parentElement.parentElement.parentElement.parentElement)
              //   let replyBtn = document.createElement('button');
                
              //   replyBtn.innerHTML = 'Reply';
              //   wrapperCmt.appendChild(replyerImg);
              //   wrapperCmt.appendChild(replyText);
              //   wrapperCmt.appendChild(replyBtn);

              // })
              console.log('equal')
            }
            cmtId++;
          }
          
        }
        if(proH3[i].innerHTML === data.currentUser.username){
          console.log('outter');
          isCurren_user[i] = document.createElement('span');
          isCurren_user[i].innerHTML = 'you';
          profiles[i].insertBefore(isCurren_user[i],profilePara[i]);
          repImgs[i].src = './interactive-comments-section-main/images/icon-edit.svg';
          repH3[i].innerHTML = 'Edit';
          delReply[i] = document.createElement('div');
          delRepCont[i] = document.createElement('p');
          delRepCont[i].innerHTML = 'Delete';
          delImg[i] = document.createElement('img');
          delImg[i].src = './interactive-comments-section-main/images/icon-delete.svg';
          replys[i].prepend(delReply[i]);
          delReply[i].appendChild(delImg[i]);
          delReply[i].appendChild(delRepCont[i]);
          delReply[i].addEventListener('click',()=>{
            delReply[i].parentElement.parentElement.parentElement.parentElement.remove();
          });
        }
        cmtId++;
    }

    userComments();
    reply();
}

function userComments(){
  // for user comments at the bottom of the all comments
  let addCmt = document.createElement('div');
  addCmt.classList.add('add-cmt');
  cards.appendChild(addCmt);
  let userImg = document.createElement('img');
  userImg.src = data.currentUser.image.webp;
  let cmtSect = document.createElement('textarea');
  cmtSect.setAttribute('id','comment');
  cmtSect.placeholder = 'Add a comment';
  let btn = document.createElement('button');
  btn.innerHTML = 'Send';
  addCmt.appendChild(userImg);
  addCmt.appendChild(cmtSect);
  addCmt.appendChild(btn);

  btn.addEventListener('click',()=>{
    cmtSect.addEventListener('click', ()=>{
      cmtSect.placeholder = '';
      cmtSect.classList.remove('text');
    })
    if(cmtSect.value === ''){
        cmtSect.style.border = '2px solid hsl(357, 100%, 86%)'
        cmtSect.placeholder = 'Enter a message';
        cmtSect.classList.add('text');
    }
    else{
      let newComment = {
        "id": cmtId+1,
        "content": cmtSect.value,
        "createdAt": `${new Date().getHours()} hours ago`,
        "score": 5,
        "user": data.currentUser,
        "replies": []
      } 
      data.comments.push(newComment);
      cards.remove();
      insertComments();
    }
    
  })
}

function reply(){
  replys.forEach((rep)=>{
    replied(rep)
  })
  reply_replys.forEach((rep)=>{
    replied(rep)
  })
}

function replied(rep){
    rep.lastChild.addEventListener('click',()=>{
     if(rep.lastChild.innerHTML === 'Edit'){
      console.log('equal')
      let repName = rep.parentElement.nextElementSibling.lastChild.firstChild.innerHTML;
      rep.parentElement.nextElementSibling.lastChild.firstChild.remove();
      let oldCmt = rep.parentElement.nextElementSibling.lastChild.innerHTML;
      rep.parentElement.nextElementSibling.lastChild.remove();

      let newTextarea = document.createElement('textarea');
      
      newTextarea.setAttribute('id','comment');
      rep.parentElement.nextElementSibling.appendChild(newTextarea);
      newTextarea.value = oldCmt;
      // newTextarea.value = newTextarea.value.toString();
      console.log(rep.parentElement.nextElementSibling);
      let update = document.createElement('button');
      update.innerHTML = 'Update';
      rep.parentElement.nextElementSibling.appendChild(update);
      
      update.addEventListener('click',()=>{
        for(let i=0; i<data.comments.length; i++){
          if(repName == data.comments[i].user.username){}
          else{
            for(let j=0; j<data.comments[i].replies.length; j++){
              if(repName == data.comments[i].replies[j].replyingTo){
                // let newReply = {
                //   "id": cmtId+1,
                //   "content": msgVal,
                //   "createdAt": `${currDate.getHours()} hours ago`,
                //   "score": 5,
                //   "repling to": replyTo.innerHTML,
                //   "user": data.currentUser
                // } 
                data.comments[i].replies[j].content = newTextarea.value;
                break;
              }
            }
            cards.remove();
            insertComments();
          }
        }
        console.log(newTextarea.value,repName);
      });
     }
     else{
      console.log('not')
      let wrapperCmt = document.createElement('div');
      wrapperCmt.classList.add('add-cmt');
      let replyerImg = document.createElement('img');
      replyerImg.src = data.currentUser.image.webp;
      let replyText = document.createElement('textarea');
      replyText.setAttribute('id','comment');
      replyText.placeholder = 'Leave the comments';
      let replyBtn = document.createElement('button');
      replyBtn.innerHTML = 'Reply';
      wrapperCmt.appendChild(replyerImg);
      wrapperCmt.appendChild(replyText);
      wrapperCmt.appendChild(replyBtn);
      // let repling = userComments();
      let send = wrapperCmt.lastChild;
      let dummy = document.createElement('div');
      rep.parentElement.parentElement.parentElement.parentElement.insertBefore(dummy,rep.parentElement.parentElement.parentElement);
      dummy.appendChild(rep.parentElement.parentElement.parentElement);
      dummy.appendChild(wrapperCmt);
      if(wrapperCmt.previousElementSibling.className == 'cmt-reply-card')
        wrapperCmt.classList.add('add-reply-card');
  
      send.addEventListener('click',()=>{
        let msg = document.getElementById('comment');
        // console.log(msg)
        msg.addEventListener('click',()=>{
          msg.classList.remove('text');
          msg.placeholder = '';
        })
        if(msg.value === ''){
          msg.style.border = '2px solid hsl(357, 100%, 86%)'
          msg.placeholder = 'Enter a message';
          msg.classList.add('text');
          console.log(cmtId)
        }
        else{
          let msgVal = msg.value;
          let score = wrapperCmt.previousElementSibling.querySelector('.num');
          let scoreVal = score.innerHTML
          console.log(scoreVal)
          for(let i=0; i<data.comments.length; i++){
            let varScore = data.comments[i].score;
            if(scoreVal == varScore){
              console.log('true')
              let replyTo = wrapperCmt.previousElementSibling.querySelector('.profile h3');
              let currDate = new Date()
              let newReply = {
                "id": cmtId+1,
                "content": msgVal,
                "createdAt": `${currDate.getHours()} hours ago`,
                "score": 5,
                "repling to": replyTo.innerHTML,
                "user": data.currentUser
              } 
              data.comments[i].replies.push(newReply)
              break;
            }
            else{
              console.log('false')
              for(let j=0; j<data.comments[i].replies.length; j++){
                let repScore = data.comments[i].replies[j].score;
                if(scoreVal == repScore){
                  let replyTo = wrapperCmt.previousElementSibling.querySelector('.profile h3');
                  let currDate = new Date();
                  let newReply = {
                    "id": cmtId+1,
                    "content": msgVal,
                    "createdAt": `${currDate.getHours()} hours ago`,
                    "score": 5,
                    "repling to": replyTo.innerHTML,
                    "user": data.currentUser
                  } 
                  data.comments[i].replies.push(newReply)
                  break;
                }
              }
              // break;
            }
          }
            // console.log(data.comments[0])
            cards.remove();
            insertComments();
          // console.log(cmtId);
          
        }
        console.log(send.parentElement.previousElementSibling,'clicked')
      });
  
      console.log(rep.parentElement.parentElement.parentElement);
     }
    });
    
}


insertComments();

