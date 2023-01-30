const modFormHandler = async (event) => {
    event.preventDefault();
  
    const update = document.querySelector('#update-blog').value.trim();
    const updatetag = document.getElementById("updatetag").innerHTML;
    console.log(updatetag);
    if (update) {
      const response = await fetch('/api/users/update', {
        method: 'PUT',
        body: JSON.stringify({ updatetag, update }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update blog');
      }
    }
  };
  
  document
    .querySelector('.update-form')
    .addEventListener('submit', modFormHandler);

const delfunction = async (event) => {
        event.preventDefault();
    
        const deltag = document.getElementById("updatetag").innerHTML;
    console.log(deltag);
        if (deltag) {
            const response = await fetch('/api/users/delete', {
              method: 'DELETE',
              body: JSON.stringify({ deltag }),
              headers: { 'Content-Type': 'application/json' },
            });
        
            if (response.ok) {
              document.location.replace('/dashboard');
            } else {
              alert('Failed to update blog');
            }
          }
        }

const delData = document.getElementById('delbutton');
delData.addEventListener("click", delfunction);

