// Video Comments Functionality
document.addEventListener("DOMContentLoaded", function () {
  const commentInput = document.getElementById("commentText");
  const submitBtn = document.getElementById("submitComment");
  const commentsList = document.getElementById("commentsList");
  const charCount = document.getElementById("charCount");
  const commentsCount = document.querySelector(".comments-count");
  const sortSelect = document.getElementById("sortSelect");

  let comments = [];

  // Load saved comments
  function loadComments() {
    const saved = localStorage.getItem("volgaMoreComments");
    if (saved) {
      comments = JSON.parse(saved);
    }
    renderComments();
  }

  // Save comments
  function saveComments() {
    localStorage.setItem("volgaMoreComments", JSON.stringify(comments));
  }

  // Format date
  function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const hours = Math.floor(diff / 3600000);

    if (hours < 1) {
      return "только что";
    } else if (hours < 24) {
      return `${hours} ${getHourWord(hours)} назад`;
    } else {
      return date.toLocaleDateString("ru-RU");
    }
  }

  function getHourWord(hours) {
    if (hours % 10 === 1 && hours % 100 !== 11) return "час";
    if ([2, 3, 4].includes(hours % 10) && ![12, 13, 14].includes(hours % 100))
      return "часа";
    return "часов";
  }

  // Escape HTML
  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  // Render comments
  function renderComments() {
    if (comments.length === 0) {
      commentsList.innerHTML = `
        <div class="no-comments">
          <i class="fa-regular fa-message"></i>
          <p>Пока нет комментариев. Будьте первым!</p>
        </div>
      `;
      commentsCount.textContent = "(0)";
      return;
    }

    let sortedComments = [...comments];
    const sortValue = sortSelect.value;

    if (sortValue === "DATE_DESC") {
      sortedComments.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortValue === "DATE_ASC") {
      sortedComments.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortValue === "LIKES") {
      sortedComments.sort((a, b) => b.likes - a.likes);
    }

    commentsList.innerHTML = sortedComments
      .map(
        (comment) => `
      <div class="comment-item" data-id="${comment.id}">
        <div class="comment-avatar-sm">
          <img src="./foto/placeholder/avatar-placeholder.jpg" alt="Аватар">
        </div>
        <div class="comment-content">
          <div class="comment-author">
            <span class="comment-author-name">${escapeHtml(comment.author)}</span>
            <span class="comment-date">${formatDate(comment.date)}</span>
          </div>
          <p class="comment-text">${escapeHtml(comment.text)}</p>
          <div class="comment-actions-sm">
            <button class="comment-like" data-id="${comment.id}">
              <i class="fa-regular fa-heart"></i> ${comment.likes}
            </button>
          </div>
        </div>
      </div>
    `,
      )
      .join("");

    commentsCount.textContent = `(${comments.length})`;

    // Add like handlers
    document.querySelectorAll(".comment-like").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id);
        const comment = comments.find((c) => c.id === id);
        if (comment) {
          comment.likes++;
          saveComments();
          renderComments();
        }
      });
    });
  }

  // Add new comment
  function addComment(text) {
    const newComment = {
      id: Date.now(),
      author: "Гость",
      text: text.trim(),
      date: new Date().toISOString(),
      likes: 0,
    };
    comments.unshift(newComment);
    saveComments();
    renderComments();
  }

  // Character counter
  if (commentInput) {
    commentInput.addEventListener("input", () => {
      const length = commentInput.value.length;
      charCount.textContent = length;
    });
  }

  // Submit comment
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      const text = commentInput.value.trim();
      if (text === "") {
        alert("Напишите комментарий");
        return;
      }
      if (text.length > 1000) {
        alert("Комментарий не может быть длиннее 1000 символов");
        return;
      }
      addComment(text);
      commentInput.value = "";
      charCount.textContent = "0";
    });
  }

  // Enter to submit
  if (commentInput) {
    commentInput.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key === "Enter") {
        submitBtn.click();
      }
    });
  }

  // Sort change
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      renderComments();
    });
  }

  // Load comments
  loadComments();
});
