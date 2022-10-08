window.onload = () => {
  const shareData = {
      title: 'MDN',
      text: 'Learn web development on MDN!',
      url: 'https://developer.mozilla.org'
    }

    const btn = document.getElementById('share_btn');
    // Share must be triggered by "user activation"
    btn.addEventListener('click', async () => { 
      try {
        await navigator.share(shareData);
      } catch (err) {
        alert(err)
      }
    });  
}
