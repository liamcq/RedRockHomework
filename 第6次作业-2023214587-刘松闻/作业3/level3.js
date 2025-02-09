let submit = document.getElementById('submit');
let commentInput = document.getElementById('commentInput');
let commentList = document.getElementById('commentList');

submit.onclick = function () {
    // 获取用户输入并验证
    const commentText = commentInput.value.trim();
    if (commentText === "") {
        alert("评论不能为空");
        return;
    }

    // 创建评论项
    const commentItem = document.createElement('li');
    commentItem.className = 'comment';

    // 头像
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    commentItem.appendChild(avatar);

    // 评论内容
    const commentContent = document.createElement('div');
    commentContent.className = 'comment-content';
    commentContent.textContent = commentText;
    commentItem.appendChild(commentContent);

    // 删除按钮
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '删除';
    deleteBtn.style.display = 'none'; // 初始隐藏
    deleteBtn.onclick = function () {
        commentList.removeChild(commentItem); // 删除评论
    };
    commentItem.appendChild(deleteBtn);

    // 添加回复
    const replyBtn = document.createElement('button');
    replyBtn.className = 'reply-btn';
    replyBtn.textContent = '回复';
    replyBtn.style.display = 'block'; // 初始显示
    replyBtn.onclick = function () {
        const replyInput = document.createElement('input');
        replyInput.className = "replyInput";
        replyInput.placeholder = "回复";
        commentItem.appendChild(replyInput);

        const replySubmit = document.createElement('button');
        replySubmit.className = "replySubmit";
        replySubmit.textContent = "提交";
        replySubmit.onclick = function () {
            const replyText = replyInput.value.trim();
            if (replyText === "") {
                alert("回复不能为空");
                return;
            }
            const replyItem = document.createElement('div');
            replyItem.className = 'reply';
            replyItem.textContent = replyText;
            commentItem.appendChild(replyItem);
            replyInput.value = "";
            commentItem.removeChild(replyInput);
            commentItem.removeChild(replySubmit);
        };
        commentItem.appendChild(replySubmit);
    };
    commentItem.appendChild(replyBtn);

    // 右键菜单功能
    commentItem.addEventListener('contextmenu', function (e) {
        e.preventDefault(); // 阻止默认右键菜单
        deleteBtn.style.display = 'block'; // 显示删除按钮
    });

    // 将评论项添加到评论列表中
    commentList.appendChild(commentItem);

    // 清空输入框
    commentInput.value = "";
};