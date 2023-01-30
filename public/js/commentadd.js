
const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment-comment').value.trim();
    const commenttag = document.getElementById("commenttag").innerHTML;
    console.log(commenttag);
  
    if (comment) {
      const response = await fetch('/api/users/commentpost', {
        method: 'POST',
        body: JSON.stringify({ commenttag, comment }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add comment');
      }
    }
  };
  
  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);